emailjs.init("bkTvec_IVi4exGQ1a");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_tzxb9j3", "template_l04vxg6", this)
      .then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "#00d4ff";
        form.reset();
      })
      .catch(() => {
        status.textContent = "Oops! Something went wrong.";
        status.style.color = "#ff6600";
      });
  });