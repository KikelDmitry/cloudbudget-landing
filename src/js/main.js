//listeners list :0
window.addEventListener('DOMContentLoaded', function () {
	if (!!document.documentMode) {
		svg4everybody();
	}
})
document.addEventListener('click', function(event) {
	let target = event.target;
	//just example
	if (target.closest('.top-burger__btn')) {
		mobMenu();

		return;
	} else if (target.matches('.top-menu.is-active a.top-menu__link')) {
		closeMenu();

		return;
	} else if (target.matches('.slider-cont__item')) {
		fakeSlider();

		return;
	}
	
})

//mobile menu
let burger = document.querySelector('.top-burger__btn'),
	menu = document.querySelector('.top-menu');
function mobMenu() {
	if(!burger.classList.contains('is-active')) {
		document.body.classList.add('modal-open')
		document.documentElement.classList.add('modal-open')
		burger.classList.add('is-active')
		menu.classList.add('is-active')
	} else {
		document.body.classList.remove('modal-open')
		document.documentElement.classList.remove('modal-open')
		burger.classList.remove('is-active')
		menu.classList.remove('is-active')
	}
}
function closeMenu() {
	document.body.classList.remove('modal-open')
	document.documentElement.classList.remove('modal-open')
	burger.classList.remove('is-active')
	menu.classList.remove('is-active')
}


//fake slider
let slider = document.querySelector('.slider-cont');
function fakeSlider() {
	let slide = slider.querySelector('.slider-cont__item');
	slider.append(slide);
}

//blocking forms submit
let forms = document.querySelectorAll('form');
forms.forEach(function (form) {
	form.onsubmit = function (e) {
		e.preventDefault();
		modalOpen('#dummy-modal');
	}
})

