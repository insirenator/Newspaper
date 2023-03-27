const hiddenContent = document.querySelector('.hidden-content');
const readMoreLess = document.querySelector('.read-more-less');

readMoreLess.addEventListener('click', () => {
	if (hiddenContent.classList.contains('hide')){
		hiddenContent.classList.remove('hide');
		readMoreLess.textContent = "Read Less";
	}
	else {
		hiddenContent.classList.add('hide');
		readMoreLess.textContent = "Read More";
	}
});