const container = document.querySelector('.nation_container');
const data = ['../../image/bg1.jpg',
    '../../image/bg2.jpg',
    '../../image/bg3.jpg',
    '../../image/bg4.jpg',
    '../../image/bg5.jpg'];

for (let i = 1; i <= data.length; i++) {
    const link = document.createElement('a');
    link.href = `#`;
    link.textContent = `${i}`;
    link.setAttribute('class', `nationBox nation${i}`);
    container.appendChild(link);
}


document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelectorAll('a');
    let img = document.querySelector('img');
    const links = document.querySelectorAll('.nationBox');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(link => link.classList.remove('nation1'));
            link.classList.add('nation1');
        });
    }); 8
    nav[0].addEventListener("click", function () {
        img.src = data[0];
    });
    nav[1].addEventListener("click", function () {
        img.src = data[1];
    });
    nav[2].addEventListener("click", function () {
        img.src = data[2];
    });
    nav[3].addEventListener("click", function () {
        img.src = data[3];
    });
    nav[4].addEventListener("click", function () {
        img.src = data[4];
    });

});



// document.addEventListener("click", () => {
//     clearInterval();
// });

// document.addEventListener("click", () => {
//     loopInterval = setInterval(() => {
//         nextMove(); // 다음 슬라이드를 보여주는 함수
//     }, 3000);
// });





