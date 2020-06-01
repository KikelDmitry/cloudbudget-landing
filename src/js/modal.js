//MODAL WINDOWS
const mLayer = document.querySelector('.modal__layer');
if (mLayer) {

	let mWindow = mLayer.querySelector('.modal__window'),
		mItems = mWindow.querySelectorAll('.modal__item');

	function sliderInit() {
		mLayer.style = false;
		//create and append close button to each modal window
		mItems.forEach(function (modalItem) {
			let closeBtn = document.createElement('button');
			closeBtn.classList.add('modal__close-btn');
			closeBtn.type = 'button';
			closeBtn.ariaLabel = 'Close';
			modalItem.append(closeBtn);
		})
	}
	function modalOpen(id) {
		document.documentElement.classList.add('modal-open');
		document.body.classList.add('modal-open');
		mLayer.classList.add('is-visible');
		
		//if page has scroll
		if (document.documentElement.clientHeight < document.body.clientHeight) {
			document.body.classList.add('modal-open--w-scroll');
		}
		let currWin = mWindow.querySelector('#' + id);
		currWin.classList.add('is-active');

		//if this modal video
		if (currWin.id == 'modal-video' && !currWin.querySelector('.modal-video__wrap')) {
			let embed = document.createElement('iframe');
			embed.classList.add('modal-video__embed');
			embed.src = 'https://www.youtube.com/embed/5qap5aO4i9A';
			embed.allowFullscreen = true;
			embed.frameBorder = 0;
			let embedWrap = document.createElement('div');
			embedWrap.classList.add('modal-video__wrap');
			currWin.append(embedWrap);
			embedWrap.append(embed);
			
		}

	}
	function modalClose() {
		document.documentElement.classList.remove('modal-open');
		document.body.classList.remove('modal-open', 'modal-open--w-scroll');
		mLayer.classList.remove('is-visible');
		mItems.forEach(function (item) {
			item.classList.remove('is-active');
		})
	}
	window.addEventListener('DOMContentLoaded', function () {
		sliderInit();
	})
	window.addEventListener('click', function (e) {
		if (!e.target.hasAttribute('data-modal')) {
			return;
		} else {
			if (!!e.target.dataset.modal) {
				modalClose(); //close all firstly
				let dataModal = e.target.dataset.modal;
				modalOpen(dataModal);
			}
		}
	})
	document.addEventListener('keydown', function (e) {
		if (e.keyCode === 27) {
			modalClose();
		}
	})
	mWindow.addEventListener('click', function (e) {
		if (e.target == this || e.target.classList.contains('modal__close-btn')) {
			modalClose();
		}
	})
}
