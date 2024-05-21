'use strict'

let li = document.getElementsByTagName('li');

/* 
    < window 와 document >

- document 는 window 객체에 소속된 프로퍼티로써 window 는 브라우저를
  document 는 브라우저에 소속된 문서를 의미.

==========================================================================

    < load >

- 해당 객체의 자원과 그에 의존적인 모든 자원이 로드되었을 때의 이벤트.
  이벤트의 대상이 document 가 아닌 window 임에 주의.
*/
window.addEventListener('load', () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'yellow';
    }
});

// =======================================================================

let scrollBox = document.querySelector('.scrollBox');

/* 
    < scroll >

- 수평 또는 수직으로 스크롤되었을 때의 이벤트.
  이벤트의 대상은 document 와 window 모두 가능.

==========================================================================

    < scrollX, z >

- window 객체에 소속된 프로퍼티로써 각각 수평, 수직에 대한 스크롤량을
  number 형식으로 반환.
  반환되는 number 는 실수값으로 반환될 수 있음에 주의.

※ scrollX, scrollY 프로퍼티 접근 시 window 객체 생략 가능.
   따라서 선언없이 지역적 변수로 사용 시 전역값이 조사될 수 있음에 주의.
*/
let stop;

document.addEventListener('scroll', () => {

    /* 
        scrollX, scrollY 에 대한 반환값이 실수인 경우를 대비하여
        parseInst 나 trunc 함수를 이용 실수부 절삭.
    */
    let posX = parseInt(window.scrollX),
        posY = parseInt(window.scrollY);
    // let posX = Math.trunc(window.scrollX),
    //     posY = Math.trunc(window.scrollY);

    scrollBox.style.display = 'block';
    scrollBox.innerHTML = `스크롤량<br>( x = ${posX}, y = ${posY})`;

    /* 
        수평 또는 수직 스크롤량이 500px 을 넘어가는 경우 문서의
        최초 위치로 스크롤하기 위한 설정.
    */
    if (posX > 500 || posY > 500) {

        /* 
            < scroll, scrollTo >

        - window 객체에 소속된 함수로 문서의 지정된 좌표로 스크롤.
          scroll, scrollTo 은 사용 방법과 동작이 사실상 동일.
        */
        window.scroll(0, 0);
        // window.scrollTo(0, 0);
    }

    /* 
        상기와 같이 문서가 최초 위치로 과정없이 바로 이동하는 것을 방지
        하기 위해 문서의 백스크롤 과정을 0.005 초 마다 -5px 씩 이동하도록
        setInterval 함수를 활용하여 구현.
    */
    if (posX > 500) {
        let stopTimeout = setInterval(() => {

            /* 
                < scrollBy >

            - scroll, scrollTo 는 지정된 절대적 좌표로 스크롤되는 반면,
              scrollBy 는 x, y 에 대한 스크롤량을 지정함으로써 현재 위치를
              기준으로한 상대적 스크롤 이동 발생.
            */
            window.scrollBy(-5, 0);

            /* 
                scrollBy 에 의해 스크롤량은 감소하지만 이동한 스크롤 위치는
                측정이 되지않아 clearInterval 을 실행하기 위한 하기의 조건식
                평가가 되지 않으므로 scrollBy 로 실행후 posY 재조사 필요.
            */
            posX = parseInt(window.scrollX);

            if (posX <= 0) {                // posY 값이 직접 감소 연산을 하는 것이 아닌
                clearInterval(stopTimeout); // window.scrollY 조사로 인한 재초기화가 되므로
            }                               // 0 보다 작은 음수가 발생될 수 없으므로 미만(<)
        }, 5);
    }

    if (posY > 500) {
        let stopTimeout = setInterval(() => {

            /* 
                < scrollBy >

            - scroll, scrollTo 는 지정된 절대적 좌표로 스크롤되는 반면,
              scrollBy 는 x, y 에 대한 스크롤량을 지정함으로써 현재 위치를
              기준으로한 상대적 스크롤 이동 발생.
            */
            window.scrollBy(0, -5);

            /* 
                scrollBy 에 의해 스크롤량은 감소하지만 이동한 스크롤 위치는
                측정이 되지않아 clearInterval 을 실행하기 위한 하기의 조건식
                평가가 되지 않으므로 scrollBy 로 실행후 posY 재조사 필요.
            */
            posY = parseInt(window.scrollY);

            if (posY <= 0) {                // posY 값이 직접 감소 연산을 하는 것이 아닌
                clearInterval(stopTimeout); // window.scrollY 조사로 인한 재초기화가 되므로
            }                               // 0 보다 작은 음수가 발생될 수 없으므로 미만(<)
        }, 5);                              // 으로 비교 불가함에 주의.
    }

    /* 
        상기 코드 통합.
    */
    // if (posX > 500) {
    //     backScroll(() => window.scroll(posX -= 5, posY));
    // }

    // if (posY > 500) {
    //     backScroll(() => window.scroll(posX, posY -= 5));
    // }

    // function backScroll(backSc) {
    //     let stopTimeout = setInterval(() => {
    //         backSc();

    //         if (posX < 0 || posY < 0) {     // posX 와 posY 가 직접 감소 연산을 하는 상태에서
    //             clearInterval(stopTimeout); // posX 와 posY 를 동시에 비교하므로 이하(<=)로 비교시
    //         }                               // setInterval 함수의 두 번째 루틴시 감소 연산을 하는
    //     }, 5);                              // 좌표가 아닌, 다른쪽의 좌표는 그대로 0 을 유지하므로
    // }                                       // 참으로 평가되어 바로 clearInterval 함수가 호출되어
    //                                      // setInterval 함수가 바로 종료됨에 주의.

    /*
        scrollBox 가 5초 뒤에 화면에 보이지 않도록 설정.
                아래와같이 clearTimeout 을 지정하지 않으면 새로운 스크롤 이벤트가
        발생해도 그 이전 시점을 기준으로 setTimeout 설정이 적용되어 scrollBox
                가 바로 닫히는 현상 발생.
    */
    clearTimeout(stop);

    stop = setTimeout(() => {
        scrollBox.style.display = 'none';
    }, 5000);
});
