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
    });
    nav[0].addEventListener("click", function () {

        img.src = '../../image/bg1.jpg';

    });
    nav[1].addEventListener("click", function () {
        img.src = '../../image/bg2.jpg';

    });
    nav[2].addEventListener("click", function () {
        img.src = '../../image/bg3.jpg';

    });
    nav[3].addEventListener("click", function () {
        img.src = '../../image/bg4.jpg';

    });
    nav[4].addEventListener("click", function () {
        img.src = '../../image/bg5.jpg';

    });
});


