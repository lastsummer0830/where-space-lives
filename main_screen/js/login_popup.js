// 열기버튼
var target = document.querySelectorAll('.btn_open');
// 닫기버튼
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

const popWrap = document.querySelector("#pop_info_1");

// 팝업 열기
// for 문을 사용해 열기 버튼 개수(target.length)만큼 실행함
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    // #pop_info_1(pop_wrap)의 style(css) 속 display를 block으로 설정해서 숨겨진 팝업창이 보이게 하기
    popWrap.style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    //this(btn_close)의 조부모인 pop_wrap의 display: block을 none으로 바꿔서 팝업창 안보이게 하기
    popWrap.style.display = 'none';
  });
}