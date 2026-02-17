let authorizationLogin = document.querySelector(".authorization__login"),
  modalOverlay = document.querySelector(".modal-overlay"),
  mobileLogin = document.querySelector(".mobile-nav-login"),
  modalRegistration = document.querySelector(".modal-registration"),
  modalLogin = document.querySelector(".modal-login"),
  modalRegistrationInput = document.querySelector(".modal__registration"),
  modalLoginInput = document.querySelector(".modal__login"),
  authorizationRegistration = document.querySelector(".authorization__registration"),
  mobileNavRegistration = document.querySelector(".mobile-nav-registration");

function showModalLogin() {
  modalOverlay.style.display = "block";
  modalRegistration.style.display = "none";
  modalLogin.style.display = "block";
}

function showModalRegistration() {
  modalOverlay.style.display = "block";
  modalLogin.style.display = "none";
  modalRegistration.style.display = "block";
}

export function showModal() {
  authorizationLogin.addEventListener("click", () => {
    showModalLogin();
  });
  mobileLogin.addEventListener("click", () => {
    showModalLogin();
  });

  modalRegistrationInput.addEventListener("click", () => {
    showModalRegistration();
  });

  modalLoginInput.addEventListener("click", () => {
    showModalLogin();
  });

  authorizationRegistration.addEventListener("click", () => {
    showModalRegistration();
  });

  mobileNavRegistration.addEventListener("click", () => {
    showModalRegistration();
  });
}

export function closeModal() {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
}
