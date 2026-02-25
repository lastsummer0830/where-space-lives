
const productData = {
  id: "",
  title: "",
  price: 0,
  type: "",
  content: "",
  img: [
    "",
    "",
    "",
    "",
    "",
    "",
  ],
};





let currentIndex = 0;


function changeImage(index) {
  currentIndex = index; 

  
  const sliderTrack = document.getElementById("sliderTrack");
  if (sliderTrack) {

    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

 
  const detailImgs = document.querySelectorAll(".detailimg");
  detailImgs.forEach((img, i) => {
    if (i === currentIndex) {
     
      img.classList.add("active");
    } else {
     
      img.classList.remove("active");
    }
  });
}


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
