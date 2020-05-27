//MODAL WINDOWS
const mLayer = document.querySelector('.modal__layer');
if (mLayer) {
	let mWindow = mLayer.querySelector('.modal__window'),
		mItem = mWindow.querySelector('.modal__item'),
		mBtn = document.querySelectorAll('[data-modal]');
	window.addEventListener('DOMContentLoaded', function() {
		mLayer.removeAttribute('style');
	})
	// window.onload = function () {
	// }
	mBtn.forEach(function (btn) {
		btn.addEventListener('click', function () {
			let btnData = this.dataset.modal,
				currWindow = mWindow.querySelector('.modal__item#' + btnData);
			modalOpen(currWindow);
		});
		function modalOpen(currWindow) {
			if (currWindow) {
				//open modal item
				document.documentElement.classList.add('modal-open');
				document.body.classList.add('modal-open');
				mLayer.classList.add('is-visible');
				currWindow.classList.add('is-active');
				//if page has scroll
				if (document.documentElement.clientHeight < document.body.clientHeight) {
					document.body.classList.add('modal-open--w-scroll');
				}
				//create close button
				let closeBtn = document.createElement('button');
				closeBtn.classList.add('modal__close-btn');
				closeBtn.setAttribute('type', 'button');
				closeBtn.innerHTML = '<span class="visually-hidden">Закрыть окно</span>';
				currWindow.append(closeBtn);
				//if this modal form - focus to first input element
				if (currWindow.classList.contains('modal__form')) {
					setTimeout(function () {
						currWindow.querySelector('.text__input').focus();
					}, 400)
				}
				//close by close button
				closeBtn.addEventListener('click', closeByBtn);

				//close by esc
				document.addEventListener('keydown', closeEsc);

				//close by oftargetclick
				mWindow.addEventListener('click', ofTargetClick);
			}
		};
	});
	let closeByBtn = function () {
		modalClose();
	},
		closeEsc = function (e) {
			if (e.keyCode === 27) {
				modalClose();
			}
		},
		ofTargetClick = function (e) {
			if (e.target == this) {
				modalClose();
			}
		};
	function modalClose() {
		document.documentElement.classList.remove('modal-open');
		document.body.classList.remove('modal-open', 'modal-open--w-scroll');
		mLayer.classList.remove('is-visible');
		mItem.querySelector('.modal__close-btn').remove();
		mItem.classList.remove('is-active');
		document.removeEventListener('keydown', closeEsc);
		mWindow.removeEventListener('click', ofTargetClick);
	};
}
