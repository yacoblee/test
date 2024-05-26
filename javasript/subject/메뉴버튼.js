document.addEventListener("DOMContentLoaded", function () {
    let cont = document.querySelector('ul');
    let divcont = ['content1', 'content2', 'content3'];

    cont.addEventListener('click', e => {
        e.preventDefault();  

        let selected = e.target.closest('a');
        if (!selected) return;

        // href 주소에 맞는 컨텐트 문자열 자르기
        let seltag = selected.href.split("#");

        for (let i = 0; i < 3; i++) {
            let asnd = document.getElementById(divcont[i]);
            if (seltag[1] === divcont[i]) {
                asd.style.display = 'block';
                // Scroll to the selected content
                window.scrollTo({
                    top: asd.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            } else {
                asd.style.display = 'none';
            }
        }

        cont.querySelectorAll('a').forEach(a => a.classList.remove('selected'));
        selected.classList.add('selected');
    });
});


// cont.addEventListener('click', e => {
//     let selected = e.target.closest('a');
//     //href 주소에 맞는 컨텐트 문자열 자르기
//     let seltag = selected.href.split("#");

//     for (let i = 0; i < 3; i++) {
//         if (seltag[1] == divcont[i]) {
//             let asd = document.getElementById(`${divcont[i]}`);
//             asd.style.display = 'block';
//         } else {
//             let asd = document.getElementById(`${divcont[i]}`);
//             asd.style.display = 'none';
//         }
//     }
//     cont.querySelectorAll('a').forEach(a => a.classList.remove('selected'));

//     selected.classList.add('selected');
//     let serviceList = e.target.closest('header');

//     let marg = serviceList.offsetHeight + 'px';
//     body.style.marginTop = marg;


// });