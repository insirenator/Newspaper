/*const hiddenContent = document.querySelector('.hidden-content');*/
const readMoreLessList = Array.from(document.querySelectorAll('.read-more-less'));

readMoreLessList.forEach((readMoreLess) => {
	readMoreLess.addEventListener('click', () => {

		const hiddenContent = readMoreLess.parentElement.querySelector('.hidden-content');

		if (hiddenContent.classList.contains('hide')){
			hiddenContent.classList.remove('hide');
			readMoreLess.textContent = "Read Less";
		}
		else {
			hiddenContent.classList.add('hide');
			readMoreLess.textContent = "Read More";
		}
	});
});