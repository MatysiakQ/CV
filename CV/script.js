document.addEventListener("DOMContentLoaded", function () {
    // Dodajemy klasę .loaded, aby uruchomić animację wjeżdżania
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 100);
  
    // Obsługa modalu kontaktowego
    const contactLink = document.getElementById("contact-link");
    const modal = document.getElementById("contact-modal");
    const closeModal = document.querySelector(".close-modal");
  
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Obsługa przycisku pobierania CV
    const downloadBtn = document.getElementById("download-cv-btn");
    downloadBtn.addEventListener("click", function () {
      // Zakładamy, że plik cv.pdf znajduje się w tym samym folderze
      window.location.href = "cv.pdf";
    });
  
    // (Opcjonalnie) Obsługa wysyłki formularza kontaktowego
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Tutaj możesz dodać kod do wysyłki formularza (np. AJAX)
      alert("Wiadomość została wysłana!");
      contactForm.reset();
      modal.style.display = "none";
    });
  });
  