
import { products } from "../../sub_screen/js/products.js";

console.log(products);


const productPicture = document.getElementsByClassName("product_picture");
const productExplain = document.getElementsByClassName("product_explain");


// main 상품 8개 출력
for(let i=0; i<8; i++){
    // 상품 이미지 출력
    productPicture[i].innerHTML = `
    <a href="../../sub_screen/html/detailPage1.html?id=${products[i].id}">
        <img
        src="../../sub_screen/images/${products[i].img[0]}"
        alt=""
        />
    </a>
    `
    // 상품 title 및 content 출력
    productExplain[i].innerHTML = `
    <a href="../../sub_screen/html/detailPage1.html?id=${products[i].id}">
        <h2>${products[i].title}</h2>
        <p>
        ${products[i].content}
        </p>
    </a>
    `
}








