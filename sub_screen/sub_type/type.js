// 상품 데이터
var products = [
    { id : 0, price : 70000, title : '이케아 옷장', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '수납가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 1, price : 50000, title : '인테리어 원형 테이블', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '인테리어소품', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 2, price : 60000, title : '에이스 침대', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '침실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 3, price : 60000, title : '다인용 소파', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '거실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 4, price : 70000, title : '이케아 옷장', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '수납가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 5, price : 50000, title : '인테리어 원형 테이블', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '인테리어소품', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 6, price : 60000, title : '에이스 침대', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '침실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 7, price : 60000, title : '다인용 소파', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '거실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 8, price : 70000, title : '이케아 옷장', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '수납가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 9, price : 50000, title : '인테리어 원형 테이블', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '인테리어소품', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 10, price : 60000, title : '에이스 침대', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '침실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 11, price : 60000, title : '다인용 소파', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '거실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 12, price : 70000, title : '이케아 옷장', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '수납가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'}
]

// url의 뒤에 붙어있는 쿼리스트링에서 category 가져오기
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// type 객체들
const mainType = [
    { mainType: '수납가구', subType1: '수납장', subType2: '서랍장', subType3: '오피스용품'},
    { mainType: '인테리어', subType1: '오브제', subType2: '커튼', subType3: '러그'},
    { mainType: '침실가구', subType1: '침대', subType2: '침구', subType3: '매트리스'},
    { mainType: '거실가구', subType1: '테이블', subType2: '의자', subType3: '소파'},
]

// category가 mainType 배열의 몇번째 인덱스 객체인지를 나타냄
let index;
if(category=="수납가구") index = 0;
else if(category=="인테리어") index = 1;
else if(category=="침실가구") index = 2;
else index = 3;

// 정렬 버튼들 생성
let template = `
<h2>${mainType[index].mainType}</h2><hr>
<div class="container">
    <!-- 상품 컨테이너 -->
    <div class="type_container">
        <button class="btn btn-danger mt-3" id="revert">전체</button>
        <div class="divide">|</div>
        <button id="${mainType[index].subType1}" type="button">${mainType[index].subType1}</button>
        <div class="divide">|</div>
        <button id="${mainType[index].subType2}" type="button">${mainType[index].subType2}</button>
        <div class="divide">|</div>
        <button id="${mainType[index].subType3}" type="button">${mainType[index].subType3}</button>
    </div><hr>
    <div class="sort_container">
        <!-- 상품 정렬 버튼 -->
        <button class="btn btn-danger mt-3" id="sortAbc">가나다순 정렬</button>
        <button class="btn btn-danger mt-3" id="sortPrice">가격순 정렬</button>
        <button class="btn btn-danger mt-3" id="filterPrice">6만원 이하 보기</button>
    </div>
    <div class="card-group container" id="items"></div>
</div>
`
$('.best_wrap').append(template);



// 상품 생성
products.forEach(item => {
    let template = `
    <div class="card">
        <a class="card_link" href="#">
            <img src=${item.img}>
            <div class="card-body">
                <h5 class="title">${item.title}</h5>
                <p>${item.content}</p>
                <b class="price">${item.price}</b><br>
                <div class="benefit">조건부 무료배송</div><div class="benefit">쿠폰</div>
            </div>
        </a>
    </div>
    `
    $('#items').append(template);
});


// 상품 생성 함수 
function layout(items){
    items.forEach(item => {
        let template = `
        <div class="card">
            <a class="card_link" href="#">
                <img src=${item.img}>
                <div class="card-body">
                    <h5 class="title">${item.title}</h5>
                    <p>${item.content}</p>
                    <b class="price">${item.price}</b><br>
                    <div class="benefit">조건부 무료배송</div><div class="benefit">쿠폰</div>
                </div>
            </a>
        </div>
        `
        $('#items').append(template);
    });
}


// abc정렬
$('#sortAbc').click(function(){
    // 배열.slice(): 배열 복사해서 새 배열 만듬
    let productsAbc = products.slice();

    productsAbc.sort(function(item1, item2){
        // return이 음수면 item1이 왼쪽, item2가 오른쪽
        if (item1.title < item2.title) return -1;
        // return이 0이면 정렬 x
        else if (item1.title == item2.title) return 0;
        // return이 양수면 item1이 오른쪽, item2가 왼쪽
        else return 1;
    });

    // 상품 전시 컨테이너 비우기
    $('#items').html('');

    // 상품 생성
    layout(productsAbc);

})


// 가격순 정렬
$('#sortPrice').click(function(){
    let productsPrice = products.slice();
    productsPrice.sort(function(item1, item2){
        return item1.price - item2.price;
    });

    $('#items').html('');

    layout(productsPrice);
    // $('.price').css('background','#FFFF9A');
})


// 일정 가격만 출력
$('#filterPrice').click(function(){
let productsFilter = products.filter(function(item){
    return item.price <= 60000;
    });

    $('#items').html('');

    layout(productsFilter);
    // $('.price').css('background','#FFFF9A');
})


// 수납가구만 출력
$('#수납가구').click(function(){
let productsFilter = products.filter(function(item){
        return item.type == "수납가구";
    });

    $('#items').html('');

    layout(productsFilter);
    // $('.price').css('background','#FFFF9A');
})


// 인테리어 소품만 출력
$('#인테리어소품').click(function(){
let productsFilter = products.filter(function(item){
        return item.type == "인테리어소품";
    });

    $('#items').html('');

    layout(productsFilter);
    // $('.price').css('background','#FFFF9A');
})


// 침실 가구만 출력
$('#침실가구').click(function(){
let productsFilter = products.filter(function(item){
        return item.type == "침실가구";
    });

    $('#items').html('');

    layout(productsFilter);
    // $('.price').css('background','#FFFF9A');
})


// 거실 가구만 출력
$('#거실가구').click(function(){
let productsFilter = products.filter(function(item){
        return item.type == "거실가구";
    });

    $('#items').html('');

    layout(productsFilter);
    // $('.price').css('background','#FFFF9A');
})


// 전체 버튼
$('#revert').click(function(){

    $('#items').html('');
    
    layout(products);
})