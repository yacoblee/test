const container = document.querySelector('.nation_container');
const data = [
    '../../image/bg1.jpg',
    '../../image/bg2.jpg',
    '../../image/bg3.jpg',
    '../../image/bg4.jpg',
    '../../image/bg5.jpg'
];
let currentIndex = 0;
let intervalId;
let isRunning = true;

/** 내부 요소 구성 S */
for (let i = 0; i < data.length; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = `${i + 1}`;
    link.setAttribute('class', `nationBox`);
    link.dataset.index = i;
    container.appendChild(link);
}

const img = document.querySelector('#main_container img');
const links = document.querySelectorAll('.nationBox');

//페이지 다음영역 + 네이션1 투명도 조절 S
const changeImage = () => {
    currentIndex = (currentIndex + 1) % data.length;
    img.src = data[currentIndex];
    links.forEach(link => link.classList.remove('nation1'));
    links[currentIndex].classList.add('nation1');
};

//페이지 자동전환 영역 S
const startInterval = () => {
    intervalId = setInterval(changeImage, 2000);
};

const stopInterval = () => {
    clearInterval(intervalId);
};

img.addEventListener('click', () => {
    if (isRunning) {
        stopInterval();
    } else {
        startInterval();
    }
    isRunning = !isRunning;
});

//클릭시 이벤트 영역 S
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        stopInterval();

        currentIndex = parseInt(this.dataset.index);
        img.src = data[currentIndex];
        links.forEach(link => link.classList.remove('nation1'));
        this.classList.add('nation1');
        if (isRunning) {
            startInterval();
        }
    });
});

startInterval();