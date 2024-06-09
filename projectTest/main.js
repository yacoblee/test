document.addEventListener('DOMContentLoaded', function () {
    window.$app = {};
    document.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            document.getElementById("header").classList.remove("deactive");
            document.getElementById("header").classList.add("active");
        } else {
            document.getElementById("header").classList.remove("active");
            document.getElementById("header").classList.add("deactive");
        }
    });
});