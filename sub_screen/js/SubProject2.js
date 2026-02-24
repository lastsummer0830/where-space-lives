//section4 애니메이션 효과
const targets = document.querySelectorAll(
  ".reveal-left, .reveal-right"
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

// header 투명 및 흰색 추가 js 코드
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  if (!header) return;

  function getThreshold() {
    return hero ? hero.offsetHeight * 0.25 : 0;
  }

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > getThreshold());
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll); // hero 높이 바뀌면 재계산
});