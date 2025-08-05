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

const countDate = new Date("2025-09-07T15:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const gap = countDate - now;
    if (gap <= 0) {
    document.getElementById("countDown").innerText = "Conférence en cours ! 🎉";
    return;
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

   const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("countDown").innerText =
    `${days}j ${hours}h ${minutes}m ${seconds}s restants`;
}, 1000);
