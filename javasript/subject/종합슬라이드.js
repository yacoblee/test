document.addEventListener("DOMContentLoaded", function () {
    const slideList = document.querySelector('.slide_list');
    const slides = document.querySelectorAll('.slide_list li');
    const leftButton = document.querySelector('.btn_back');
    const rightButton = document.querySelector('.btn_foward');
    let currentIndex = 0;

    function updateSlides(direction) {
        slides[currentIndex].classList.remove('visible');

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= slides.length) {
            currentIndex = slides.length - 1;
        }

        slides[currentIndex].classList.add('visible');
        updateButtonVisibility();
    }

    function updateButtonVisibility() {
        if (currentIndex <= 0) {
            leftButton.classList.add('nonVisible');
        } else {
            leftButton.classList.remove('nonVisible');
        }

        if (currentIndex >= slides.length - 1) {
            rightButton.classList.add('nonVisible');
        } else {
            rightButton.classList.remove('nonVisible');
        }
    }

    leftButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentIndex > 0) {
            slides[currentIndex].style.transform = 'translateX(100%)';
            slides[currentIndex].style.opacity = '1';
            updateSlides(-1);
        }
    });

    rightButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentIndex < slides.length - 1) {
            slides[currentIndex].style.transform = 'translateX(-100%)';
            slides[currentIndex].style.opacity = '1';
            updateSlides(1);
        }
    });

    updateButtonVisibility();
});
