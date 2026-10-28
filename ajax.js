
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");

  if (!form) return;

  const errorElement = document.querySelector("#error");
  const successElement = document.querySelector("#success");
  const submitButton = form.querySelector('button[type="submit"]');

  const messages = {
    ru: {
      required: "Заполните все поля формы.",
      dates: "Дата выезда должна быть позже даты заезда.",
      email: "Введите корректный адрес электронной почты.",
      capacity: "Выберите коттедж, подходящий по количеству гостей.",
      sending: "Отправка заявки...",
      success: "Заявка успешно отправлена!",
      error: "Не удалось отправить заявку. Попробуйте позже."
    },
    kk: {
      required: "Форманың барлық өрістерін толтырыңыз.",
      dates: "Кету күні келу күнінен кейін болуы керек.",
      email: "Электрондық пошта мекенжайын дұрыс енгізіңіз.",
      capacity: "Қонақтар санына сәйкес келетін коттеджді таңдаңыз.",
      sending: "Өтінім жіберілуде...",
      success: "Өтінім сәтті жіберілді!",
      error: "Өтінімді жіберу мүмкін болмады. Кейінірек қайталап көріңіз."
    },
    en: {
      required: "Please complete all fields.",
      dates: "The check-out date must be after the check-in date.",
      email: "Please enter a valid email address.",
      capacity: "Choose a cabin that accommodates the selected number of guests.",
      sending: "Sending your request...",
      success: "Your booking request was sent successfully!",
      error: "Could not send your request. Please try again later."
    },
    fi: {
      required: "Täytä kaikki lomakkeen kentät.",
      dates: "Lähtöpäivän on oltava saapumispäivän jälkeen.",
      email: "Anna kelvollinen sähköpostiosoite.",
      capacity: "Valitse vieraiden määrälle sopiva mökki.",
      sending: "Lähetetään varaustasi...",
      success: "Varauspyyntö lähetettiin onnistuneesti!",
      error: "Pyynnön lähettäminen epäonnistui. Yritä myöhemmin uudelleen."
    }
  };

  const capacities = {
    forest: 2,
    lake: 4,
    family: 6
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    errorElement.textContent = "";
    successElement.textContent = "";
    successElement.hidden = true;

    const languageSelect = document.querySelector("#language");
    const language = messages[languageSelect?.value]
      ? languageSelect.value
      : "ru";

    const t = messages[language];

    const checkin = document.querySelector("#checkin").value;
    const checkout = document.querySelector("#checkout").value;
    const email = document.querySelector("#email").value.trim();

    const guestsInput = form.querySelector(
      'input[name="guests"]:checked'
    );

    const cabinInput = form.querySelector(
      'input[name="cabin"]:checked'
    );

    if (!checkin || !checkout || !email || !guestsInput || !cabinInput) {
      errorElement.textContent = t.required;
      return;
    }

    if (checkout <= checkin) {
      errorElement.textContent = t.dates;
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorElement.textContent = t.email;
      return;
    }

    const guests = Number(guestsInput.value);
    const cabin = cabinInput.value;

    if (!capacities[cabin] || guests > capacities[cabin]) {
      errorElement.textContent = t.capacity;
      return;
    }

    const bookingData = {
      language,
      checkin,
      checkout,
      guests,
      cabin,
      email
    };

    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = t.sending;

    try {
      const response = await fetch("send-booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bookingData)
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(t.error);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || t.error);
      }

      successElement.textContent = result.message || t.success;
      successElement.hidden = false;

    } catch (error) {
      errorElement.textContent = error.message || t.error;

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
