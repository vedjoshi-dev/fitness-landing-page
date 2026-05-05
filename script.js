function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const btn = this.querySelector(".btn-submit");
  btn.textContent = "Sending…";
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById("successMsg").textContent = "✓ Message sent! I'll be in touch within 24 hours.";
    btn.textContent = "Send Message →";
    btn.disabled = false;
    this.reset();
  }, 1000);
});

// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .tcard, .feature-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  observer.observe(el);
});