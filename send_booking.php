<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, [
        'success' => false,
        'error' => 'method'
    ]);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (stripos($contentType, 'application/json') !== 0) {
    respond(415, [
        'success' => false,
        'error' => 'content_type'
    ]);
}

$raw = file_get_contents('php://input');

if ($raw === false || strlen($raw) > 10000) {
    respond(413, [
        'success' => false,
        'error' => 'size'
    ]);
}

$data = json_decode($raw, true);

if (!is_array($data)) {
    respond(400, [
        'success' => false,
        'error' => 'json'
    ]);
}

/*
|--------------------------------------------------------------------------
| Переводы писем и сообщений
|--------------------------------------------------------------------------
*/

$texts = [
    'ru' => [
        'subject' => 'Заявка на бронирование — LAKE FINLAND',
        'title' => 'Новая заявка на бронирование',
        'checkin' => 'Дата заезда',
        'checkout' => 'Дата выезда',
        'nights' => 'Количество ночей',
        'guests' => 'Количество гостей',
        'cabin' => 'Тип коттеджа',
        'price' => 'Цена за ночь',
        'total' => 'Общая стоимость',
        'email' => 'Электронная почта клиента',
        'guest_values' => [
            2 => '2 гостя',
            4 => '3–4 гостя',
            6 => '5–6 гостей'
        ],
        'cabin_values' => [
            'forest' => 'Forest Cabin',
            'lake' => 'Lake Cabin',
            'family' => 'Family Lodge'
        ],
        'success' => 'Заявка успешно отправлена!',
        'errors' => [
            'validation' => 'Проверьте правильность заполнения полей.',
            'dates' => 'Дата выезда должна быть позже даты заезда.',
            'capacity' => 'Выбранный коттедж не подходит по вместимости.',
            'mail' => 'Не удалось отправить заявку. Попробуйте позже.'
        ]
    ],

    'kk' => [
        'subject' => 'Брондау өтінімі — LAKE FINLAND',
        'title' => 'Жаңа брондау өтінімі',
        'checkin' => 'Келу күні',
        'checkout' => 'Кету күні',
        'nights' => 'Түн саны',
        'guests' => 'Қонақтар саны',
        'cabin' => 'Коттедж түрі',
        'price' => 'Бір түннің бағасы',
        'total' => 'Жалпы құны',
        'email' => 'Клиенттің электрондық поштасы',
        'guest_values' => [
            2 => '2 қонақ',
            4 => '3–4 қонақ',
            6 => '5–6 қонақ'
        ],
        'cabin_values' => [
            'forest' => 'Forest Cabin',
            'lake' => 'Lake Cabin',
            'family' => 'Family Lodge'
        ],
        'success' => 'Өтінім сәтті жіберілді!',
        'errors' => [
            'validation' => 'Енгізілген деректердің дұрыстығын тексеріңіз.',
            'dates' => 'Кету күні келу күнінен кейін болуы керек.',
            'capacity' => 'Таңдалған коттедж қонақтар санына сәйкес келмейді.',
            'mail' => 'Өтінімді жіберу мүмкін болмады. Кейінірек қайталап көріңіз.'
        ]
    ],

    'en' => [
        'subject' => 'Booking request — LAKE FINLAND',
        'title' => 'New booking request',
        'checkin' => 'Check-in date',
        'checkout' => 'Check-out date',
        'nights' => 'Number of nights',
        'guests' => 'Number of guests',
        'cabin' => 'Cabin type',
        'price' => 'Price per night',
        'total' => 'Total cost',
        'email' => 'Customer email',
        'guest_values' => [
            2 => '2 guests',
            4 => '3–4 guests',
            6 => '5–6 guests'
        ],
        'cabin_values' => [
            'forest' => 'Forest Cabin',
            'lake' => 'Lake Cabin',
            'family' => 'Family Lodge'
        ],
        'success' => 'Your booking request was sent successfully!',
        'errors' => [
            'validation' => 'Please check the information you entered.',
            'dates' => 'The check-out date must be after the check-in date.',
            'capacity' => 'The selected cabin does not accommodate this number of guests.',
            'mail' => 'Could not send your request. Please try again later.'
        ]
    ],

    'fi' => [
        'subject' => 'Varauspyyntö — LAKE FINLAND',
        'title' => 'Uusi varauspyyntö',
        'checkin' => 'Saapumispäivä',
        'checkout' => 'Lähtöpäivä',
        'nights' => 'Öiden määrä',
        'guests' => 'Vieraiden määrä',
        'cabin' => 'Mökin tyyppi',
        'price' => 'Hinta yöltä',
        'total' => 'Kokonaishinta',
        'email' => 'Asiakkaan sähköposti',
        'guest_values' => [
            2 => '2 vierasta',
            4 => '3–4 vierasta',
            6 => '5–6 vierasta'
        ],
        'cabin_values' => [
            'forest' => 'Forest Cabin',
            'lake' => 'Lake Cabin',
            'family' => 'Family Lodge'
        ],
        'success' => 'Varauspyyntö lähetettiin onnistuneesti!',
        'errors' => [
            'validation' => 'Tarkista antamasi tiedot.',
            'dates' => 'Lähtöpäivän on oltava saapumispäivän jälkeen.',
            'capacity' => 'Valittu mökki ei sovellu näin suurelle seurueelle.',
            'mail' => 'Pyynnön lähettäminen epäonnistui. Yritä myöhemmin uudelleen.'
        ]
    ]
];

$language = $data['language'] ?? 'ru';

if (!is_string($language) || !isset($texts[$language])) {
    $language = 'ru';
}

$t = $texts[$language];

/*
|--------------------------------------------------------------------------
| Получение и проверка данных
|--------------------------------------------------------------------------
*/

$checkin = $data['checkin'] ?? null;
$checkout = $data['checkout'] ?? null;
$email = $data['email'] ?? null;
$cabin = $data['cabin'] ?? null;

$guests = filter_var(
    $data['guests'] ?? null,
    FILTER_VALIDATE_INT
);

$prices = [
    'forest' => 90,
    'lake' => 140,
    'family' => 210
];

$capacities = [
    'forest' => 2,
    'lake' => 4,
    'family' => 6
];

function isValidDate($value): bool
{
    if (!is_string($value)) {
        return false;
    }

    $date = DateTimeImmutable::createFromFormat('!Y-m-d', $value);

    return $date !== false
        && $date->format('Y-m-d') === $value;
}

if (
    !isValidDate($checkin) ||
    !isValidDate($checkout) ||
    !is_string($email) ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    !is_string($cabin) ||
    !isset($prices[$cabin]) ||
    !in_array($guests, [2, 4, 6], true)
) {
    respond(422, [
        'success' => false,
        'error' => 'validation',
        'message' => $t['errors']['validation']
    ]);
}

$start = new DateTimeImmutable($checkin);
$end = new DateTimeImmutable($checkout);

if ($end <= $start) {
    respond(422, [
        'success' => false,
        'error' => 'dates',
        'message' => $t['errors']['dates']
    ]);
}

if ($guests > $capacities[$cabin]) {
    respond(422, [
        'success' => false,
        'error' => 'capacity',
        'message' => $t['errors']['capacity']
    ]);
}

$nights = (int) $start->diff($end)->days;

if ($nights < 1 || $nights > 365) {
    respond(422, [
        'success' => false,
        'error' => 'dates',
        'message' => $t['errors']['dates']
    ]);
}

$price = $prices[$cabin];
$total = $price * $nights;

/*
|--------------------------------------------------------------------------
| Формирование письма на выбранном языке
|--------------------------------------------------------------------------
*/

$lines = [
    $t['title'],
    '',
    $t['checkin'] . ': ' . $checkin,
    $t['checkout'] . ': ' . $checkout,
    $t['nights'] . ': ' . $nights,
    $t['guests'] . ': ' . $t['guest_values'][$guests],
    $t['cabin'] . ': ' . $t['cabin_values'][$cabin],
    $t['price'] . ': €' . $price,
    $t['total'] . ': €' . $total,
    $t['email'] . ': ' . $email
];

try {
    $config = require __DIR__ . '/config.php';

    require __DIR__ . '/vendor/autoload.php';

    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure =
        PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int) $config['smtp_port'];

    $mail->CharSet = 'UTF-8';
    $mail->isHTML(false);

    // Отправитель — настроенный SMTP-аккаунт.
    $mail->setFrom(
        $config['smtp_username'],
        'LAKE FINLAND'
    );

    // Получатель заявки.
    $mail->addAddress($config['recipient_email']);

    // Ответ на письмо можно направить клиенту.
    $mail->addReplyTo($email);

    $mail->Subject = $t['subject'];
    $mail->Body = implode("\n", $lines);

    $mail->send();

    respond(200, [
        'success' => true,
        'message' => $t['success']
    ]);

} catch (Throwable $e) {
    error_log('PHPMailer error: ' . $e->getMessage());

    respond(500, [
        'success' => false,
        'error' => 'mail',
        'message' => $t['errors']['mail']
    ]);
} 
?>