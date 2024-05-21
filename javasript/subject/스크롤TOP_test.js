'use strict'

document.addEventListener('scroll', () => {
    let posY = window.scrollY;
    let heights = window.innerHeight / 3;
    let upper = document.querySelector('.scrollTop');

    if (posY < heights) {

        upper.style.opacity = '0';
        setTimeout(() => {
            if (window.scrollY < heights) {
                upper.style.visibility = 'hidden';
            }
        }, 300);

        upper.style.visibility = 'visible';
        upper.style.opacity = '1';
    }

    upper.addEventListener('click', () => {
        let posY = window.scrollY;

        let stopTimeout = setInterval(() => {

            window.scroll(0, posY -= 5);

            if (posY <= 0) {
                clearInterval(stopTimeout);
                window.scroll(0, 0);
            }

        }, 5);
    });

    upper.addEventListener('mouseenter', () => {
        upper.style.transform = 'scale(1.1)';
        upper.style.opacity = '0.8';
        upper.style.cursor = 'pointer';
    });

    upper.addEventListener('mouseleave', () => {
        upper.style.transform = 'scale(1)';
        upper.style.opacity = '1';
    });
});




// if (posY > heights) {
//     upper.style.visibility = 'visible';

//     upper.addEventListener('click', () => {
//         backScroll(() => window.scroll(0, posY -= 5));
//     });
// }

// function backScroll(backSc) {
//     let stopTimeout = setInterval(() => {
//         backSc();
//         if (posY <= 0) {
//             clearInterval(stopTimeout);
//         }
//     }, 5);
// }

// clearTimeout(stop);
// stop = setTimeout(() => {

// }, 5000);
