// document.addEventListener("DOMContentLoaded", () => {
//     const header = document.getElementsByTagName("header")[0]; 
//     const masterPage = document.querySelector('.master_page');
//     const headerHeight = header.clientHeight; 

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio > 0) {
//                 header.classList.remove('sticky');
//                 masterPage.classList.remove('scrolled');
//             } else {
//                 header.classList.add('sticky');
//                 masterPage.classList.add('scrolled');
//             }
//         });
//     }, { threshold: 0 });

//     observer.observe(header);

//     console.log("IntersectionObserver started");
// });
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    if (!header) {
        console.error("Header element not found");
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                header.classList.remove('sticky');
            } else {
                header.classList.add('sticky');
            }
        });
    }, { threshold: 0 });

    observer.observe(header);

    console.log("IntersectionObserver started");
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