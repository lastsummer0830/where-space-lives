// 1. 팀원이 통일하자고 한 규격에 맞춘 제품 정보입니다.
const productData = {
  id: "605.969.26",
  title: "FJÄDERHARV 피에데르하르브",
  price: 19900,
  type: "수납가구",
  content: "페이퍼보드로 만든 이 수납함에 취미 용품이나 미디어 장비를 수납해 보세요. 뚜껑이 있어서 안의 물건이 보이지 않고 먼지도 타지 않습니다.",
  img: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"]
};

let currentIndex = 0;

// 웹페이지가 열리면 제품 설명과 번호를 사진 하단에 자동으로 채워 넣는 함수입니다.
window.onload = function() {
  const descContent = document.getElementById('productContent');
  const descId = document.getElementById('productId');
  
  if (descContent) {
    descContent.innerText = productData.content; // productData의 content 내용을 HTML에 넣습니다.
  }
  if (descId) {
    descId.innerText = productData.id; // productData의 id 내용을 HTML에 넣습니다.
  }
};

// 썸네일을 누르거나 화살표를 누를 때 좌우로 슬라이드 되게 하는 핵심 함수입니다.
function changeImage(index) {
  currentIndex = index;
  
  // 기차처럼 이어진 사진들(sliderTrack)을 왼쪽(-)으로 밀어서 원하는 번호의 사진을 보여줍니다.
  const sliderTrack = document.getElementById('sliderTrack');
  if (sliderTrack) {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // 기존에 쓰시던 detailimg 클래스를 정확히 찾아 검정색 테두리(active)를 업데이트합니다.
  const detailImgs = document.querySelectorAll('.detailimg'); 
  detailImgs.forEach((img, i) => {
    if (i === currentIndex) {
      img.classList.add('active'); 
    } else {
      img.classList.remove('active'); 
    }
  });
}

// 좌/우 화살표 버튼을 클릭했을 때 순서를 계산해 주는 함수입니다.
function moveSlide(direction) {
  currentIndex += direction;
  const totalImages = productData.img.length;
  
  // 첫 번째 사진에서 이전을 누르면 마지막 사진으로 넘어가게 합니다.
  if (currentIndex < 0) {
    currentIndex = totalImages - 1; 
  // 마지막 사진에서 다음을 누르면 첫 번째 사진으로 넘어가게 합니다.
  } else if (currentIndex >= totalImages) {
    currentIndex = 0; 
  }
  
  // 계산된 순서대로 사진을 바꿔줍니다.
  changeImage(currentIndex); 
}