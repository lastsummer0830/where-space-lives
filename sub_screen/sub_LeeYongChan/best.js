// 상품 데이터
var products = [
    { id : 0, price : 70000, title : '이케아 옷장', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '수납가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 1, price : 50000, title : '인테리어 원형 테이블', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '인테리어소품', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 2, price : 60000, title : '에이스 침대', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '침실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'},
    { id : 3, price : 60000, title : '다인용 소파', content: '[29CM 단독] (uni)도미토리 포도바나나 파자마', type: '거실가구', img: 'https://img.29cm.co.kr/item/202511/11f0baf476c5db5393804f33500318d0.jpg?width=408&format=webp'}
]

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

// 원래대로 버튼
$('#revert').click(function(){

    $('#items').html('');
    
    layout(products);
})