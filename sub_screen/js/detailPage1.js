// js/detailPage1.js
import { products } from "./products.js";

/* 1) 상품 데이터 바인딩 (section1) */
const product = products.find((p) => p.id === 1);

document.querySelector(".section1__title").textContent = product.title;
document.querySelector(".section1__price").textContent = `₩${product.price.toLocaleString()}`;
document.querySelector(".section1__badge").textContent = product.type;
document.querySelector(".section1__meta").textContent = product.content;

document.querySelector(".section1__discount").textContent = product.discountText;
document.querySelectorAll(".section1__sub")[0].textContent =
  `정가: ₩${product.originalPrice.toLocaleString()}`;
document.querySelectorAll(".section1__sub")[1].textContent = product.period;

/*2)색상 선택 모달 (이미지 없이 컬러만) */
// ✅ 색상 데이터 (원하는 색 더 추가 가능)
const COLORS = [
  { name: "블랙", value: "#000000" },
  { name: "화이트", value: "#ffffff" },
  { name: "레드", value: "#ff0000"},
  { name: "브라움", value: "#6a5500"}
];

// 초기 선택값 (화이트)
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

// 모달 열기/닫기
function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

openBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
xBtn.addEventListener("click", closeModal);

// 옵션 리스트 그리기
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

  // 클릭 이벤트 연결
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

// 초기 렌더
renderSelectedColor();
renderColorOptions();

// ESC로 모달 닫기(선택)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

// 수량버튼
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const qtyNum = document.getElementById("qtyNum");

let qty = 1;

function renderQty(){
  qtyNum.textContent = qty;
  minus.disabled = qty <= 1; // 1 이하로 못 내려가게
}

minus.addEventListener("click", () => {
  if(qty > 1) qty--;
  renderQty();
});

plus.addEventListener("click", () => {
  qty++;
  renderQty();
});

renderQty();