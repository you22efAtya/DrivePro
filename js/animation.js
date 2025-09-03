let counter = 1;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // run once
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate2");
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

document.querySelectorAll(".services-section .row .service").forEach(el => {
  
  if(counter %2 ==1)
  {
    observer.observe(el);
  }
  else
  {
    observer2.observe(el);
  }
  counter+=1;
});

document.querySelectorAll(".kpi-card").forEach(el => {

    observer.observe(el);

});
