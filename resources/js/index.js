
// 첫 번째 Swiper
var swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<li class="' + className + '">' +
			'<a href="#">' + (index + 1) + '</a>' +
			'<div class="progress">프로그래스</div>' +
			'<button type="button">멈춤</button>' +
			'</li>';
		},
	},
	on: {
		autoplayTimeLeft: function (swiper, time, progress) {
			var activeProgress = document.querySelector('.swiper .swiper-pagination-bullet-active .progress');
			if (activeProgress) {
				var percent = (1 - progress) * 100;
				activeProgress.style.setProperty('--progress',percent + '%');
			}
		},
		slideChange: function () {
			document.querySelectorAll('.swiper .progress').forEach(function (el) {
				el.style.setProperty('--progress', '0%');
			});
		}
	}
});

// 첫 번째 Swiper 멈춤 버튼
var stopEl = document.querySelectorAll('.pagination li button');

stopEl.forEach(function (el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (el.classList.contains('on')) {
			swiper.autoplay.start();
			el.classList.remove('on');
		} else {
			swiper.autoplay.stop();
			el.classList.add('on');
		}
	});
});

// 두 번째 Swiper
var swiper2 = new Swiper('.swiper2', {
	slidesPerView: 1,
	spaceBetween: 0,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.page02',
		clickable: true,
		renderBullet: function (index, className) {
			return '<li class="' + className + '">' +
			'<a href="#">' + (index + 1) + '</a>' +
			'<div class="progress">프로그래스</div>' +
			'<button type="button">멈춤</button>' +
			'</li>';
		},
	},
	on: {
		autoplayTimeLeft: function (swiper, time, progress) {
			var activeProgress = document.querySelector('.swiper2 .swiper-pagination-bullet-active .progress');
			if (activeProgress) {
				var percent = (1 - progress) * 100;
				activeProgress.style.setProperty('--progress',percent + '%');
			}
		},
		slideChange: function () {
			document.querySelectorAll('.swiper2 .progress').forEach(function (el) {
				el.style.setProperty('--progress', '0%');
			});
		}
	}
});

// 두 번째 Swiper 멈춤 버튼
var stopEl2 = document.querySelectorAll('.page02 li button');
stopEl2.forEach(function (el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (el.classList.contains('on')) {
			swiper2.autoplay.start();
			el.classList.remove('on');
		} else {
			swiper2.autoplay.stop();
			el.classList.add('on');
		}
	});
});

var scrollCheck = true;
var vh = window.innerHeight;
window.addEventListener('scroll', function(){
	if(scrollCheck){
		window.scrollTo({
			top:vh,
			behavior: 'smooth'
		});
		scrollCheck = false;
	}
});

var familyBtn = document.querySelector('footer .family button');
familyBtn.addEventListener('click', function(e){
	e.preventDefault();
	this.classList.toggle('on');
});