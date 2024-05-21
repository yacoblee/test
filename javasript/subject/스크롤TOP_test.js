'use strict'

document.addEventListener('scroll', () => {
    let posY = window.scrollY;
    let heights = window.innerHeight / 3;
    let upper = document.querySelector('.scrollTop');

    if (posY < heights) {
        upper.style.opacity = '0';
        setTimeout(() => {
            upper.style.visibility = 'hidden';
        }, 300);
    } else {
        upper.style.visibility = 'visible';
        upper.style.opacity = '1';
    }

    upper.addEventListener('click', () => {
        let startPos = window.scrollY;
        let duration = 500;
        let startTime = null;

        function scrollAnimation(currentTime) {
            if (!startTime) startTime = currentTime;
            let timeElapsed = currentTime - startTime;

            let run = ease(timeElapsed, startPos, -startPos, duration);

            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollAnimation);
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
