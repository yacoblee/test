// /*
//     < 함수(Function) 선언 >

// - 자바스크립트에서 함수는 객체에 종속적인 메서드와 달리 독립적인 기능을 담당하는 내장 객체(object).
//   일급함수(First-class function) 기능이 지원되어 함수를 하나의 값으로 인정함으로써  변수에 저장 및
//   인수의 전달, 반환(return)등이 가능. 함수 표현식과 마찬가지로 함수 선언 형식인 경우에도 함수명을
//   참조로 전달 가능. 함수의 선언은 함수 호출 호이스팅 현상으로 인해 함수 선언 위치에 관계없이 호출
//   가능하며, 함수 선언부 내에서의 외부 전역변수에 대한 참조는 전역변수의 선언 위치에 관계없이 함수
//   내에서 참조 가능. 단, 전역변수를 참조한 함수에 대한 호출 시점이전에 반드시 전역변수가 먼저 선언
//   되어 있어야 함에 주의.

// 형식    :   function 함수명(형식인수) {             
//                 실행블럭;
//                 [return 리턴값] or [return]
//             }

// 1) 형식인수 : 자바스크립트는 타입을 동적으로 결정하므로 함수의 형식인수에는 var, let, const등 구문 사용 불가.
// 2) 실인수 : 실인수의 갯수는 형식인수 갯수보다 더 적거나 더 많이 명시를 해도 무방.   단, 실인수가 형식
//             인수 갯수보다  적은 경우에는  실인수값이 형식인수에 순서대로 할당이 되데  남는 형식인수는
//             초기화되지 않으므로  undefined값 할당.     반면,   실인수가 형식인수 갯수보다 많은 경우에
//             전자와 동일하게 실인수값이 형식인수에 순서대로 할당이 되데 남는 실인수 값들은 참조를 잃어
//             버려 직접 참조는 불가하지만, aguments객체를 통한 간접 참조 가능.
// 3) 리턴값에 대한 리턴 타입 지정이 불필요하며 함수에 대한 명시적 return을 하지않는 경우 자동적으로 undefined값
//    반환.

// */

// 'use strict';

// function test1(a, b) {
//     console.log(b);
//     console.log(a + b);
//     console.log();
// }
// test1(5, 3);
// test1(5);           // 두 번째 인수값은 초기화되지 않아 undefined값이 할당되고 전달된 첫 번째 인수와의 
// //                  // + 연산으로 인해 NaN값 반환.

// test1(7, 5, 4);     // 세 번째 이후의 인수값은 참조를 잃어버려 직접 참조 불가.


// function test2(n1, n2) {
//     return n1 + n2;             // 명시적 리턴.
// }
// console.log(test2(10, 15));
// console.log('-------------------------');


// function test3() {
//     // return undefined;    // 명시적 리턴을 하지 않아도 자동으로 undefined값이 반환되는 것을 확인 가능.
// }                         // 즉, 당행과 같이 'return undefined;' 코드가 자동으로 삽입.
// console.log(test3());
// console.log('-------------------------');


// function test4() {
//     console.log('passed func');
// }
// function test5(func) {
//     func();
// }
// test5(test4);       // 함수명을 직접 참조로 전달 가능하며 이를 통해 다른 함수 내에서도 전달한
// //                  // 함수의 참조를 통해 직접 호출 가능. ( 콜백함수(Callback function) )
// console.log('-------------------------');


// function test6() {
//     console.log(n)      // 함수선언후 전역변수 n을 선언하였지만 함수 내에서는 전역 변수의 선언 위치에
// }                     // 관계 없이 어디에서든 참조 가능. 단, 전역변수를 참조한 함수에 대한 호출 시점
// //                    // 이전에 반드시 전역변수가 먼저 선언되어 있어야 함에 주의.

// // test6();

// let n = 25; // 전역변수로서는 호이스팅 처리로 물리적 위치로 함수 내부에서도 호출이 가능함.

// test6();
// console.log('-------------------------');


// function div(a, b) {
//     if (isNaN(a + b)) {                 // isNaN함수는 숫자형태의 문자열도 숫자로 인정.
//         console.log("입력값이 숫자가 아님~~~");
//     } else {
//         console.log(a + " / " + b + " = " + (a / b));
//     }
// }
// div("9", "4");      // 자바스크립트에서는 문자열 구분자("")로 묶어도 자료의 형태가 숫자 형태이면
// div("a", 4);        // 숫자로 인식 가능.
// console.log('-------------------------');


// /*
//     agruments : 전달된 인수값들을 배열 형태로 내부에 저장하는 객체로써 실제 배열은 아니므로 배열에 적용되는
//                 메서드 속성의 사용은 불가.   agruments객체의  length속성을 이용하여 객체 내부 배열의 크기를
//                 조사 가능하며 배열 연산자([])를 통해 저장되어 있는 인수 값을 간접 참조 가능.
// */
// function accessArguments(n1, n2) {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i] + arguments[i + 1]);
//     }
//     console.log();
// }
// accessArguments(1);             // arguments객체는 형식인수의 갯수에 관계없이 실제 전달된 실인수 만큼만
// accessArguments(1, 2);          // 객체 배열에 저장하므로 형식인수와 실인수의 대응 관계와 관계없이 전달된
// accessArguments(1, 2, 3);       // 실인수만 정확히 조사 가능.
// accessArguments(1, 2, 3, 4);



// /*
//     < Defalut parameters >

// - 실인수가 형식인수 갯수보다 적은 경우, 남는 형식인수에 대한 undefined값 초기화를
//   방지하기 위한 디폴트 파라미터 지정이 가능하여 실인수가 형식인수에 모두 대응되면
//   디폴트 파라미터는 무시되지만, 실인수가 형식인수에 모두 대응되지 못하고 남는 형식
//   인수의 경우에만 지정된 디폴트 값이 적용되어 초기화.
//   또한 다른 언어와 같이 디폴트 파라미터의 지정을 우측부터 지정해야하는 문법적인
//   제한은 없어 임의로 순서없이 디폴트 파라미터의 지정이 가능하지만 대응되지 않는
//   매개변수에 대해서는 undefined 처리.

// 형식    :   function 함수명(para1, para2 = default_value) {
//                 실행블럭;
//             }

// -------------------------------------------------------------------------------------

//     < Rest parameters >	

// - 자바 메서드의 가변인수 문법 형태와 동일하게 전달한 실인수들을 내부적으로 배열 형태로
//   저장한후 가변 형식 인수의 참조를 통해 요소에 접근. 실인수의 타입이 달라도 무방.

// 형식    :   function 함수명(...args) {
//                 실행블럭;
//             }

// -------------------------------------------------------------------------------------

//     < Local inner function >

// - js에서는 함수의 객체적 특성에 따라 함수 내에 지역함수의 선언이 가능하며 일반 지역
//   변수의 특성과 동일하게 주함수 내로 통용 범위가 제한.   또한, 호출 호이스팅 범위도
//   주함수 내로 제한.

// */

// 'use strict';

// function test1(n1, n2, n3 = 5) {
//     return n1 + n2 + n3;
// }
// console.log(test1(1, 2, 3));
// console.log(test1(1, 2));   // 실인수가 형식인수에 모두 대응되면 디폴트 파라미터의 초기식은 무시되지만, 실인수가
// console.log();              // 형식인수에 모두 대응되지 못하여 남는 형식인수의 경우에만 디폴트 초기값 적용.


// function test2(str1, str2, str3 = str1 + str2) {    // 디포트 초기식의 디폴트 값을 앞서 지정된 파라미터 값을
//     return str1 + str2 + str3;                        // 이용해 지정 가능.
// }
// console.log(test2('Welcome ', 'to house ', 'PSY'));
// console.log(test2('Welcome ', 'to house '));
// console.log();


// function concateString(...str) {            // Rest parameters : 전달한 실인수들을 배열 형태로 받아 참조를 반환.
//     let strCombine = '';

//     for (let i = 0; i < str.length; i++) {
//         strCombine += str[i];
//     }

//     return strCombine;
// }
// console.log(concateString('I ', 'am ', 'a boy!!'));
// console.log();


// function concateData(...data) {             // 실인수의 타입이 달라도 무방.
//     let dataCombine = '';

//     for (let i = 0; i < data.length; i++) {
//         dataCombine += data[i];
//     }

//     return dataCombine;
// }
// console.log(concateData('age : ', 25));
// console.log();


// function printName(name) {

//     function print() {            // 로컬 이너 함수 : 함수(외부 함수) 내부에 종속적인 지역 함수의 정의가 가능하며
//         console.log(str + name);    // 지역변수의 특성이 그대로 적용되어 외부에서는 접근 불가.     따라서 로컬 이너
//     }                             // 함수의 호출 호이스팅 범위는 주 함수 내로 제한.
//     let str = '이름 : ';

//     print();
// }
// printName('박성연');
// // print('박성연');



// /* 
//     js 에서는 모든 원시값은 기본형 변수의 구조를 가지고 그외 기본형이 아닌
//     자료형은 모두 참조형 변수 구조.
// */
// let str = 'string';
// let a = [1, 2];

// function callByValue(str) {
//     str = 'new string';
// }

// function callByReference(a) {
//     a[0] = 5;
// }

// callByValue(str);
// console.log(str);


// callByReference(a);
// console.log(a);





// /*
//     < 함수 표현식 >

// - 자바스크립트에서 함수는 object에 속하므로 변수에 할당 및 메서의 인수로 전달 또는 리턴값으로 반환등이 가능.
//   함수 선언과 함수 표현식의 가장 큰 차이점은 함수 선언은 호이스팅(Hoisting)이 되지만, 함수 표현식은 적용되지
//   않음.


//   함수 표현식 형식    :   let 참조변수명 = function [함수명](형식인수) {         
//                               실행블럭;
//                               [return 리턴값] or [return]
//                           };

// - 함수명 지정이 가능하지만 외부에서 함수명을 통한 직접 호출은 불가. 이는 참조변수를 통해 함수명 식별이
//   가능한 특성을 활용하여 디버깅 용도나 재귀 호출 목적으로 활용.

// ※ 함수 선언와 달리 중괄호 실행블럭 끝에 세미콜론을 표기. 함수 선언이나 함수 표현식 모두 실제 세미콜론
//    지정 여부와 관계없이 실행되지만 코드 가독성을 위해 구분하는 것을 지향. 

// */

// 'use strict';

// const namingFunc = function identify() {      // Named function.  
//     console.log('Naming func');
// };

// namingFunc();
// // console.log(identify());     // 함수 표현식으로 정의되어 있는 함수명을 통한 직접 호출은 불가하지만,
// console.log(namingFunc);        // 참조 변수를 통한 함수명(식별자) 확인은 가능.
// console.log();


// const sum = function (a, b, c) {              // Anonymous function.
//     return a + b + c;
// };
// console.log(sum(1, 2, 3));
// console.log();


// const varSum = function (obj) {
//     return obj.n1 + obj.n2 + obj.n3 + obj.n4 + obj.n5;
// };
// console.log(varSum({ n1: 1, n2: 2, n3: 3, n4: 4, n5: 5 }));    // 실인수부에서 직접 리터럴 객체를 생성하여 형식 인수로
// console.log();                                                 // 참조. 함수 선언에서도 동일한 형태로 적용 가능.


// const output = function () {
//     console.log('출력테스트');
// };
// const call_output = function (test) {        // 함수의 형식 인수에는 객체나 배열 뿐만 아니라, 
//     test();                                    // 함수의 참조도 전달 가능.
// };
// call_output(output);



// /*
//     < 호이스팅(Hoisting) > 

// - 함수의 정의를 해당 범위의 선두로 끌어올려 처리하는 것으로 전역 개념으로 설정되는 것을 의미.
//   단, 함수 선언은 호이스팅 처리되지만 함수 표현식은 호이스팅 처리되지 않음에 주의.
//   var형식의 변수도 함수 선언 형태의 함수명과 동일한 명칭을 가지는 경우 함수 선언보다 우선권을
//   가져 호이스팅 처리가 가능하지만, 이는 명칭 설계가 적합하지 않은 것으로 권장되지 않으며 특수한
//   형태의 가변적 설계시에만 변칙적으로 활용.

// */

// 'use strict';

// console.log(func1('대한', '민국'));
// // console.log(func2(1, 10));           // 함수 표현식은 호이스팅되지 않아 호출 불가.

// console.log(func2);                     // func2에 대한 var 선언으로 변수 자체는 호이스팅되지만
// //                                      // 아래 정의한 함수 표현식은 호이스팅되지 않아 undefined
// //                                      // 반환.

// function func1(string1, string2) {      // 함수 선언은 함수 호출 호이스팅으로 인한 함수 선언
//     return string1 + string2;             // 위치에 관계없이 어디서든 호출 가능.
// }
// var func2 = function (st, ed) {         // 함수 표현식은 호이스팅되지 않지만 var구문 변수의
//     let tot = 0;                          // 선언은 호이스팅되는 것을 확인 가능.

//     for (let i = st; i <= ed; i++) {
//         tot += i;
//     }

//     return tot;
// };

// console.log(func2);
// console.log(func2(1, 100));
// console.log('--------------------');



// // refVar();                // 호이스팅은 함수 호출에 대한 호이스팅일뿐 함수 내에서의 let구문
// let value = '값';           // 외부 전역변수에 대한 참조가 호이스팅되지는 않음에 따라 컴파일
// //                          // 에러.   var구문으로 변수을 선언한 경우에도 변수 자체의 선언은
// refVar();                   // 호이스팅되어 컴파일 에러가 발생치는 않지만, 변수에 대한 할당
// //                          // 까지는 호이스팅되지 않아 undefined 반환.
// function refVar() {
//     console.log(value);
// }


// /*
//     < 콜백함수(Callback function) >

// - 정의된 함수의 참조를 통해 나중에(back) 호출(call)하는 것을 의미.
// */

// 'use strict';

// function agree() {
//     alert('개인정보 활용에 동의하셨습니다.');
// }
// function disagree() {
//     alert('개인정보 활용에 동의하지 않았습니다. 다시 확인부탁드립니다.');
// }
// function inputCheck1() {
//     if (confirm('개인정보 활용에 동의하십니까?')) {
//         agree();
//     } else {
//         disagree();
//     }
// }
// inputCheck1();


// function inputCheck2(ok, no) {
//     if (confirm('개인정보 활용에 동의하십니까?')) {
//         ok();
//     } else {
//         no();
//     }
// }
// inputCheck2(agree, disagree);   // 함수 선언에 대한 참조 전달을 통한 콜백 호출.

// inputCheck2(        // 함수 표현식에 대한 참조 전달을 통한 콜백 호출.

//     function () { alert('개인정보 활용에 동의하셨습니다.'); },
//     function () { alert('개인정보 활용에 동의하지 않았습니다. 다시 확인부탁드립니다.'); }
// );





// /*
//     < 즉시 실행 함수 표현(Immediately Invoked Function Expression) >                                                    

// - 정의된 익명 함수 자기 자신을 호출하여 실행하는 형식으로써 구조형식은 익명함수를
//   그룹핑하는 소괄호() 부분과 실행 호출을 위한 소괄호()로 구성.
//   참조를 전달할 필요없이 일회성 실행을 하는 경우 유용.

// 형식    :   ( function( ) {
//                 실행블럭;
//             } ) ( );

// */

// 'use strict';

// (function () {
//   console.log('IIFE 테스트');
// })();
// console.log();


// (() => {                                        // 화살표 함수를 IIFE에 적용 가능.
//   console.log('화살표 함수를 IIFE로 테스트')
// })();
// console.log();


// let fruitName = (function (fruit) {     // IIFE에 대한 참조를 받는 것이 아닌 호출 결과를
//   switch (fruit) {                    // 대입 할당함에 유의.
//     case 'apple':
//       return '사과';
//     case 'banana':
//       return '바나나';
//     case 'melon':
//       return '메론';
//     case 'strawberry':
//       return '딸기';
//     default:
//       return '해당 과일이 없습니다.'
//   }
// })('strawberry');
// console.log(fruitName);
// console.log();


// fruitName = (fruit => {
//   switch (fruit) {
//     case 'apple':
//       return '사과';
//     case 'banana':
//       return '바나나';
//     case 'melon':
//       return '메론';
//     case 'strawberry':
//       return '딸기';
//     default:
//       return '해당 과일이 없습니다.'
//   }
// })('banana');
// console.log(fruitName);




// /*
//     < 화살표 함수(Arrow function) >

// - 함수 표현식에 대한 축약 형태로 자바의 람다식과 표현식 규칙이 동일하되 자바의 '->'
//   가 아닌 '=>'를 사용하는 차이점.
//   또한, 자바의 경우 람다식을 참조하기 위한 함수형 인터페이스가 필요한 반면 js에서는
//   동적 타입 결정으로 인해  별도의 함수형 인터페이스에 정의된 추상 메서드 리턴타입과
//   형식인수 정의등이 필요치 않아 표현식에 대한 let, const, vat등의 구문 변수로 바로
//   참조 가능.

// 형식    :   참조변수 = (인수1,인수2,...) => { 실행 블럭 };

// */

// /** 람다식 규칙 
//  * 
//  * 
//  * 
//  */
// 'use strict';

// let add = function (n1, n2) {
//     return n1 + n2;
// };
// console.log(add(6, 9));

// add = (n1, n2) => n1 + n2;      // 형식인수가 없거나 2개 이상인 경우 소괄호() 생략 불가. 실행문이
// console.log(add(7, 5));         // 하나인 경우 중괄호{} 생략 가능 및 묵시적 자동 return.
// console.log();


// let outputTest = function () {
//     console.log('출력 테스트');
// };
// outputTest();

// outputTest = () => console.log('화살표 테스트');    // 형식인수가 없는 경우 소괄호() 생략 불가.
// outputTest();
// console.log();


// let repeatChar = function (char) {
//     for (let i = 0; i < 5; i++) {
//         console.log(char);
//     }
// };
// repeatChar('string');

// repeatChar = char => {            // 형식인수가 하나인 경우만 소괄호 생략 가능.
//     for (let i = 0; i < 5; i++) { // 실행문이 2개 이상인 경우 중괄호{} 생략 불가 및 반환값
//         console.log(char);        // 존재시 명시적 return 반드시 명시.
//     }                             // for나 if등의 제어문은 실행문이 하나인 경우 한 줄로 표현이
// };                                // 가능하지만, 람다식 적용 시에는 람다식의 구문 블럭{} 생략 불가.
// repeatChar('문자열');
// console.log();


// function printOdd() {
//     console.log('홀수');
// }
// function printEven() {
//     console.log('짝수');
// }
// let identifyOddEven = function (num, odd, even) {
//     (num % 2 == 1) ? odd() : even();
// };
// identifyOddEven(7, printOdd, printEven);
// identifyOddEven(18, printOdd, printEven);
// console.log();

// /*
//   < 함수 표현식(또는 화살표 함수)의 옳지 않은 사용 예 >

// - 자바에서 익명 이너 객체나 람다식이 일회성 동작에 대한 단축 문법인것 처럼 js에서도
//   일회성으로 사용되는 것이 아닌, 이처럼 반복적으로 동일한 호출을 해야하는 경우 중복
//   호출 정의가 되므로 상기 예시(53 ~ 63행)와 같이 74행의 identifyOddEven함수 표현식
//   내에서 외부에 미리 정의된 함수를 직접 호출하는 것이 효율적.
// */
// identifyOddEven = (num, odd, even) => (num % 2 == 1) ? odd() : even();

// identifyOddEven(
//     7,
//     () => console.log('홀수'),
//     () => console.log('짝수')
// );
// identifyOddEven(
//     18,
//     () => console.log('홀수'),
//     () => console.log('짝수')
// );


let repeatChar = function (char) {
    for (let i = 0; i < 5; i++) {
        console.log(char);
    }
};
repeatChar('string');