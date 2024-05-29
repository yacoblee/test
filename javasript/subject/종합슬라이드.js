// document.addEventListener("DOMContentLoaded", function () {
//     let main_container = document.querySelector('.main_container');
//     let slide_container = main_container.querySelector('.slide_list');
//     let stop;

//     const slides = document.querySelectorAll('.slide_list li');
//     const btnForward = document.querySelector('.btn_foward');
//     const btnBack = document.querySelector('.btn_back');

//     let beforeIdx = 0;
//     let isActive = true;

//     let pager = main_container.querySelector('.pager');
//     for (let i = 0; i < slides.length; i++) {
//         pager.innerHTML += `<a href="#" data-direction=${i}></a>`;
//     }
//     let pagers = pager.querySelectorAll('.pager a');


//     function highlightPager(newIndex) {
//         pagers[beforeIdx].style.background = 'darkgray';
//         pagers[newIndex].style.background = 'rgb(49, 47, 47)';
//     }

//     //슬라이드 기능
//     function showSlide(newIndex, direction) {
//         if (newIndex != beforeIdx) {
//             slides[beforeIdx].classList.remove('visible', 'left', 'right');
//             if (newIndex === 0) {
//                 for (let i = 0; i < slides.length - 1; i++) {
//                     slides[i].classList.remove('visible', 'left', 'right');
//                     slides[i].classList.add('right');
//                 }
//             }
//             slides[newIndex].classList.add('visible'); //현재 화면 보여주기
//             if (direction === 'forward') {
//                 for (let i = 0; i <= beforeIdx; i++) {
//                     slides[i].classList.remove('left', 'right');
//                     slides[i].classList.add('left');
//                 }
//                 slides[newIndex].classList.add('right');

//             } else if (direction === 'backward') {
//                 for (let i = beforeIdx; i >= 0; i--) {
//                     slides[i].classList.remove('left', 'right');
//                     slides[i].classList.add('right');
//                 }
//                 slides[newIndex].classList.add('left');
//             }

//             //맨 마지막에서 첫 이미지로 넘어갈때 방향 초기화
//             if (newIndex === 0) {
//                 for (let i = 0; i < slides.length - 1; i++) {
//                     slides[i].classList.remove('left', 'right');
//                     slides[i].classList.add('right');
//                 }
//             }
//             if (newIndex === 4) {
//                 slides[0].classList.remove('visible', 'left', 'right');
//                 slides[0].classList.add('right');

//                 slides[4].classList.remove('left', 'right');
//                 slides[4].classList.add('left');
//             }
//             //현재 페이저 클릭한 부분 표시하기
//             highlightPager(newIndex);
//             beforeIdx = newIndex;
//         } else {
//             return false;
//         }
//     }


//     btnForward.addEventListener('click', event => {
//         event.preventDefault();
//         if (isActive) {
//             let newIndex = (beforeIdx + 1) % slides.length;
//             showSlide(newIndex, 'forward');
//             updateButtons();
//             isActive = false;

//             setTimeout(() => isActive = true, 1000);
//         }
//     });

//     btnBack.addEventListener('click', event => {
//         event.preventDefault();
//         if (isActive) {
//             let newIndex = (beforeIdx - 1 + slides.length) % slides.length;
//             showSlide(newIndex, 'backward');
//             updateButtons();
//             isActive = false;

//             setTimeout(() => isActive = true, 1000);
//         }

//     });

//     pager.addEventListener('click', event => {

//         if (isActive && event.target.dataset.direction !== undefined) {
//             let newIndex = event.target.dataset.direction;
//             console.log(newIndex);
//             if (newIndex > beforeIdx) {
//                 showSlide(newIndex, 'forward');
//             } else {
//                 showSlide(newIndex, 'backward');
//             }
//             updateButtons();
//             isActive = false;
//             setTimeout(() => isActive = true, 1000);
//         }


//     });


//     slide_container.addEventListener('mouseenter', () => {
//         stop = setInterval((() => {
//             let newIndex = (beforeIdx + 1) % slides.length;
//             console.log(newIndex + 'current' + beforeIdx);

//             showSlide(newIndex, 'forward');
//             beforeIdx = newIndex;
//             updateButtons();
//         }), 2000);
//     });

//     slide_container.addEventListener('mouseleave', () => {
//         clearInterval(stop);
//     });


//     //버튼 비활성화 체크 기능
//     function updateButtons() {
//         if (beforeIdx === 0) {
//             btnBack.classList.add('nonVisible');
//         } else {
//             btnBack.classList.remove('nonVisible');
//         }

//         if (beforeIdx === slides.length - 1) {
//             btnForward.classList.add('nonVisible');
//         } else {
//             btnForward.classList.remove('nonVisible');
//         }
//     }

//     updateButtons();
// });






'use strict';

import executable from './executable.js';                               // 실행가능 여부 측정 클로저 함수 임포트.

const main_container = document.querySelector('.main_container'),       // 이벤트 처리를 위한 주컨테이너.
    slide_lists = main_container.getElementsByTagName('li'),            // 슬라이딩을 위한 슬라이드 리스트 배열.
    btn = main_container.querySelectorAll('.main_container>a'),         // back, foward 버튼의 참조.
    pager = main_container.querySelector('.pager');                     // 페이저들의 생성을 위한 주컨테이너.

/* 페이저 생성 */
for (let i = 0; i < slide_lists.length; i++) {
    pager.innerHTML += `<a href="#" data-direction = ${i}></a>`;        // 데이터 프로퍼티를 이용하여 페이저의 인덱스 값을 관리.
}

const pagers = pager.getElementsByTagName('a');

const DELAYTIME = 800,                               // 트랜지션을 통한 애니메이션 지속 시간.           
    confirmActionable = executable(DELAYTIME);       // 실행가능 여부 측정함수. 외부 모듈을 통한 클로저(Closure) 함수 적용.

let currentIdx = 0,                     // 당 슬라이드 인덱스.
    nextIdx = 0,                        // 차 슬라이드 인덱스.
    direction;                          // 차 슬라이드의 예비 동작 방향. ( 1 : 100%,   -1 : -100% )

// ===========================================================================
/* 
    - 버튼 히든 설정 및 미설정 함수
    - 페이저 하이라이트 함수
    - 버튼과 페이저, 오토슬라이드 동작전 차 슬라이드 예비 동작 처리 함수
    - 실제 이미지 슬라이딩 동작 함수
*/

/* < 버튼 히든 설정 및 미설정 함수 > */
function checkBtnView() {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');

    if (nextIdx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (nextIdx >= slide_lists.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

/* < 페이저 하이라이트 함수 > */
function highlightPager() {
    pagers[currentIdx].style.backgroundColor = 'darkgray';
    pagers[nextIdx].style.backgroundColor = 'rgb(49, 47, 47)';
}

/* < 버튼과 페이저, 오토슬라이드 동작전 차 슬라이드 예비 동작 처리 함수 > */
function preparationActive() {
    slide_lists[nextIdx].classList.remove('animated');
    slide_lists[nextIdx].style.left = `${direction * 100}%`;
}

/* < 실제 이미지 슬라이딩 동작 함수 > */
function activeSlide() {
    setTimeout(() => {
        slide_lists[currentIdx].classList.add('animated');
        slide_lists[currentIdx].style.left = `${-direction * 100}%`;   // 예비동작을 위한 차슬라이드의 진행 방향과 당 슬라이드의
        //                                                             // 진행 방향은 반대가 되어야 하므로 음수 적용에 주의.
        slide_lists[nextIdx].classList.add('animated');
        slide_lists[nextIdx].style.left = 0;

        checkBtnView();
        highlightPager();

        currentIdx = nextIdx;
    }, 30);
}

// ===========================================================================

/* 버튼과 페이저 이벤트 처리 */
main_container.addEventListener('click', function (e) {
    const eventEle = e.target.closest('a');

    if (this.contains(eventEle) && confirmActionable()) {
        e.preventDefault();

        const extractDirection = +eventEle.dataset.direction;
        nextIdx = currentIdx + extractDirection;                        // 버튼인 경우의 실제 동작 차인덱스.

        if (eventEle.children[0]) {                 // 버튼과 페이저를 구분하기 위한 목적코드.
            //                                      // 버튼인 경우에만 하위 이미지 태그 요소가 존재.
            direction = extractDirection;           // 버튼인 경우 데이터 프러퍼티로 얻은 값이 예비 동작 방향.
        } else {
            nextIdx = extractDirection;                             // 페이저인 경우의 실제 동작 차인덱스.
            direction = extractDirection > currentIdx ? 1 : -1;     // 페이저인 경우 당 인덱스를 기준으로 데이터
            //                                                      // 프러퍼티로 얻은 값을 비교하여 예비 동작 방향 결정.
        }

        /* 
        아래 로직은 동일 페이저를 연속 클릭시 예비 동작을 차단하기 위한 로직이므로
        본래 상기 else 문 내의 페이저 처리 로직에서 처리하면 되지만, 특정 페이저를
        클릭한후 매우 뻐른 시간 내에 버튼을 클릭하면 페이저를 클릭한 시점과 버튼을
        클릭한 시점의 인덱스가 우연히 동일하게 되어 버튼 클릭시에도 예비동작이 실행
        될수 있는 문제점 발생 가능.
        따라서 이러한 예외처리를 위해 버튼에도 아래 로직 처리가 필요함에 주의.
        */
        if (currentIdx != nextIdx) {
            preparationActive();
        } else {
            return;
        }

        activeSlide();
    }
});

// ===========================================================================

/* 오토 슬라이드 이벤트 처리 */
const slide_list = main_container.querySelector('.slide_list');
let autoSlide;

slide_list.addEventListener('mouseenter', () => {
    autoSlide = setInterval(() => {
        if (confirmActionable()) {
            nextIdx = (currentIdx + 1) % slide_lists.length;
            direction = 1;

            preparationActive();
            activeSlide();
        }
    }, DELAYTIME);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlide);
});