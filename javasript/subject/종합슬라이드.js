document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide_list li');
    const btnForward = document.querySelector('.btn_foward');
    const btnBack = document.querySelector('.btn_back');
    let currentIndex = 0;
    let isActive = true;


    function showSlide(newIndex, direction) {
        slides[currentIndex].classList.remove('visible', 'left', 'right');
        if (newIndex === 0) {
            for (let i = 0; i < slides.length - 1; i++) {
                slides[i].classList.remove('visible', 'left', 'right');
                slides[i].classList.add('right');
            }
        }



        slides[newIndex].classList.add('visible');

        if (direction === 'forward') {
            slides[currentIndex].classList.add('left');
            slides[newIndex].classList.add('right');

        } else if (direction === 'backward') {
            slides[newIndex].classList.add('left');
            slides[currentIndex].classList.add('right');

        }
        if (newIndex === 0) {
            for (let i = 0; i < slides.length - 1; i++) {
                slides[i].classList.remove('left', 'right');
                slides[i].classList.add('right');
            }
        }
        if (newIndex === 4) {
            slides[0].classList.remove('visible', 'left', 'right');
            slides[0].classList.add('right');

            slides[4].classList.remove('right');
            slides[4].classList.add('left');
        }

        currentIndex = newIndex;
    }




    btnForward.addEventListener('click', event => {
        event.preventDefault();
        if (isActive) {
            let newIndex = (currentIndex + 1) % slides.length;
            showSlide(newIndex, 'forward');
            updateButtons();
            isActive = false;

            setTimeout(() => isActive = true, 1000);
        }
    });

    btnBack.addEventListener('click', event => {
        event.preventDefault();
        if (isActive) {
            let newIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(newIndex, 'backward');
            updateButtons();
            isActive = false;

            setTimeout(() => isActive = true, 1000);
        }

    });

    let main_container = document.querySelector('.main_container');
    let slide_container = main_container.querySelector('.slide_list');
    let stop;

    slide_container.addEventListener('mouseenter', () => {
        stop = setInterval((() => {
            let newIndex = (currentIndex + 1) % slides.length;
            console.log(newIndex + 'current' + currentIndex);

            showSlide(newIndex, 'forward');
            currentIndex = newIndex;
            updateButtons();
        }), 2000);
    });

    slide_container.addEventListener('mouseleave', () => {
        clearInterval(stop);
    });


    //버튼 비활성화 체크 기능
    function updateButtons() {
        if (currentIndex === 0) {
            btnBack.classList.add('nonVisible');
        } else {
            btnBack.classList.remove('nonVisible');
        }

        if (currentIndex === slides.length - 1) {
            btnForward.classList.add('nonVisible');
        } else {
            btnForward.classList.remove('nonVisible');
        }
    }

    updateButtons();
});




