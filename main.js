const cards = document.querySelectorAll(".card-no-outline");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      else {
         entry.target.classList.remove("show");

      }
    });
  },
  {
    threshold: 0.1,
  },
);

cards.forEach((card) => {
  observer.observe(card);
});
