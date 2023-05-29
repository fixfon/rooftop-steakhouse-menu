function mobileMenu() {
	let menuItem = document.getElementById('menu');
	let mobileIcon = document.querySelector('.mobile-icon');
	let mobileCloseIcon = document.querySelector('.mobile-close-icon');

	if (menuItem.className === 'bottomNav') {
		menuItem.className += ' responsive';
		mobileIcon.classList.remove('active');
		mobileCloseIcon.classList.add('active');
	} else {
		menuItem.className = 'bottomNav';
		mobileIcon.classList.add('active');
		mobileCloseIcon.classList.remove('active');
	}
}
