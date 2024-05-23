
document.addEventListener("DOMContentLoaded", function () {
    let serv = document.querySelector('ul');
    let serIndex = 0;
    let butt = document.querySelector('.btn_collapseAll');

    let plus = '+ Lorem ipsum dolor sit amet.'
    let minus = '- Lorem ipsum dolor sit amet.'

    function dels() {
        let serviceLists = document.getElementsByClassName('service_list');
        for (let i = 0; i < serviceLists.length; i++) {
            let serviceList = serviceLists[i];
            let serviceHeader = serviceList.querySelector('.service_header');

            if (serviceList.classList.contains('hidden')) {
                continue;
            } else {
                serviceHeader.textContent = plus;
                serviceList.classList.add('hidden');
            }
        }
    };

    serv.addEventListener('click', e => {

        let serviceList = e.target.closest('.service_list');
        let serviceHeader = e.target.closest('.service_header');
        dels();
        if (serviceHeader.textContent == plus) {
            serviceHeader.textContent = minus;
            serviceList.classList.remove('hidden');
        } else {
            serviceHeader.textContent = plus;
            serviceList.classList.add('hidden');
        }
    });

    butt.addEventListener('click', () => {
        dels();
    });
});



//     butt.addEventListener('click', () => {
//         let serviceList = document.getElementsByClassName('service_list');

//         for (let i = 0; i < serviceList.length; i++) {
//             if (serviceList[i].classList.contain('hidden')) {
//                 continue;
//             } else {
//                 serviceHeader.textContent = plus;
//                 serviceList.classList.add('hidden');
//             }
//         };

//     });

// });
