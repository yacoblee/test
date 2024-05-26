document.addEventListener("DOMContentLoaded", function () {
    let a = document.querySelector('.pageFrame');
    let img = document.querySelectorAll('.img');
    var count = 0;

    let upBtn = document.querySelector('.upBtn');
    let downBtn = document.querySelector('.downBtn');

    let data = ['../image/bg1.jpg',
        '../image/bg2.jpg',
        '../image/bg3.jpg',
        '../image/bg4.jpg',
        '../image/bg5.jpg'];


    for (let i = 0; i < img.length; i++) {
        img[i].style.background = `url(${data[i]})`;
        img[i].style.backgroundRepeat = 'no-repeat';
        img[i].style.backgroundSize = 'cover';
        img[i].style.backgroundPosition = 'center';
    }

    let isActive = true;
    document.addEventListener('wheel', event => {
        event.preventDefault();
        if (isActive) {
            let y = event.deltaY;
            if (0 < event.deltaY && event.deltaY < 300) {
                if (count < 3) {
                    a.style.transform += "translateY(-100vh)";
                    count++;
                }
            } else if (event.deltaY < 0) {
                if (!count == 0) {
                    a.style.transform += "translateY(+100vh)";
                    count--;
                }
            }
            isActive = false;

            setTimeout(() => isActive = true, 1000);
        }

    });

    upBtn.addEventListener('click', event => {
        event.preventDefault();
        if (count <= 3) {
            if (!count == 0) {
                a.style.transform += "translateY(+100vh)";
                count--;
            }
        }
    });
    downBtn.addEventListener('click', event => {
        event.preventDefault();
        if (count < 3) {
            a.style.transform += "translateY(-100vh)";
            count++;
        }
    });





    // downBtn

});