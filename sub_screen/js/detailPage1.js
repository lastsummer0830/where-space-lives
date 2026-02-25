// js/detailPage1.js
import { products } from "./products.js";

/* ✅ 0) URL에서 id 읽기 (없으면 0) */
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id") ?? 0);

/* ✅ 1) 상품 찾기 (하드코딩 X) */
const product = products.find((p) => p.id === id);

/* ✅ 2) product 없으면 중단 */
if (!product) {
  console.error("상품을 찾지 못했습니다. id 확인:", id);
} else {
  /* 1) 상품 데이터 바인딩 (section1) */
  document.querySelector(".section1__title").textContent = product.title;
  document.querySelector(".section1__price").textContent = `₩${product.price.toLocaleString()}`;
  document.querySelector(".section1__badge").textContent = product.type;
  document.querySelector(".section1__meta").textContent = product.content;

  document.querySelector(".section1__discount").textContent = product.discountText;
  document.querySelectorAll(".section1__sub")[0].textContent =
    `정가: ₩${product.originalPrice.toLocaleString()}`;
  document.querySelectorAll(".section1__sub")[1].textContent = product.period;

  /* ✅ 이미지 주입 */
  const thumbImgs = document.querySelectorAll(".galleryimg-list .detailimg img");
  const mainImgs = document.querySelectorAll("#sliderTrack img");

  product.img.forEach((src, i) => {
    if (thumbImgs[i]) thumbImgs[i].src = src;
    if (mainImgs[i]) mainImgs[i].src = src;
  });

  thumbImgs.forEach((img, i) => (img.alt = `${product.title} 썸네일 ${i + 1}`));
  mainImgs.forEach((img, i) => (img.alt = `${product.title} 메인 ${i + 1}`));
}

/* ===================== 아래는 그대로 (색상/수량) ===================== */

// ✅ 색상 데이터
const COLORS = [
  { name: "블랙", value: "#000000" },
  { name: "화이트", value: "#ffffff" },
  { name: "레드", value: "#ff0000" },
  { name: "브라움", value: "#6a5500" },
];

let selectedColor = COLORS[1];

// DOM
const openBtn = document.getElementById("openColor");
const modal = document.getElementById("colorModal");
const overlay = document.getElementById("closeColor");
const xBtn = document.getElementById("xColor");

const colorText = document.getElementById("colorText");
const colorSwatch = document.getElementById("colorSwatch");
const colorList = document.getElementById("colorList");

// 선택값 표시
function renderSelectedColor() {
  colorText.textContent = selectedColor.name;
  colorSwatch.style.background = selectedColor.value;
  colorSwatch.style.borderColor = selectedColor.value === "#ffffff" ? "#bbb" : "#ddd";
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

openBtn?.addEventListener("click", openModal);
overlay?.addEventListener("click", closeModal);
xBtn?.addEventListener("click", closeModal);

function renderColorOptions() {
  colorList.innerHTML = COLORS.map((c) => {
    const active = c.name === selectedColor.name ? "is-active" : "";
    const border = c.value === "#ffffff" ? "#bbb" : "#ddd";

    return `
      <button class="colorOption ${active}" type="button" data-name="${c.name}">
        <span class="colorOption__swatch" style="background:${c.value}; border-color:${border}"></span>
        <span class="colorOption__name">${c.name}</span>
      </button>
    `;
  }).join("");

  colorList.querySelectorAll(".colorOption").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      selectedColor = COLORS.find((c) => c.name === name);

      renderSelectedColor();
      renderColorOptions();
      closeModal();
    });
  });
}

renderSelectedColor();
renderColorOptions();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// 수량버튼
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const qtyNum = document.getElementById("qtyNum");

let qty = 1;

function renderQty() {
  qtyNum.textContent = qty;
  minus.disabled = qty <= 1;
}

minus?.addEventListener("click", () => {
  if (qty > 1) qty--;
  renderQty();
});

plus?.addEventListener("click", () => {
  qty++;
  renderQty();
});

renderQty();