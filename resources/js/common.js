

// 패밀리 사이트
var familyBtn = document.querySelector('footer .family button');
familyBtn.addEventListener('click', function(e){
	e.preventDefault();
	this.classList.toggle('on');
});

//플로팅 메뉴
var flotingBtn = document.querySelector('.floting .close');
flotingBtn.addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.floting').classList.toggle('off');
});

//나의 수강현황 접기
var infoBtn = document.querySelectorAll('.info .infoOpen');
infoBtn.forEach(function(el) {
	el.addEventListener('click', function(e){
		e.preventDefault();
		this.classList.toggle('on');
		document.querySelector('.info .myList').classList.toggle('on');
		if (el.classList.contains('on')) {
			if(el.classList.contains('webHidden')){
				el.innerText = '나의 수강현황 접기';
			} else {
				el.innerText = '접기';
			}
		} else {
			if(el.classList.contains('webHidden')){
				el.innerText = '나의 수강현황 펼치기';
			} else {
				el.innerText = '회원님의 강좌 정보를 확인하세요.';
			}
		}
	});
});

var state = document.querySelectorAll('.state');
state.forEach(function(el) {
	el.addEventListener('click', function (e) {
		this.classList.toggle('on');
	});
});