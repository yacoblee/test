// document.addEventListener("DOMContentLoaded", () => {
//     const header = document.querySelector("header");

//     if (!header) {
//         console.error("Header element not found");
//         return;
//     }

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio > 0) {
//                 header.classList.remove('sticky');
//             } else if (!header.classList.contains(".sticky")) {
//                 header.classList.add('sticky');
//             }
//         });
//     }, { threshold: 0 });

//     observer.observe(header);

//     console.log("IntersectionObserver started");
// });
$(document).ready(function () {
    window.$app = {};
    // 스크롤 시 header fade-in
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })

});

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll(".section");

//     const observerOptions = {
//         root: null,
//         threshold: 0.1,
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("in-view");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, observerOptions);

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });