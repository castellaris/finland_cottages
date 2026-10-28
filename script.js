(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const form = $("#form");
  const checkin = $("#checkin");
  const checkout = $("#checkout");
  const total = $("#total");
  const summary = $("#summary");
  const hint = $("#hint");
  const error = $("#error");
  const success = $("#success");
  const email = $("#email");
  const languageSelect = $("#language");
  const burger = $("#burger");
  const nav = $("#nav");

  const capacity = {
    forest: 2,
    lake: 4,
    family: 6
  };

  const prices = {
    forest: 90,
    lake: 140,
    family: 210
  };

  const names = {
    forest: "Forest Cabin",
    lake: "Lake Cabin",
    family: "Family Lodge"
  };

  const translations = {
    en: {
  nav_about: "About",
  nav_cabins: "Cabins",
  nav_guests: "Who it's for",
  nav_partners: "Partners",
  nav_program: "Activities",
  nav_faq: "FAQ",
  nav_book: "Book a cabin",
  language_label: "Website language",

  hero_alt: "Wooden cabin by a lake at sunset",
  concept_alt: "Red cabins among pine trees by the lake",
  hero_place: "Savonlinna, Finland · Holidays for guests from Kazakhstan",
  hero_title: "Your cosy home among Finnish lakes",
  hero_lead: "Discover Finland in your own wooden lakeside cabin. Enjoy the sauna, northern nature and travel-planning assistance through tourism partners.",
  hero_point1: "Cabins from €90 per night",
  hero_point2: "Options for 2–6 guests",
  hero_point3: "Holidays for couples, families and friends",
  hero_button: "Choose a cabin",
  hero_note: "Travel from Kazakhstan and discover Finland's natural beauty.",

  concept_title: "Holiday cabins by Lake Saimaa",
  fact_location_title: "Location",
  fact_location: "South Savo region, near the city of Savonlinna, by Lake Saimaa.",
  fact_format_title: "Format",
  fact_format: "Educational concept: 8 wooden cabins, a lakeside area, a sauna and boat rental.",
  fact_capacity_title: "Capacity",
  fact_capacity: "From 2 to 6 guests, depending on the cabin type.",
  fact_season_title: "Season",
  fact_season: "Year-round: walks and fishing in summer, sauna and snow activities in winter.",
  concept_usp: "A private cabin, equipped kitchen and lakeside relaxation offer an alternative to a standard hotel room.",
  concept_point1: "Privacy and comfort for an independent holiday",
  concept_point2: "Sauna and equipped kitchen",
  concept_point3: "Fishing, swimming and boating in season",
  concept_point4: "Accommodation for couples, families and groups of up to 6",
  concept_point5: "A fireplace and forest walks in winter",

  prices_title: "Cabins and prices",
  prices_note: "Prices are provided for this educational mock-up and are not current rates for a real holiday resort.",
  per_night: "per night",
  forest_meta: "2 guests · 25 m²",
  forest_1: "Double bed",
  forest_2: "Kitchenette and bathroom",
  forest_3: "Terrace overlooking the forest",
  forest_4: "Access to a shared sauna",
  choose_forest: "Choose Forest Cabin",

  lake_meta: "4 guests · 45 m²",
  lake_1: "Two sleeping areas",
  lake_2: "Fully equipped kitchen",
  lake_3: "Private sauna",
  lake_4: "Terrace and barbecue area",
  choose_lake: "Choose Lake Cabin",

  family_meta: "6 guests · 70 m²",
  family_1: "Three sleeping areas",
  family_2: "Living room with a fireplace",
  family_3: "Fully equipped kitchen",
  family_4: "Sauna and spacious terrace",
  choose_family: "Choose Family Lodge",

  audience_title: "A holiday that suits you",
  audience_sub: "The project is particularly aimed at travellers from Kazakhstan who want to discover Finland's nature and relaxed pace of life.",
  aud_couples_title: "Couples",
  aud_couples: "Privacy, a sauna, beautiful views and a getaway for two. Forest Cabin is a suitable option.",
  aud_couples_quote: "A getaway for two: a cosy cabin and sunsets over the lake.",
  aud_families_title: "Families with children",
  aud_families: "A kitchen, separate sleeping areas and room for family time. Family Lodge is a suitable option.",
  aud_families_quote: "A family holiday surrounded by nature in your own lakeside cabin.",
  aud_friends_title: "Groups of friends",
  aud_friends: "A cabin, barbecue, sauna and shared relaxation area. Lake Cabin or Family Lodge is suitable.",
  aud_friends_quote: "Bring your friends and spend a few days among Finland's lakes.",
  aud_nature_title: "Nature lovers",
  aud_nature: "Forest trails, fishing, rowing and a chance to escape the bustle of the city.",
  aud_nature_quote: "Discover northern Finland's nature at your own pace.",

  partners_title: "Cooperation with travel agencies in Kazakhstan",
  partners_text: "The project aims to develop partnerships with travel agencies in Kazakhstan, including through memorandums of understanding. Travellers will be able to obtain accommodation information and plan their trip to Finland through partner agencies.",
  partners_note: "Information about specific agencies, signed memorandums and available travel packages will be published after official confirmation.",
  partners_benefits_title: "For guests from Kazakhstan",
  partners_benefit1: "Clear information about accommodation options and prices",
  partners_benefit2: "The option to contact your travel agency",
  partners_benefit3: "Help with route planning within the services offered by the selected partner",
  partners_benefit4: "Information in Russian, Kazakh and English",

  booking_title: "Choose your cabin",
  booking_note: "Demo form: no booking request is sent.",
  checkin_label: "Check-in date",
  checkout_label: "Check-out date",
  guests_legend: "Number of guests",
  guests_2: "2 guests",
  guests_4: "3–4 guests",
  guests_6: "5–6 guests",
  cabin_legend: "Cabin type",
  form_forest: "Forest Cabin — €90/night",
  form_lake: "Lake Cabin — €140/night",
  form_family: "Family Lodge — €210/night",
  email_label: "Email address",
  total_label: "Estimated total",
  submit_button: "Prepare request",

  program_title: "Three-day holiday itinerary",
  day1_title: "Day 1 — arrival and relaxation",
  day1_1: "15:00 — check in to the cabin",
  day1_2: "16:00 — walk along the lake",
  day1_3: "18:00 — dinner on the terrace",
  day1_4: "20:00 — evening sauna",
  day2_title: "Day 2 — outdoor activities",
  day2_1: "09:00 — breakfast",
  day2_2: "10:00 — boat trip or fishing",
  day2_3: "13:00 — lakeside picnic",
  day2_4: "16:00 — walk along a forest trail",
  day2_5: "19:00 — barbecue and relaxation",
  day3_title: "Day 3 — nature and departure",
  day3_1: "09:00 — breakfast on the terrace",
  day3_2: "10:00 — photo walk by the shore",
  day3_3: "11:00 — pack up and check out",

  faq_title: "Frequently asked questions",
  faq_q1: "What is included in the price?",
  faq_a1: "Accommodation, use of the kitchen and basic furniture are included. Sauna access depends on the cabin selected.",
  faq_q2: "Can we visit with children?",
  faq_a2: "Yes. Family Lodge accommodates up to six guests and is intended for family stays.",
  faq_q3: "Can we go fishing?",
  faq_a3: "Yes, provided that local fishing regulations are followed.",
  faq_q4: "Is Wi-Fi available?",
  faq_a4: "Wi-Fi availability must be confirmed for the actual property.",
  faq_q5: "Can we bring pets?",
  faq_a5: "Pets are allowed only by prior arrangement.",
  faq_q6: "How can we travel from Kazakhstan?",
  faq_a6: "Check the route and travel requirements with official sources and your chosen travel agency before booking.",
  faq_q7: "Is this an operating holiday resort?",
  faq_a7: "No. This is an educational mock-up. Prices, capacity and partnership arrangements must be confirmed before real-world use.",

  footer_text: "Savonlinna, South Savo, Finland. Educational concept; partnership details require confirmation.",

  error_dates: "Check-out must be after check-in.",
  error_capacity: "Please choose a cabin that fits your group.",
  error_email: "Enter a valid email address.",
  success_prefix: "Request prepared:",
  menu_open: "Open menu",
  menu_close: "Close menu",
  hint_capacity: " accommodates up to ",
  hint_suffix: " guests. Please choose a larger cabin.",
  night_one: "night",
  night_few: "nights",
  night_many: "nights",
  guests_two: "2 guests",
  guests_34: "3–4 guests",
  guests_56: "5–6 guests"
},

    kk: {
  nav_about: "Демалыс орны туралы",
  nav_cabins: "Коттедждер",
  nav_guests: "Кімдерге арналған",
  nav_partners: "Серіктестерге",
  nav_program: "Бағдарлама",
  nav_faq: "Сұрақтар",
  nav_book: "Коттеджді брондау",
  language_label: "Сайт тілі",

  hero_alt: "Күн батқан кезде көл жағасындағы ағаш коттедж",
  concept_alt: "Көл жағасындағы қарағайлар арасындағы қызыл коттедждер",
  hero_place: "Савонлинна, Финляндия · Қазақстаннан келген қонақтарға арналған демалыс",
  hero_title: "Фин көлдерінің арасындағы жайлы үйіңіз",
  hero_lead: "Финляндияны көл жағасындағы ағаш коттеджде тамашалаңыз. Саунадан, солтүстік табиғаттан ләззат алыңыз және туристік серіктестер арқылы сапарды жоспарлауға көмек алыңыз.",
  hero_point1: "Коттедждер бір түнге €90-дан басталады",
  hero_point2: "2–6 қонаққа арналған нұсқалар",
  hero_point3: "Жұптарға, отбасыларға және достарға арналған демалыс",
  hero_button: "Коттедж таңдау",
  hero_note: "Қазақстаннан Финляндия табиғатына саяхат.",

  concept_title: "Сайма көлінің жағасындағы демалыс орны",
  fact_location_title: "Орналасқан жері",
  fact_location: "Оңтүстік Саво өңірі, Савонлинна қаласының маңы, Сайма көлі.",
  fact_format_title: "Форматы",
  fact_format: "Оқу жобасының тұжырымдамасы: 8 ағаш коттедж, жағалау аймағы, сауна және қайықтарды жалға алу.",
  fact_capacity_title: "Сыйымдылығы",
  fact_capacity: "Коттедж түріне байланысты 2-ден 6 адамға дейін.",
  fact_season_title: "Маусым",
  fact_season: "Жыл бойы: жазда серуендеу мен балық аулау, қыста сауна және қардағы ойын-сауық.",
  concept_usp: "Жеке коттедж, жабдықталған асүй және көл жағасындағы демалыс — кәдімгі қонақүй бөлмесіне балама.",
  concept_point1: "Жеке демалысқа арналған тыныштық пен жайлылық",
  concept_point2: "Сауна және жабдықталған асүй",
  concept_point3: "Маусым кезінде балық аулау, жүзу және қайықпен серуендеу",
  concept_point4: "Жұптарға, отбасыларға және 6 адамға дейінгі топтарға арналған орын",
  concept_point5: "Қыста камин және орманда серуендеу",

  prices_title: "Коттедждер мен бағалар",
  prices_note: "Бағалар оқу макетіне арналған және нақты демалыс орнының қолданыстағы тарифтері болып саналмайды.",
  per_night: "бір түнге",
  forest_meta: "2 қонақ · 25 м²",
  forest_1: "Екі адамдық төсек",
  forest_2: "Шағын асүй және жуынатын бөлме",
  forest_3: "Орман көрінісі бар терраса",
  forest_4: "Ортақ саунаны пайдалану",
  choose_forest: "Forest Cabin коттеджін таңдау",

  lake_meta: "4 қонақ · 45 м²",
  lake_1: "Екі ұйықтау аймағы",
  lake_2: "Толық жабдықталған асүй",
  lake_3: "Жеке сауна",
  lake_4: "Терраса және барбекю аймағы",
  choose_lake: "Lake Cabin коттеджін таңдау",

  family_meta: "6 қонақ · 70 м²",
  family_1: "Үш ұйықтау аймағы",
  family_2: "Камині бар қонақ бөлме",
  family_3: "Толық жабдықталған асүй",
  family_4: "Сауна және кең терраса",
  choose_family: "Family Lodge коттеджін таңдау",

  audience_title: "Сізге сәйкес демалыс",
  audience_sub: "Жоба Финляндияның табиғаты мен тыныш өмір ырғағын танығысы келетін Қазақстан саяхатшыларына бағытталған.",
  aud_couples_title: "Жұптар",
  aud_couples: "Жеке кеңістік, сауна, әдемі көріністер және екеуге арналған демалыс. Forest Cabin қолайлы.",
  aud_couples_quote: "Екеуіңізге арналған саяхат: жайлы коттедж және көл үстіндегі күн батуы.",
  aud_families_title: "Балалы отбасылар",
  aud_families: "Асүй, бөлек ұйықтау орындары және отбасылық демалысқа арналған кеңістік. Family Lodge қолайлы.",
  aud_families_quote: "Табиғат аясындағы отбасылық демалыс — су жағасындағы жеке коттеджде.",
  aud_friends_title: "Достар тобы",
  aud_friends: "Коттедж, барбекю, сауна және ортақ демалыс аймағы. Lake Cabin немесе Family Lodge қолайлы.",
  aud_friends_quote: "Достарыңызды жинап, Фин көлдерінің арасында бірнеше күн өткізіңіз.",
  aud_nature_title: "Табиғат әуесқойлары",
  aud_nature: "Орман жолдары, балық аулау, ескек есу және қала қарбаласынан демалу мүмкіндігі.",
  aud_nature_quote: "Финляндияның солтүстік табиғатын өз қарқыныңызбен ашыңыз.",

  partners_title: "Қазақстанның туристік агенттіктерімен ынтымақтастық",
  partners_text: "Жоба Қазақстанның туристік агенттіктерімен, соның ішінде өзара түсіністік туралы меморандумдар негізінде, серіктестік қатынастарды дамытуды көздейді. Серіктестер арқылы саяхатшылар орналастыру нұсқалары туралы ақпарат алып, Финляндияға сапарын жоспарлай алады.",
  partners_note: "Нақты агенттіктер, қол қойылған меморандумдар және қолжетімді туристік пакеттер туралы ақпарат ресми расталғаннан кейін жарияланады.",
  partners_benefits_title: "Қазақстаннан келген қонақтарға",
  partners_benefit1: "Орналастыру нұсқалары мен бағалары туралы түсінікті ақпарат",
  partners_benefit2: "Өз туристік агенттігіңізге жүгіну мүмкіндігі",
  partners_benefit3: "Таңдалған серіктес ұсынатын қызметтер шегінде маршрутты жоспарлауға көмек",
  partners_benefit4: "Орыс, қазақ және ағылшын тілдеріндегі ақпарат",

  booking_title: "Коттедж таңдау",
  booking_note: "Демонстрациялық форма: өтінім жіберілмейді.",
  checkin_label: "Келу күні",
  checkout_label: "Кету күні",
  guests_legend: "Қонақтар саны",
  guests_2: "2 қонақ",
  guests_4: "3–4 қонақ",
  guests_6: "5–6 қонақ",
  cabin_legend: "Коттедж түрі",
  form_forest: "Forest Cabin — €90/түн",
  form_lake: "Lake Cabin — €140/түн",
  form_family: "Family Lodge — €210/түн",
  email_label: "Электрондық пошта",
  total_label: "Алдын ала есептелген құны",
  submit_button: "Өтінімді дайындау",

  program_title: "Үш күндік демалыс бағдарламасы",
  day1_title: "1-күн — келу және демалу",
  day1_1: "15:00 — коттеджге орналасу",
  day1_2: "16:00 — көл жағасында серуендеу",
  day1_3: "18:00 — террасада кешкі ас",
  day1_4: "20:00 — кешкі сауна",
  day2_title: "2-күн — белсенді демалыс",
  day2_1: "09:00 — таңғы ас",
  day2_2: "10:00 — қайықпен серуендеу немесе балық аулау",
  day2_3: "13:00 — көл жағасындағы пикник",
  day2_4: "16:00 — орман соқпағымен серуендеу",
  day2_5: "19:00 — барбекю және демалыс",
  day3_title: "3-күн — табиғат және қайту",
  day3_1: "09:00 — террасада таңғы ас",
  day3_2: "10:00 — жағалауда фото-серуен",
  day3_3: "11:00 — жиналу және шығу",

  faq_title: "Жиі қойылатын сұрақтар",
  faq_q1: "Бағаға не кіреді?",
  faq_a1: "Тұру, асүйді және негізгі жиһазды пайдалану кіреді. Саунаны пайдалану мүмкіндігі таңдалған коттеджге байланысты.",
  faq_q2: "Балалармен келуге бола ма?",
  faq_a2: "Иә, отбасыларға алты адамға арналған Family Lodge коттеджі ұсынылады.",
  faq_q3: "Балық аулауға бола ма?",
  faq_a3: "Иә, жергілікті балық аулау ережелерін сақтаған жағдайда.",
  faq_q4: "Wi-Fi бар ма?",
  faq_a4: "Нақты нысанда Wi-Fi бар-жоғын алдын ала растау қажет.",
  faq_q5: "Үй жануарларымен келуге бола ма?",
  faq_a5: "Алдын ала келісу арқылы.",
  faq_q6: "Қазақстаннан қалай жетуге болады?",
  faq_a6: "Сапар бағыты мен талаптарын брондау алдында ресми дереккөздерден және таңдалған туристік агенттіктен нақтылау керек.",
  faq_q7: "Бұл жұмыс істеп тұрған демалыс орны ма?",
  faq_a7: "Жоқ. Бұл — оқу макеті. Нақты пайдаланар алдында бағаларды, сыйымдылықты және серіктестік шарттарын растау қажет.",

  footer_text: "Савонлинна, Оңтүстік Саво, Финляндия. Оқу жобасының тұжырымдамасы; серіктестік туралы мәліметтер расталуы керек.",

  error_dates: "Кету күні келу күнінен кейін болуы керек.",
  error_capacity: "Қонақтар санына сәйкес келетін коттедж таңдаңыз.",
  error_email: "Электрондық пошта мекенжайын дұрыс енгізіңіз.",
  success_prefix: "Өтінім дайындалды:",
  menu_open: "Мәзірді ашу",
  menu_close: "Мәзірді жабу",
  hint_capacity: " коттеджінде ең көбі ",
  hint_suffix: " қонақ орналаса алады. Үлкенірек коттедж таңдаңыз.",
  night_one: "түн",
  night_few: "түн",
  night_many: "түн",
  guests_two: "2 қонақ",
  guests_34: "3–4 қонақ",
  guests_56: "5–6 қонақ"
},
   ru: {
  nav_about: "О базе",
  nav_cabins: "Коттеджи",
  nav_guests: "Для кого",
  nav_partners: "Партнёрам",
  nav_program: "Программа",
  nav_faq: "Вопросы",
  nav_book: "Забронировать",
  language_label: "Язык сайта",

  hero_alt: "Деревянный коттедж у озера на закате",
  concept_alt: "Красные коттеджи среди сосен у озера",
  hero_place: "Савонлинна, Финляндия · Отдых для гостей из Казахстана",
  hero_title: "Ваш уютный дом среди финских озёр",
  hero_lead: "Откройте Финляндию в собственном деревянном коттедже у воды. Наслаждайтесь сауной, северной природой и помощью в планировании поездки через туристических партнёров.",
  hero_point1: "Коттеджи от €90 за ночь",
  hero_point2: "Варианты для 2–6 гостей",
  hero_point3: "Отдых для пар, семей и друзей",
  hero_button: "Выбрать коттедж",
  hero_note: "Путешествие из Казахстана и знакомство с природой Финляндии.",

  concept_title: "База отдыха у озера Сайма",
  fact_location_title: "Расположение",
  fact_location: "Регион Южное Саво, окрестности города Савонлинна, озеро Сайма.",
  fact_format_title: "Формат",
  fact_format: "Учебная концепция: 8 деревянных коттеджей, прибрежная территория, сауна и прокат лодок.",
  fact_capacity_title: "Вместимость",
  fact_capacity: "От 2 до 6 человек в зависимости от типа коттеджа.",
  fact_season_title: "Сезон",
  fact_season: "Круглый год: прогулки и рыбалка летом, сауна и зимние развлечения в холодное время года.",
  concept_usp: "Отдельный коттедж, оборудованная кухня и отдых у озера — альтернатива обычному гостиничному номеру.",
  concept_point1: "Уединение и комфорт для самостоятельного отдыха",
  concept_point2: "Сауна и оборудованная кухня",
  concept_point3: "Рыбалка, купание и прогулки на лодке в сезон",
  concept_point4: "Размещение пар, семей и компаний до 6 человек",
  concept_point5: "Камин и прогулки по лесу зимой",

  prices_title: "Коттеджи и цены",
  prices_note: "Цены указаны для учебного макета и не являются действующими тарифами реальной базы отдыха.",
  per_night: "за ночь",

  forest_meta: "2 гостя · 25 м²",
  forest_1: "Двуспальная кровать",
  forest_2: "Мини-кухня и ванная комната",
  forest_3: "Терраса с видом на лес",
  forest_4: "Доступ к общей сауне",
  choose_forest: "Выбрать Forest Cabin",

  lake_meta: "4 гостя · 45 м²",
  lake_1: "Две спальные зоны",
  lake_2: "Полностью оборудованная кухня",
  lake_3: "Собственная сауна",
  lake_4: "Терраса и зона барбекю",
  choose_lake: "Выбрать Lake Cabin",

  family_meta: "6 гостей · 70 м²",
  family_1: "Три спальные зоны",
  family_2: "Гостиная с камином",
  family_3: "Полностью оборудованная кухня",
  family_4: "Сауна и просторная терраса",
  choose_family: "Выбрать Family Lodge",

  audience_title: "Отдых, который подходит именно вам",
  audience_sub: "Проект ориентирован в том числе на туристов из Казахстана, желающих познакомиться с природой Финляндии и её спокойным ритмом жизни.",

  aud_couples_title: "Для пар",
  aud_couples: "Уединение, сауна, красивые виды и отдых вдвоём. Подходящий вариант — Forest Cabin.",
  aud_couples_quote: "Путешествие для двоих: уютный коттедж и закаты над озером.",

  aud_families_title: "Для семей с детьми",
  aud_families: "Кухня, отдельные спальные зоны и пространство для семейного отдыха. Подходящий вариант — Family Lodge.",
  aud_families_quote: "Семейный отдых на природе в собственном коттедже у озера.",

  aud_friends_title: "Для компаний друзей",
  aud_friends: "Коттедж, барбекю, сауна и общая зона отдыха. Подойдут Lake Cabin или Family Lodge.",
  aud_friends_quote: "Соберите друзей и проведите несколько дней среди финских озёр.",

  aud_nature_title: "Для любителей природы",
  aud_nature: "Лесные тропы, рыбалка, гребля и возможность отдохнуть от городской суеты.",
  aud_nature_quote: "Откройте для себя северную природу Финляндии в собственном темпе.",

  partners_title: "Сотрудничество с туристическими агентствами Казахстана",
  partners_text: "Проект предусматривает развитие партнёрских отношений с туристическими агентствами Казахстана, в том числе на основе меморандумов о взаимопонимании. Через партнёрские агентства путешественники смогут получать информацию о вариантах размещения и планировать поездку в Финляндию.",
  partners_note: "Информация о конкретных агентствах, подписанных меморандумах и доступных туристических пакетах будет опубликована после официального подтверждения.",
  partners_benefits_title: "Для гостей из Казахстана",
  partners_benefit1: "Понятная информация о вариантах размещения и ценах",
  partners_benefit2: "Возможность обратиться в своё туристическое агентство",
  partners_benefit3: "Помощь в планировании маршрута в рамках услуг выбранного партнёра",
  partners_benefit4: "Информация на русском, казахском и английском языках",

  booking_title: "Подобрать коттедж",
  booking_note: "Демонстрационная форма: заявка не отправляется.",
  checkin_label: "Дата заезда",
  checkout_label: "Дата выезда",
  guests_legend: "Количество гостей",
  guests_2: "2 гостя",
  guests_4: "3–4 гостя",
  guests_6: "5–6 гостей",
  cabin_legend: "Тип коттеджа",
  form_forest: "Forest Cabin — €90/ночь",
  form_lake: "Lake Cabin — €140/ночь",
  form_family: "Family Lodge — €210/ночь",
  email_label: "Электронная почта",
  total_label: "Предварительная стоимость",
  submit_button: "Подготовить заявку",

  program_title: "Программа отдыха на три дня",

  day1_title: "День 1 — заселение и отдых",
  day1_1: "15:00 — заселение в коттедж",
  day1_2: "16:00 — прогулка по берегу озера",
  day1_3: "18:00 — ужин на террасе",
  day1_4: "20:00 — вечерняя сауна",

  day2_title: "День 2 — активный отдых",
  day2_1: "09:00 — завтрак",
  day2_2: "10:00 — прогулка на лодке или рыбалка",
  day2_3: "13:00 — пикник у озера",
  day2_4: "16:00 — прогулка по лесной тропе",
  day2_5: "19:00 — барбекю и отдых",

  day3_title: "День 3 — природа и отъезд",
  day3_1: "09:00 — завтрак на террасе",
  day3_2: "10:00 — фотопрогулка у берега",
  day3_3: "11:00 — сборы и выезд",

  faq_title: "Часто задаваемые вопросы",

  faq_q1: "Что входит в стоимость?",
  faq_a1: "В стоимость входят проживание, использование кухни и основная мебель. Возможность посещения сауны зависит от выбранного коттеджа.",

  faq_q2: "Можно ли приехать с детьми?",
  faq_a2: "Да. Для семейного отдыха предусмотрен Family Lodge вместимостью до шести человек.",

  faq_q3: "Можно ли рыбачить?",
  faq_a3: "Да, при условии соблюдения местных правил рыболовства.",

  faq_q4: "Есть ли Wi-Fi?",
  faq_a4: "Наличие Wi-Fi необходимо уточнить для конкретного объекта размещения.",

  faq_q5: "Можно ли приезжать с домашними животными?",
  faq_a5: "Возможность размещения с животными необходимо согласовать заранее.",

  faq_q6: "Как добраться из Казахстана?",
  faq_a6: "Перед бронированием уточните маршрут и требования к поездке в официальных источниках и у выбранного туристического агентства.",

  faq_q7: "Это действующая база отдыха?",
  faq_a7: "Нет. Это учебный макет сайта. Перед реальным использованием необходимо подтвердить цены, вместимость и условия партнёрства.",

  footer_text: "Савонлинна, Южное Саво, Финляндия. Учебная концепция; сведения о партнёрстве требуют подтверждения.",

  error_dates: "Дата выезда должна быть позже даты заезда.",
  error_capacity: "Выберите коттедж, подходящий по количеству гостей.",
  error_email: "Введите корректный адрес электронной почты.",
  success_prefix: "Заявка подготовлена:",
  menu_open: "Открыть меню",
  menu_close: "Закрыть меню",
  hint_capacity: " рассчитан максимум на ",
  hint_suffix: " гостей. Выберите коттедж побольше.",
  night_one: "ночь",
  night_few: "ночи",
  night_many: "ночей",
  guests_two: "2 гостя",
  guests_34: "3–4 гостя",
  guests_56: "5–6 гостей"
},

    fi: {
  nav_about: "Tietoa",
  nav_cabins: "Mökit",
  nav_guests: "Kenelle",
  nav_partners: "Kumppanit",
  nav_program: "Ohjelma",
  nav_faq: "Usein kysyttyä",
  nav_book: "Varaa mökki",
  language_label: "Sivuston kieli",

  hero_alt: "Puinen mökki järven rannalla auringonlaskun aikaan",
  concept_alt: "Punaisia mökkejä mäntyjen keskellä järven rannalla",
  hero_place: "Savonlinna, Suomi · Lomaa Kazakstanista saapuville vieraille",
  hero_title: "Viihtyisä kotisi Suomen järvimaisemissa",
  hero_lead: "Tutustu Suomeen omassa puisessa järvenrantamökissäsi. Nauti saunasta, pohjoisesta luonnosta ja matkasuunnittelun tuesta matkailukumppaneiden kautta.",
  hero_point1: "Mökkejä alkaen 90 € yöltä",
  hero_point2: "Vaihtoehtoja 2–6 vieraalle",
  hero_point3: "Lomaa pariskunnille, perheille ja ystäville",
  hero_button: "Valitse mökki",
  hero_note: "Matkusta Kazakstanista ja tutustu Suomen luontoon.",

  concept_title: "Lomamökit Saimaan rannalla",
  fact_location_title: "Sijainti",
  fact_location: "Etelä-Savon alueella, Savonlinnan kaupungin lähellä, Saimaan rannalla.",
  fact_format_title: "Kohteen kuvaus",
  fact_format: "Opiskeluprojektin konsepti: 8 puista mökkiä, ranta-alue, sauna ja venevuokraus.",
  fact_capacity_title: "Majoituskapasiteetti",
  fact_capacity: "Mökkityypistä riippuen 2–6 henkilöä.",
  fact_season_title: "Kausi",
  fact_season: "Ympäri vuoden: kesällä kävelyä ja kalastusta, talvella saunomista ja lumisia aktiviteetteja.",
  concept_usp: "Oma mökki, varusteltu keittiö ja rentoutuminen järven rannalla tarjoavat vaihtoehdon tavalliselle hotellihuoneelle.",
  concept_point1: "Yksityisyyttä ja mukavuutta omatoimiseen lomaan",
  concept_point2: "Sauna ja varusteltu keittiö",
  concept_point3: "Kalastusta, uimista ja veneilyä kauden aikana",
  concept_point4: "Majoitus pariskunnille, perheille ja enintään kuuden hengen ryhmille",
  concept_point5: "Takka ja metsäkävelyt talvella",

  prices_title: "Mökit ja hinnat",
  prices_note: "Hinnat ovat osa opiskeluprojektin mallia eivätkä ole todellisen lomakohteen voimassa olevia hintoja.",
  per_night: "yöltä",
  forest_meta: "2 vierasta · 25 m²",
  forest_1: "Parivuode",
  forest_2: "Keittokomero ja kylpyhuone",
  forest_3: "Terassi metsämaisemalla",
  forest_4: "Yhteisen saunan käyttö",
  choose_forest: "Valitse Forest Cabin",

  lake_meta: "4 vierasta · 45 m²",
  lake_1: "Kaksi makuualuetta",
  lake_2: "Täysin varusteltu keittiö",
  lake_3: "Oma sauna",
  lake_4: "Terassi ja grillialue",
  choose_lake: "Valitse Lake Cabin",

  family_meta: "6 vierasta · 70 m²",
  family_1: "Kolme makuualuetta",
  family_2: "Olohuone ja takka",
  family_3: "Täysin varusteltu keittiö",
  family_4: "Sauna ja tilava terassi",
  choose_family: "Valitse Family Lodge",

  audience_title: "Sinulle sopiva loma",
  audience_sub: "Hanke on suunnattu erityisesti Kazakstanista tuleville matkailijoille, jotka haluavat tutustua Suomen luontoon ja rauhalliseen elämänrytmiin.",
  aud_couples_title: "Pariskunnat",
  aud_couples: "Yksityisyyttä, sauna, kauniita maisemia ja yhteistä aikaa kahdestaan. Forest Cabin sopii tähän tarkoitukseen.",
  aud_couples_quote: "Loma kahdelle: viihtyisä mökki ja auringonlaskut järven yllä.",
  aud_families_title: "Lapsiperheet",
  aud_families: "Keittiö, erilliset makuutilat ja tilaa perheen yhteiseen lomaan. Family Lodge sopii tähän tarkoitukseen.",
  aud_families_quote: "Perheloma luonnon keskellä omassa järvenrantamökissä.",
  aud_friends_title: "Ystäväporukat",
  aud_friends: "Mökki, grillaus, sauna ja yhteinen oleskelualue. Lake Cabin tai Family Lodge sopii ryhmälle.",
  aud_friends_quote: "Kokoa ystäväsi ja vietä muutama päivä Suomen järvimaisemissa.",
  aud_nature_title: "Luonnon ystävät",
  aud_nature: "Metsäpolkuja, kalastusta, soutamista ja mahdollisuus irrottautua kaupungin kiireestä.",
  aud_nature_quote: "Tutustu Pohjois-Suomen luontoon omaan tahtiisi.",

  partners_title: "Yhteistyö Kazakstanin matkatoimistojen kanssa",
  partners_text: "Hankkeen tavoitteena on kehittää kumppanuuksia Kazakstanin matkatoimistojen kanssa, myös yhteisymmärryspöytäkirjojen pohjalta. Kumppanien kautta matkailijat voivat saada tietoa majoitusvaihtoehdoista ja suunnitella matkaansa Suomeen.",
  partners_note: "Tiedot yksittäisistä matkatoimistoista, allekirjoitetuista muistioista ja saatavilla olevista matkapaketeista julkaistaan virallisen vahvistuksen jälkeen.",
  partners_benefits_title: "Kazakstanista tuleville vieraille",
  partners_benefit1: "Selkeät tiedot majoitusvaihtoehdoista ja hinnoista",
  partners_benefit2: "Mahdollisuus ottaa yhteyttä omaan matkatoimistoon",
  partners_benefit3: "Apua reitin suunnitteluun valitun kumppanin palveluiden puitteissa",
  partners_benefit4: "Tietoa venäjäksi, kazakiksi ja englanniksi",

  booking_title: "Valitse mökki",
  booking_note: "Demolomake: varausta ei lähetetä.",
  checkin_label: "Saapumispäivä",
  checkout_label: "Lähtöpäivä",
  guests_legend: "Vieraiden määrä",
  guests_2: "2 vierasta",
  guests_4: "3–4 vierasta",
  guests_6: "5–6 vierasta",
  cabin_legend: "Mökin tyyppi",
  form_forest: "Forest Cabin — 90 €/yö",
  form_lake: "Lake Cabin — 140 €/yö",
  form_family: "Family Lodge — 210 €/yö",
  email_label: "Sähköpostiosoite",
  total_label: "Arvioitu kokonaishinta",
  submit_button: "Valmistele varauspyyntö",

  program_title: "Kolmen päivän lomaohjelma",
  day1_title: "Päivä 1 — saapuminen ja rentoutuminen",
  day1_1: "15.00 — saapuminen mökille",
  day1_2: "16.00 — kävely järven rannalla",
  day1_3: "18.00 — illallinen terassilla",
  day1_4: "20.00 — iltasauna",
  day2_title: "Päivä 2 — ulkoilua",
  day2_1: "09.00 — aamiainen",
  day2_2: "10.00 — veneretki tai kalastus",
  day2_3: "13.00 — piknik järven rannalla",
  day2_4: "16.00 — kävely metsäpolulla",
  day2_5: "19.00 — grillausta ja rentoutumista",
  day3_title: "Päivä 3 — luonto ja lähtö",
  day3_1: "09.00 — aamiainen terassilla",
  day3_2: "10.00 — valokuvauskävely rannalla",
  day3_3: "11.00 — pakkaaminen ja lähtö",

  faq_title: "Usein kysyttyä",
  faq_q1: "Mitä hintaan sisältyy?",
  faq_a1: "Hintaan sisältyvät majoitus, keittiön käyttö ja peruskalusteet. Saunan käyttömahdollisuus riippuu valitusta mökistä.",
  faq_q2: "Voiko mökille tulla lasten kanssa?",
  faq_a2: "Kyllä. Family Lodge on tarkoitettu perheille, ja siihen mahtuu enintään kuusi vierasta.",
  faq_q3: "Voiko siellä kalastaa?",
  faq_a3: "Kyllä, kunhan paikallisia kalastussääntöjä noudatetaan.",
  faq_q4: "Onko käytettävissä Wi-Fi?",
  faq_a4: "Wi-Fi-yhteyden saatavuus on varmistettava todellisen majoituskohteen osalta.",
  faq_q5: "Voiko lemmikkejä tuoda mukaan?",
  faq_a5: "Lemmikeistä on sovittava etukäteen.",
  faq_q6: "Miten Kazakstanista pääsee perille?",
  faq_a6: "Tarkista reitti ja matkustusvaatimukset virallisista lähteistä sekä valitulta matkatoimistolta ennen varaamista.",
  faq_q7: "Onko tämä toiminnassa oleva lomakohde?",
  faq_a7: "Ei. Tämä on opiskeluprojektin mallisivusto. Hinnat, majoituskapasiteetti ja kumppanuusehdot on vahvistettava ennen todellista käyttöä.",

  footer_text: "Savonlinna, Etelä-Savo, Suomi. Opiskeluprojektin konsepti; kumppanuustiedot vaativat vahvistuksen.",

  error_dates: "Lähtöpäivän on oltava saapumispäivän jälkeen.",
  error_capacity: "Valitse seurueesi kokoon sopiva mökki.",
  error_email: "Anna kelvollinen sähköpostiosoite.",
  success_prefix: "Varauspyyntö valmisteltu:",
  menu_open: "Avaa valikko",
  menu_close: "Sulje valikko",
  hint_capacity: " majoittaa enintään ",
  hint_suffix: " vierasta. Valitse suurempi mökki.",
  night_one: "yö",
  night_few: "yötä",
  night_many: "yötä",
  guests_two: "2 vierasta",
  guests_34: "3–4 vierasta",
  guests_56: "5–6 vierasta"
}
  };

  let currentLanguage = "ru";

  const t = (key) =>
    translations[currentLanguage][key] ||
    translations.ru[key] ||
    key;

  function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "ru";

    document.documentElement.lang = currentLanguage;

    const titles = {
      ru: "Lake Finland — коттеджи у озера Сайма",
      kk: "Lake Finland — Сайма көлінің жағасындағы коттедждер",
      en: "Lake Finland — cabins by Lake Saimaa",
      fi: "Lake Finland — mökkejä Saimaan rannalla"
    };

    document.title = titles[currentLanguage];

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translation = translations[currentLanguage][key];

      if (translation) {
        element.textContent = translation;
      }
    });

    $$("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      const translation = translations[currentLanguage][key];

      if (translation) {
        element.alt = translation;
      }
    });

    if (burger) {
      burger.setAttribute("aria-label", t("menu_open"));
    }

    update();
    updateHint();

    try {
      localStorage.setItem("lakeFinlandLanguage", currentLanguage);
    } catch (error) {
      // Сайт продолжит работать, даже если localStorage недоступен.
    }
  }

  function toISO(date) {
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );

    return localDate.toISOString().slice(0, 10);
  }

  function addDays(value, days) {
    const date = new Date(value + "T12:00:00");
    date.setDate(date.getDate() + days);
    return toISO(date);
  }

  function getChecked(name) {
    return form.querySelector(`input[name="${name}"]:checked`);
  }

  function getNights() {
    if (!checkin.value || !checkout.value) {
      return 0;
    }

    const start = new Date(checkin.value + "T12:00:00");
    const end = new Date(checkout.value + "T12:00:00");

    return Math.round((end - start) / 86400000);
  }

  function pluralNights(number) {
    if (currentLanguage === "ru") {
      const lastTwo = number % 100;
      const last = number % 10;

      if (lastTwo >= 11 && lastTwo <= 19) {
        return t("night_many");
      }

      if (last === 1) {
        return t("night_one");
      }

      if (last >= 2 && last <= 4) {
        return t("night_few");
      }

      return t("night_many");
    }

    return number === 1 ? t("night_one") : t("night_many");
  }

  function getGuestLabel(value) {
    if (value === 2) return t("guests_two");
    if (value === 4) return t("guests_34");

    return t("guests_56");
  }

  function updateHint() {
    if (!form || !hint) return;

    const cabin = getChecked("cabin");
    const guestInput = getChecked("guests");

    if (!cabin || !guestInput) {
      hint.textContent = "";
      return;
    }

    const guests = Number(guestInput.value);
    const maxGuests = capacity[cabin.value];

    if (guests <= maxGuests) {
      hint.textContent = "";
      return;
    }

    hint.textContent =
      names[cabin.value] +
      t("hint_capacity") +
      maxGuests +
      t("hint_suffix");
  }

  function update() {
    if (!form || !total || !summary) return;

    const numberOfNights = getNights();
    const cabin = getChecked("cabin");
    const guestInput = getChecked("guests");

    if (
      numberOfNights > 0 &&
      cabin &&
      guestInput
    ) {
      total.textContent =
        "€" + numberOfNights * prices[cabin.value];

      summary.textContent =
        numberOfNights +
        " " +
        pluralNights(numberOfNights) +
        " · " +
        getGuestLabel(Number(guestInput.value));
    } else {
      total.textContent = "€0";
      summary.textContent = "";
    }

    updateHint();
  }

  // Устанавливаем даты по умолчанию.
  if (checkin && checkout) {
    const today = toISO(new Date());

    checkin.min = today;
    checkin.value = addDays(today, 14);

    checkout.min = addDays(checkin.value, 1);
    checkout.value = addDays(checkin.value, 3);

    checkin.addEventListener("change", () => {
      if (!checkin.value) return;

      checkout.min = addDays(checkin.value, 1);

      if (
        !checkout.value ||
        checkout.value <= checkin.value
      ) {
        checkout.value = addDays(checkin.value, 3);
      }

      update();
    });

    checkout.addEventListener("change", update);
  }

  if (form) {
    form.addEventListener("change", update);

    // Выбор коттеджа через карточку.
    $$(".pick").forEach((button) => {
      button.addEventListener("click", () => {
        const cabin = form.querySelector(
          `input[name="cabin"][value="${button.dataset.cabin}"]`
        );

        if (cabin) {
          cabin.checked = true;
        }

        update();

        const bookingSection = $("#booking");

        if (bookingSection) {
          bookingSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });

    // Проверка формы бронирования.
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (success) success.hidden = true;
      if (error) error.textContent = "";

      if (!checkin.value || !checkout.value || getNights() < 1) {
        error.textContent = t("error_dates");
        return;
      }

      if (hint.textContent) {
        error.textContent = t("error_capacity");
        return;
      }

      if (
        !email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
      ) {
        error.textContent = t("error_email");

        if (email) email.focus();

        return;
      }

      const cabin = getChecked("cabin");

      if (!cabin) {
        error.textContent = t("error_capacity");
        return;
      }

      success.textContent =
        t("success_prefix") +
        " " +
        names[cabin.value] +
        ", " +
        summary.textContent +
        ", " +
        total.textContent +
        ".";

      success.hidden = false;
    });
  }

  // Мобильное меню.
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute(
        "aria-label",
        isOpen ? t("menu_close") : t("menu_open")
      );
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        nav.classList.remove("open");

        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", t("menu_open"));
      }
    });
  }

  // Переключение языка сайта.
  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      applyLanguage(languageSelect.value);
    });

    let savedLanguage = "ru";

    try {
      savedLanguage =
        localStorage.getItem("lakeFinlandLanguage") || "ru";
    } catch (error) {
      // Если хранилище недоступно, используется русский язык.
    }

    if (!translations[savedLanguage]) {
      savedLanguage = "ru";
    }

    languageSelect.value = savedLanguage;
    applyLanguage(savedLanguage);
  }

  update();
})();