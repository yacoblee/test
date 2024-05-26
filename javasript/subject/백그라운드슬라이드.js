document.addEventListener("DOMContentLoaded", function () {
    const ullist = document.querySelector('ul');
    const leftButton = document.querySelector(".btn_back");
    const rightButton = document.querySelector(".btn_foward");

    let currentIndex = 0;
    // const maxIndex = Math.max(Math.ceil(regions.length) - 1, 0); //4
    let lastClickTime = 0;

    let data = ['../image/bg1.jpg',
        '../image/bg2.jpg',
        '../image/bg3.jpg',
        '../image/bg4.jpg',
        '../image/bg5.jpg'];
    //li 요소 생성
    for (let i = 0; i < data.length; i++) {
        const link = document.createElement('li');
        link.style.background = `url(${data[i]})`;
        link.style.backgroundRepeat = 'no-repeat';
        link.style.backgroundSize = 'cover';
        link.style.backgroundPosition = 'center';
        link.dataset.index = i;
        //첫화면 이미지만 보이게
        if (i === 0) {
            link.classList.add('visible');
        }
        ullist.appendChild(link);
    }

    let links = document.querySelectorAll('li');

    //li 슬라이드 시작
    function NextSlide() {
        links[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % links.length;
        links[currentIndex].classList.add('visible');

    }

    setInterval(NextSlide, 2000);
});
