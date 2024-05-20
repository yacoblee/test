'use strict'
// 함수안에 함수를 호출하는데 표현식만 가능하다

// 선언식은 직접호출이 불가

/* 
    < setTimeout >

- 지정된 시간(timeout) 이후에 handler 에 전달된 함수나 전달된 코드를 실행.

형식   :    function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number

            - handler : 실행할 함수의 참조나 코드.
            - timeout : handler 가 실행되기까지의 delay 시간을 1000분의 1초 단위로 지정.
            - arguments : handler 가 함수객체인 경우 handler 함수의 매개변수에 전달할 추가 인수.
                          즉, 함수객체의 주소를 전달할뿐 직접 호출을 하는 것이 아닌 내부에서 콜백
                          호출이 이루어지므로 실인수를 전달할 방법이 없어 이와 같은 형식으로 설계.
                          따라서 arguments 인수에 값을 전달하면 함수객체의 매개변수에서 이를 받아
                          처리 가능.
            - number : 개별 타이머를 식별할 정수 형태의 고유 ID 값을 반환.
*/
setTimeout((a) => document.write('setTimeout 함수' + a + '<br>'), 4000, 'aaa');

/* 
    < 반복문 적용시 유의사항 >

- 아래 코드는 1초 마다 i 값이 출력되는 것을 의도한 코드이나, 실제 실행 시 1초 마다 i 값이 출력되는
  것이 아닌 1초 뒤에 한꺼번에 출력되는 것을 확인 가능.
  이는 딜레이에 대한 실행 주체에 대한 오해에 기인한 것으로 딜레이 시간 경과후 setTimeout 함수가
  호출되는 것이 아닌 handler 함수가 실행되는 것으로써, 루프 내에서 순식간에 setTimeout 함수가 이미
  모두 호출된 상태에서 동일한 딜레이 시간 경과후 setTimeout 함수에 지정된 handler 함수가 실행됨에
  따라 거의 동시에 출력되는 결과.
*/
for (let i = 0; i < 3; i++) {
    setTimeout(
        () => document.write(`${i + "<br>"}`),
        1000
    );
}

/* 
  handler 함수에 대한 개별 독립적인 딜레이 시간을 지정함으로써
  1초 마다 i 값이 출력되는 것을 확인 가능.
*/
for (let i = 5; i < 8; i++) {
    setTimeout(
        () => document.write(`${i + "<br>"}`),
        1000 * i
    );
}

let timeout1, timeout2, timeout3;

for (let i = 10; i < 13; i++) {
    switch (i) {
        case 10:
            timeout1 = setTimeout(
                () => document.write(`${i + "<br>"}`), 1000 * i
            );
            break;

        case 11:
            timeout2 = setTimeout(
                () => document.write(`${i + "<br>"}`), 1000 * i
            );

            /* 
                < clearTimeout >
      
            - setTimeout 함수에 의해 반환된 고유 ID 값을 clearTimeout 함수의 인수로 지정함으로써
              setTimeout 함수에 지정된 handler 이벤트 자체를 취소.
            */

            // clearTimeout(timeout2);
            break;

        case 12:
            timeout3 = setTimeout(
                () => document.write(`${i + "<br>"}`), 1000 * i
            );
            break;
    }
}


'use strict'

/* 
    < setInterval >

- 지정된 시간(timeout)을 간격으로 반복적으로 handler 에 전달된 함수나 전달된 코드를 실행.
  지정된 시간을 기준으로 반복적으로 handler 가 실행되는 것 외에는 setTimeout 함수와 사용
  방법과 형식이 동일.

*/
let id = setInterval(() => {
    document.write(`123<br>`);
}, 2000);

/* 
  < clearInterval >

- setInterval 함수에 의해 반환된 고유 ID 값을 clearInterval 함수의 인수로 지정함으로써
  setInterval 함수에 지정된 handler 이벤트 자체를 취소.
*/
setTimeout(() => clearInterval(id), 10000);





/* 
    < 클로저(Closure) >

- 도달 가능한 외부변수에 접근이 가능한 함수.
  일반적으로 중첩함수에서 내부 함수가 외부함수의 변수를 참조 가능한 상태를 의미.
  js 에서는 모든 함수가 클로저로 활용 가능.
*/

let outer1 = 5;         // 전역변수는 전역 렉시컬환경객체(Global Lexcial Environment)의 프로퍼티.

function closure1() {   // 함수를 기준으로 함수 내의 매개변수나 지역변수를 저장하는 내부 렉시컬환경객체와
    //                  // 함수 외부의 변수를 참조하는 경우의 외부 렉시컬환경객체로 구분.
    //                  // 동작 방식은 먼저 내부 렉시컬환경객체에서 변수를 검색후 존재하지 않으면 외부
    //                  // 렉시컬환경객체에서 검색하는 구조.
    //                  // 따라서 지역변수와 전역변수명이 동일한 경우 지역변수가 참조되는 상황은 이러한
    //                  // 연유.
    console.log(outer1);
}

closure1();
console.log('================================');

// =====================================================================================
// 중첩함수 내에서의 외부변수 참조

function outerFunc1() {
    let outer2 = 10;

    function innerFunc() {      // 내부 함수인 innerFunc 에 대한 내부 렉시컬환경객체와 외부 함수인
        //                      // outerFunc1 에 대한 외부 렉시컬환경객체로 구분.
        console.log(outer2);
    }

    innerFunc();
}

outerFunc1();
console.log('================================');

// =====================================================================================

/* 
    함수 내의 지역변수는 호출이 완료되면 소멸되지만, 도달 가능한 상태일 때까지는 그 값을 유지.
    즉, 함수의 호출이 끝나면 해당 함수에 대한 렉시컬환경객체가 소멸되지만, 내부함수가 외부함수의
    렉시컬환경객체(외부변수)를 참조하는 상태에서 반환된 내부함수의 참조를 유지하고 있는 동안은
    해당 외부 렉시컬환경객체는 메모리에서 제거되지 않고 유지되는 특성.
*/
function outerFunc2() {
    let outer3 = 15;        // outerFunc2 의 지역변수(outer3)는 호출이 완료되면 그 기억공간이
    //                      // 소멸되지만 내부함수에서 그 값을 참조하여 익명함수로 반환함으로써
    //                      // 그 참조를 통해 외부변수(outer3)에 도달 가능함으로서 outerFunc2
    //                      // 함수를 호출하여 반환받는 시점까지도 외부변수(outer3) 기억공간은
    //                      // 유지.

    return function () {
        console.log(outer3);
    };
}

outerFunc2()();
console.log('================================');

// =====================================================================================

function outerFunc3() {
    let outer4 = 20;

    return function () {
        return ++outer4;
    };
}

let innerFunc1 = outerFunc3();

console.log(innerFunc1());
console.log(innerFunc1());
console.log(innerFunc1());   // outerFunc3 함수의 호출이 완료되었지만, 내부함수를 통해
//                           // 외부지역변수(outer4)에 도달 가능한 상태가 유지되므로
//                           // 외부지여변수 outer4 는 소멸되지 않고 메모리 유지.
console.log('================================');

innerFunc1 = null;           // innerFunc1 이 내부함수의 참조를 잃어버림으로써 기존의
//                           // 렉시컬환경 객체가 소멸됨에따라 지역변수 또한 소멸.

innerFunc1 = outerFunc3();   // 새로운 렉시컬환경 객체 생성

console.log(innerFunc1());
console.log('================================');

// =====================================================================================

function outerFunc4() {
    let outer5 = 25;

    return function () {
        return ++outer5;
    };
}

/* 
    두 개의 독립적 렉시컬 환경 객체 생성.
*/
let innerFunc2 = outerFunc4(),
    innerFunc3 = outerFunc4();

console.log(innerFunc2());
console.log(innerFunc3());  // 내부함수가 각각 개별적인 지역변수에 접근되는 것을 확인 가능.
console.log('================================');

// =====================================================================================
// 외부함수의 매개변수도 클로저의 외부변수로 인정

let outer6 = 25;

function outerFunc5(data) {

    return function () {
        return ++data;
    };
}

let innerFunc4 = outerFunc5(outer6);

console.log(innerFunc4());
console.log(innerFunc4());


/* 
    < 클로저의 장점 >

    전역변수를 사용하지 않고 필요한 시점까지 지역변수를 유지시켜 활용하되
    더 이상 지역변수가 필요하지 않으면 할당을 해제(null 할당)함으로써
    점유 메모리에 대한 유연성 확보.
*/

function sum() {
    let tot = 0;

    return n => {
        if (isNaN(n)) return tot;   // 실인수가 전달되지 않거나(n:undifined) 문자열과 같은
        //                          // 잘못된 데이터를 전달하여 호출하는 경우 바로 전누적합을
        //                          // 반환하도록 방어코드 설정.
        tot += n;

        return tot;
    };
}

let inputSum = sum();

for (let i = 1; i <= 100; i++) {
    inputSum(i);
}

console.log(inputSum());
console.log(inputSum('a'));
console.log(inputSum(5));

inputSum = null;            // 기존 렉시컬환경 객체 삭제.

console.log('===================================')

// ======================================================================

inputSum = sum();           // 새로운 렉시컬환경 객체 생성.

for (let i = 1; i <= 10; i++) {
    inputSum(i);
}

console.log(inputSum());

inputSum = null;








'use strict';

/* 
   < Spread Syntax > - 전개구문

- 함수 호출 시 실인수로 전달된 값들을 복사하여 배열 형태로 전달.
*/
function spreadAr(...a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log('===============================');
}

spreadAr(1, 2, 3);
spreadAr(1, 2, 3, 4, 5);
spreadAr('가', 11, '나', 12, '다', 13);

console.log('===============================');
console.log('===============================');


let ar1 = [1, 2, 3];
let ar2 = [1, 2, 3];

let ar3 = [ar1, ar2];      // 배열의 참조 전달을 통한 2차원 배열 생성.

console.log(ar3);

console.log('===============================');
console.log('===============================');


let a1 = [1, 2, 3];
let a2 = [1, 2, 3];

/* 
   < 전개구문을 활용한 배열의 결합 >

- 전개구문을 적용시킴으로써 배열의 참조가 아닌 값을 복사하고 개별 배열을
  생성하는 것이 아닌 하나의 통합된 배열을 구성.
*/
let a3 = [...a1, ...a2];

console.log(a3);

a2[2] = 4;    // 전개구문은 배열요소의 값 자체를 복사하는 것이지 값의
//             // 참조 자체를 복사하는 것은 아님에 주의.

console.log(a3);
console.log(a2);

console.log('===============================');
console.log('===============================');

/* 
   < 구조분해 할당(Destructuring Assignment) >

- 배열이나 객체를 분해하여 개별 요소의 참조를 재할당 가능.   
*/
let [element1, element2] = ['요소1', '요소2'];

console.log(element1);
console.log(element2);

console.log('===============================');


/* 
   < 전개구문을 활용한 구조분해 할당 >
*/

let [e1, e2, e3, ...restElement] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(e1);
console.log(e2);
console.log(e3);
console.log(restElement);