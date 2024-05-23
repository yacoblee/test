// document.addEventListener("DOMContentLoaded", function () {
//     let ullist = document.querySelector('.slide_list');
//     let currentIndex = 0;
//     let data = ['../image/bg1.jpg',
//         '../image/bg2.jpg',
//         '../image/bg3.jpg',
//         '../image/bg4.jpg',
//         '../image/bg5.jpg'];


//     for (let i = 0; i < data.length; i++) {
//         const link = document.createElement('li');
//         link.style.background = `url(${data[i]})`;
//         link.style.backgroundRepeat = 'no-repeat';
//         link.style.backgroundSize = '300px 500px';
//         link.dataset.indexs = i;
//         ullist.appendChild(link);
//     }

//     let links = this.querySelectorAll('li');

//     ullist.addEventListener('mouseover', () => {


//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    let ullist = document.querySelector('.slide_list');
    let currentIndex = 0;

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

        if (i === 0) {
            link.classList.add('visible');
        }
        ullist.appendChild(link);
    }

    let links = document.querySelectorAll('li');

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % links.length;
        links[currentIndex].classList.remove('visible');
        links[currentIndex].classList.add('visible');

        // links[currentIndex].style.transform += "translateX(-100%)";

    }

    setInterval(showNextSlide, 3000);
});
