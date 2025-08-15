document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formSuccess = document.querySelector("#form-status-success");
  const formFail = document.querySelector("#form-status-fail");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const contactFormHeading = document.querySelector("#contactFormHeading");
    const contactFormSuccessHeading = document.querySelector("#contactFormSuccessHeading");

    const to = "info@robustplumbing.ca";
    const subject = `Robust Plumbing website inquiry from ${name}`;
    const html = `
      <h2>New Inquiry from Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    try {
      const res = await fetch("https://email-backend-live.vercel.app/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, to, subject, html }),
      });
      if (res.ok) {
    

        form.style.display = "none";
           contactFormHeading.style.display = "none";
        contactFormSuccessHeading.style.display = "flex";
        formSuccess.style.display = "flex";
      } else {
        formFail.style.display = "flex";
      }
    } catch (err) {
        
      console.error("Fetch error:", err);
      formFail.style.display = "flex";
    }
  });
});

const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const parent = toggle.closest(".faq-card");
      parent.classList.toggle("active");

      // Close others (optional)
      faqToggles.forEach(other => {
        if (other !== toggle) {
          other.closest(".faq-card").classList.remove("active");
        }
      });
    });
  });


 
  const buildings = document.querySelector(".buildings");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
     let scrollX = window.scrollX;
    // Move the background slower than the scroll for parallax effect
    buildings.style.backgroundPosition = `${scrollY * 0.5}px`;
  });