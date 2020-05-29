window.addEventListener('DOMContentLoaded', function () {
	if (!!document.documentMode) {
		svg4everybody();
	}
})

let burgerBtn = document.querySelector('.top-burger__btn');

burgerBtn.addEventListener('click', mobileMenu)

function mobileMenu() {
	if (!this.classList.contains('is-active')) {
		this.classList.add('is-active');
	} else {
		this.classList.remove('is-active');
	}
}
window.addEventListener('click', function(e) {
	if(e.target.tagName != 'BUTTON') {
		return;		
	} else {
		console.log('button click!')
	}
})

//fake slider
let slider = document.querySelector('.slider-cont');
function fakeSlider() {
	let slide = slider.querySelector('.slider-cont__item');
	slider.append(slide);
}
slider.onclick = fakeSlider;
