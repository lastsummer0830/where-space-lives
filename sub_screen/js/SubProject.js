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


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  function onScroll() {
    // 1px만 내려가도 흰색 되게
    header.classList.toggle("is-scrolled", window.scrollY > 0);
  }

  onScroll(); // 새로고침했을 때 위치 반영
  window.addEventListener("scroll", onScroll, { passive: true });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  const threshold = hero ? hero.offsetHeight * 0.25 : 0; // hero 25% 지나면
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > threshold);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});