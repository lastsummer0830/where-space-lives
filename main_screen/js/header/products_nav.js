// 물품목록 가져오기
import { products } from "../../../sub_screen/js/products.js";

(() => {
  // nav_bottom 안의 category ul 선택
  const menuBottom = document.querySelector(".nav_bottom .menu_bottom");
  if (!menuBottom) return;

  // content에서 + 기준 빼내오기
  const pickTitle = (content = "") => content.split("+")[0].trim();

  // type 기준으로 products를 그룹핑 >> Map 저장
  // Map: { "수납가구" -> [상품들], "거실가구" -> [상품들], ... }
  const map = new Map();
  for (const p of products) {
    const type = (p.type || "기타").trim();
    if (!map.has(type)) map.set(type, []);
    map.get(type).push(p);
  }

  // Best빼고 다 삭제
  const bestLi = menuBottom.querySelector("li:first-child");
  menuBottom.innerHTML = "";
  if (bestLi) menuBottom.appendChild(bestLi);

  // type별로 li.has_drop + dropdown(.drop) 구조를 동적으로 생성
  for (const [type, items] of map.entries()) {
    const li = document.createElement("li");
    li.className = "has_drop";

    // 상단 메뉴명: type
    const a = document.createElement("a");
    a.className = "nav_link small";
    a.href = "#"; // 이 후 카테고리 페이지 링크
    a.textContent = type;

    // hover 시 나오는 드롭다운 패널(.drop)
    const drop = document.createElement("div");
    drop.className = "drop";

    // 드롭다운 내부 컨테이너 (.drop_inner)
    const inner = document.createElement("div");
    inner.className = "drop_inner";

    // 같은 type에서 content앞 내용 구분
    // colMap: { "수납상자" -> [상품들], "서랍장" -> [상품들], ... }
    const colMap = new Map();
    for (const it of items) {
      const title = pickTitle(it.content);
      if (!colMap.has(title)) colMap.set(title, []);
      colMap.get(title).push(it);
    }

    // 최종 이어붙이기
    for (const [title, colItems] of colMap.entries()) {
      // 하나의 컬럼(예: "소파" 컬럼 / "테이블" 컬럼)
      const col = document.createElement("div");
      col.className = "drop_col";

      // contetn + 앞부분
      // 없으면 fallback으로 type을 사용
      const pTitle = document.createElement("p");
      pTitle.className = "drop_title";
      pTitle.textContent = title || type;

      col.appendChild(pTitle);

      // 이 후 상세페이지 연결
      for (const it of colItems) {
        const link = document.createElement("a");
        link.href = "#"; // 임시 링크 (상세 페이지 연결 전)
        link.textContent = it.title || it.content || `상품 ${it.id}`;
        col.appendChild(link);
      }

      // 만들어진 컬럼을 inner에 추가
      inner.appendChild(col);
    }

    // 최종 삽입
    // drop에 inner 붙이고, li에 a/drop 붙여서 menu_bottom에 삽입
    drop.appendChild(inner);
    li.appendChild(a);
    li.appendChild(drop);
    menuBottom.appendChild(li);
  }
})();
