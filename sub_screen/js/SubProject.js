// section3,section4 애니메이션 효과
const targets = document.querySelectorAll(
  ".reveal-text, .reveal-img, .reveal-left, .reveal-right"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");   // 들어오면 ON
      } else {
        entry.target.classList.remove("is-show"); // 나가면 OFF
      }
    });
  },
  { threshold: 0.25 }
);
targets.forEach((el) => observer.observe(el));