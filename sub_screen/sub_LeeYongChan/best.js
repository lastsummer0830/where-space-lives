// 상품 데이터
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
]

// 상품 생성
products.forEach(item => {
    let template = `
    <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
            <h5 class="title">${item.title}</h5>
            <p class="price">가격 : ${item.price}</p>
            <button class="btn btn-danger">주문하기</button>
        </div>
    </div>
    `
    $('#items').append(template);
});

// 상품 생성 함수 
function layout(items){
    items.forEach(item => {
        let template = `
        <div class="card">
            <img src="https://via.placeholder.com/600">
            <div class="card-body">
                <h5 class="title">${item.title}</h5>
                <p class="price">가격 : ${item.price}</p>
                <button class="btn btn-danger">주문하기</button>
            </div>
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