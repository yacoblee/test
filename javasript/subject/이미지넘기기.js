document.addEventListener("DOMContentLoaded", function () {
    const regions = document.querySelectorAll(".slide_list>li");
    const ullist = document.querySelector('ul');
    const leftButton = document.querySelector(".btn_back");
    const rightButton = document.querySelector(".btn_foward");

    let currentIndex = 0;
    const maxIndex = Math.max(Math.ceil(regions.length) - 1, 0); //4

    updateButtonVisibility();

    let lastClickTime = 0;


    rightButton.addEventListener("click", function (e) {
        if (currentIndex < maxIndex) {
            const currentTime = new Date();
            const timeDiff = currentTime - lastClickTime;
            if (timeDiff < 700) {
                e.preventDefault();
                return;
            } else {
                e.preventDefault();
                ullist.style.transform += "translateX(-100%)";
                currentIndex++;
                updateButtonVisibility();

            } lastClickTime = currentTime;
        }
    });

    leftButton.addEventListener("click", function (handleClick) {
        if (currentIndex > 0) {
            const currentTime = new Date();
            const timeDiff = currentTime - lastClickTime;
            if (timeDiff < 700) {
                e.preventDefault();
                return;
            } else {
                ullist.style.transform += "translateX(+100%)";
                currentIndex--;
                updateButtonVisibility();
            } lastClickTime = currentTime;
        }
    });

    function inter() {
        if (currentIndex < maxIndex) {
            ullist.style.transform += "translateX(-100%)";
            currentIndex++;
            updateButtonVisibility();
        } else if (currentIndex == maxIndex) {
            ullist.style.transform += "translateX(+400%)";
            currentIndex = 0;
            updateButtonVisibility();
        }
    };

    let slideTime;

    ullist.addEventListener('mouseover', function () {
        slideTime = setInterval(inter, 1000);
    });

    ullist.addEventListener('mouseout', function () {
        clearInterval(slideTime);
    });

    function updateButtonVisibility() {
        rightButton.style.visibility = currentIndex < maxIndex ? "visible" : "hidden";
        leftButton.style.visibility = currentIndex > 0 ? "visible" : "hidden";
    }

});