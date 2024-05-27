document.addEventListener("DOMContentLoaded", function () {
    let main_container = document.querySelector('.main_container');
    let slide_container = main_container.querySelector('.slide_list');
    let stop;

    const slides = document.querySelectorAll('.slide_list li');
    const btnForward = document.querySelector('.btn_foward');
    const btnBack = document.querySelector('.btn_back');

    let beforeIdx = 0;
    let isActive = true;

    let pager = main_container.querySelector('.pager');
    for (let i = 0; i < slides.length; i++) {
        pager.innerHTML += `<a href="#" data-direction=${i}></a>`;
    }
    let pagers = pager.querySelectorAll('.pager a');


    function highlightPager(newIndex) {
        pagers[beforeIdx].style.background = 'darkgray';
        pagers[newIndex].style.background = 'rgb(49, 47, 47)';
    }

    //슬라이드 기능
    function showSlide(newIndex, direction) {
        if (newIndex != beforeIdx) {
            slides[beforeIdx].classList.remove('visible', 'left', 'right');
            if (newIndex === 0) {
                for (let i = 0; i < slides.length - 1; i++) {
                    slides[i].classList.remove('visible', 'left', 'right');
                    slides[i].classList.add('right');
                }
            }
            slides[newIndex].classList.add('visible'); //현재 화면 보여주기
            if (direction === 'forward') {
                for (let i = 0; i <= beforeIdx; i++) {
                    slides[i].classList.remove('right');
                    slides[i].classList.add('left');
                }

                slides[newIndex].classList.add('right');

            } else if (direction === 'backward') {

                for (let i = beforeIdx; i > 0; i--) {
                    slides[i].classList.remove('left', 'right');
                    slides[i].classList.add('right');
                }
                slides[newIndex].classList.add('left');
            }

            //맨 마지막에서 첫 이미지로 넘어갈때 방향 초기화
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
            //현재 페이저 클릭한 부분 표시하기
            highlightPager(newIndex);
            beforeIdx = newIndex;
        } else {
            return false;
        }
    }


    btnForward.addEventListener('click', event => {
        event.preventDefault();
        if (isActive) {
            let newIndex = (beforeIdx + 1) % slides.length;
            showSlide(newIndex, 'forward');
            updateButtons();
            isActive = false;

            setTimeout(() => isActive = true, 1000);
        }
    });

    btnBack.addEventListener('click', event => {
        event.preventDefault();
        if (isActive) {
            let newIndex = (beforeIdx - 1 + slides.length) % slides.length;
            showSlide(newIndex, 'backward');
            updateButtons();
            isActive = false;

            setTimeout(() => isActive = true, 1000);
        }

    });

    pager.addEventListener('click', event => {

        if (isActive) {
            let newIndex = event.target.dataset.direction;
            console.log(newIndex);
            if (newIndex > beforeIdx) {
                showSlide(newIndex, 'forward');
            } else {
                showSlide(newIndex, 'backward');
            }
            updateButtons();
            isActive = false;
            setTimeout(() => isActive = true, 1000);
        }


    });


    slide_container.addEventListener('mouseenter', () => {
        stop = setInterval((() => {
            let newIndex = (beforeIdx + 1) % slides.length;
            console.log(newIndex + 'current' + beforeIdx);

            showSlide(newIndex, 'forward');
            beforeIdx = newIndex;
            updateButtons();
        }), 2000);
    });

    slide_container.addEventListener('mouseleave', () => {
        clearInterval(stop);
    });


    //버튼 비활성화 체크 기능
    function updateButtons() {
        if (beforeIdx === 0) {
            btnBack.classList.add('nonVisible');
        } else {
            btnBack.classList.remove('nonVisible');
        }

        if (beforeIdx === slides.length - 1) {
            btnForward.classList.add('nonVisible');
        } else {
            btnForward.classList.remove('nonVisible');
        }
    }

    updateButtons();
});




