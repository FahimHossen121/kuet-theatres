// Simple hero slider
var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
var currentIndex = 0;
var autoSlideTimer = null;

window.addEventListener('DOMContentLoaded', function () {
	var sliderImg = document.getElementById('slider-img');
	var prevBtn = document.getElementById('prev-btn');
	var nextBtn = document.getElementById('next-btn');

	if (!sliderImg || !prevBtn || !nextBtn) {
		return;
	}

	function showImage(index) {
		sliderImg.src = images[index];
	}

	function nextSlide() {
		currentIndex++;
		if (currentIndex >= images.length) {
			currentIndex = 0;
		}
		showImage(currentIndex);
	}

	function prevSlide() {
		currentIndex--;
		if (currentIndex < 0) {
			currentIndex = images.length - 1;
		}
		showImage(currentIndex);
	}

	function startAutoSlide() {
		clearInterval(autoSlideTimer);
		autoSlideTimer = setInterval(function () {
			nextSlide();
		}, 3000);
	}

	prevBtn.addEventListener('click', function () {
		prevSlide();
		startAutoSlide();
	});

	nextBtn.addEventListener('click', function () {
		nextSlide();
		startAutoSlide();
	});

	showImage(currentIndex);
	startAutoSlide();
});
