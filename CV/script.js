document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 100);
  
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
  
    const downloadBtn = document.getElementById("download-cv-btn");
    downloadBtn.addEventListener("click", function () {
      window.location.href = "cv.pdf";
    });
  
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Wiadomość została wysłana!");
      contactForm.reset();
      modal.style.display = "none";
    });
  });
  
