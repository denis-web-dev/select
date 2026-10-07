document.addEventListener('DOMContentLoaded', function () {
	const dropdown = document.querySelectorAll('.dropdown');

	dropdown.forEach(function (dropDownWrapper) {
		const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
		const caret = dropDownWrapper.querySelector('.caret');
		const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
		const dropDownItems = dropDownList.querySelectorAll('.dropdown__list-item');
		const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

		dropDownBtn.addEventListener('click', function (e) {
			dropDownList.classList.toggle('dropdown__list--visible');
			caret.classList.toggle('caret-rotate');
			this.classList.toggle('dropdown__button--active');
		});

		dropDownList.addEventListener('click', function (e) {
			if (e.target.classList.contains('dropdown__list-item')) {
				dropDownItems.forEach(item => item.classList.remove('dropdown__list-item--selected'));

				e.target.classList.add('dropdown__list-item--selected');
				dropDownBtn.innerText = e.target.innerText;
				dropDownBtn.classList.add('dropdown__button--selected');
				dropDownInput.value = e.target.dataset.value;
				caret.classList.remove('caret-rotate');
				dropDownList.classList.remove('dropdown__list--visible');
				dropDownBtn.classList.remove('dropdown__button--active');
			}
		});

		document.addEventListener('click', function (e) {
			if (!dropDownWrapper.contains(e.target)) {
				caret.classList.remove('caret-rotate');
				dropDownList.classList.remove('dropdown__list--visible');
				dropDownBtn.classList.remove('dropdown__button--active');
			}
		});

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Tab' || e.key === 'Escape') {
				dropDownList.classList.remove('dropdown__list--visible');
				dropDownBtn.classList.remove('dropdown__button--active');
				caret.classList.remove('caret-rotate');
			}
		});
	});
});
