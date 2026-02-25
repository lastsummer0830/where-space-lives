// 1. 제품 정보 데이터 (여기에만 사진 경로를 적으면 끝입니다!)
const productData = {
  id: "605.969.26",
  title: "FJÄDERHARV 피에데르하르브",
  price: 19900,
  type: "수납가구",
  content: "페이퍼보드로 만든 이 수납함에 취미 용품이나 미디어 장비를 수납해 보세요. 뚜껑이 있어서 안의 물건이 보이지 않고 먼지도 타지 않습니다.",
  
  // ▼ HTML 밖으로 한 칸 나가서(../) images 폴더 안에 있는 사진을 가져오라고 정확한 길을 적어줍니다.
  img: [
    "../images/이케아상자1.avif", 
    "../images/이케아상자2.avif", 
    "../images/이케아상자3.avif", // (사진이 2장뿐이라 테스트를 위해 임시로 반복해서 채워두었습니다)
    "../images/이케아상자4.avif", 
    "../images/이케아상자5.avif", 
    "../images/이케아상자6.avif"
  ]
};

let currentIndex = 0;

// 🌟 핵심: 웹페이지가 켜지면 빈 HTML 뼈대에 글씨와 '사진'을 자동으로 쏴주는 함수입니다.
window.onload = function() {
  const descContent = document.getElementById('productContent');
  const descId = document.getElementById('productId');
  
  // 1. 글씨 자동 채우기 (기존에 있던 코드)
  if (descContent) {
    descContent.innerText = productData.content; 
  }
  if (descId) {
    descId.innerText = productData.id; 
  }

  // 2. 사진 자동 채우기 (새로 추가된 코드!)
  // HTML에 있는 썸네일 빈칸 6개와 메인 슬라이드 빈칸 6개를 모두 찾아옵니다.
  const thumbnailImgs = document.querySelectorAll('.detailimg img');
  const mainImgs = document.querySelectorAll('#sliderTrack img');

  // productData.img 에 적어둔 6개의 사진 경로를 빈칸에 하나씩 쏙쏙 집어넣습니다.
  productData.img.forEach((imagePath, index) => {
    if (thumbnailImgs[index]) {
      thumbnailImgs[index].src = imagePath; // 왼쪽 썸네일 빈칸에 사진 쏘기!
    }
    if (mainImgs[index]) {
      mainImgs[index].src = imagePath; // 오른쪽 큰 슬라이드 빈칸에 사진 쏘기!
    }
  });
};

// 썸네일을 누르거나 화살표를 누를 때 좌우로 슬라이드 되게 하는 함수입니다. (기존과 동일)
function changeImage(index) {
  currentIndex = index;
  const sliderTrack = document.getElementById('sliderTrack');
  if (sliderTrack) {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  const detailImgs = document.querySelectorAll('.detailimg'); 
  detailImgs.forEach((img, i) => {
    if (i === currentIndex) {
      img.classList.add('active'); 
    } else {
      img.classList.remove('active'); 
    }
  });
}

// 좌/우 화살표 버튼을 클릭했을 때 순서를 계산해 주는 함수입니다. (기존과 동일)
function moveSlide(direction) {
  currentIndex += direction;
  const totalImages = productData.img.length;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1; 
  } else if (currentIndex >= totalImages) {
    currentIndex = 0; 
  }
  changeImage(currentIndex); 
}