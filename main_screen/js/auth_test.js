(() => {
  const getUser = () => {
    const raw = sessionStorage.getItem("loginUser");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      sessionStorage.removeItem("loginUser");
      return null;
    }
  };

  const REPO = "acon_front_project";
  const isGhPages = location.pathname.includes(`/${REPO}/`);
  const BASE = isGhPages ? `/${REPO}` : "";

  const goHome = () => (location.href = `${BASE}/index.html`);
  const goLogin = () => (location.href = `${BASE}/main_screen/html/login.html`);
  const goMypage = () =>
    (location.href = `${BASE}/main_screen/html/mypage.html`);

  const mypageLink = document.querySelector("[data-auth-mypage]");
  const loginLink = document.querySelector("[data-auth-login]");

  // MY PAGE 클릭
  mypageLink?.addEventListener("click", (e) => {
    e.preventDefault();
    const user = getUser();
    if (!user) {
      alert("로그인이 필요합니다.");
      goLogin();
      return;
    }
    goMypage();
  });

  // LOGIN / LOGOUT 처리
  const user = getUser();
  if (loginLink) {
    const textEl = loginLink.querySelector(".icon_text");

    if (user) {
      // 로그인 상태 -> LOGOUT으로
      if (textEl) textEl.textContent = "LOGOUT";

      loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem("loginUser");
        alert("로그아웃 되었습니다.");
        goHome();
      });
    } else {
      // 비로그인 상태 -> LOGIN
      if (textEl) textEl.textContent = "LOGIN";

      loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        goLogin();
      });
    }
  }

  const logo = document.querySelector(".logo");
  logo?.addEventListener("click", (e) => {
    e.preventDefault();
    goHome();
  });

  document.addEventListener("click", (e) => {
    const target = e.target;

    // 3-1) nav_link small (카테고리)
    const categoryLink = target.closest(".has_drop > a.nav_link.small");
    if (categoryLink) {
      e.preventDefault();
      const category = categoryLink.textContent.trim();
      location.href = `${BASE}/sub_screen/sub_type/type.html?category=${encodeURIComponent(
        category,
      )}`;
      return;
    }

    // 3-2) drop_title (소분류)
    const dropTitle = target.closest(".drop_title");
    if (dropTitle) {
      e.preventDefault();

      const sub = dropTitle.textContent.trim();
      const parentHasDrop = dropTitle.closest(".has_drop");
      const category =
        parentHasDrop?.querySelector("a.nav_link.small")?.textContent.trim() ||
        "";

      location.href = `${BASE}/sub_screen/sub_type/type.html?category=${encodeURIComponent(
        category,
      )}&sub=${encodeURIComponent(sub)}`;
      return;
    }

    // 3-3) drop 안 상품 링크 (detailPage1)
    const productLink = target.closest(".drop_col a");
    if (productLink) {
      // drop_title 밑의 링크만 타게 하고 싶으면 아래 조건 추가 가능
      // if (!productLink.closest(".drop")) return;

      e.preventDefault();

      const id = productLink.dataset.id;
      if (!id) {
        console.warn(
          "[auth.js] 상품 링크에 data-id가 없습니다. products_nav.js에서 link.dataset.id = it.id 를 추가하세요.",
        );
        alert("상품 정보(id)를 찾을 수 없습니다.");
        return;
      }

      location.href = `${BASE}/sub_screen/html/detailPage1.html?id=${encodeURIComponent(
        id,
      )}`;
      return;
    }
  });
})();
