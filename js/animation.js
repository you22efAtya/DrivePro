const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // run once
    }
  });
});

document.querySelectorAll(".about-section .r-2 .container").forEach(el => {
  observer.observe(el);
});
document.querySelectorAll(".about-section .about-content").forEach(el => {
  observer.observe(el);
});
document.querySelectorAll(".about-section .ceo-content").forEach(el => {
  observer.observe(el);
});
