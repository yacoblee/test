
// 'use strict';

// // for (var i = 47; i < 93;) {
// //     console.log(i);
// //     i++;
// // }

// // for (let i = 242; ;) {
// //     i--;
// //     if (i <= 168) break;
// //     console.log(i);
// // }

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];

// // }


// // 작은수: 1 큰수:10 띄워주기
// // let total = 0, min, max;
// // let n1, n2;
// // min = +prompt('작은수: ');
// // max = +prompt('큰수: ');

// // for (let i = min; i <= max; i++) {
// //     total = total + i;
// // }


// // alert(`${min}부터 ${max}까지 누적합: ${total}`);

// //중첩루프 특정: 외곽구조 변수 값이 고정되어 있는 상태에서 내곽구조 값이 변하는 특성.

// // for (let i = 1, space = '', result; i <= 9; i++) {               // 외곽구조
// //     if (i == 7) continue;

// //     for (let j = 1; j <= 9; j++) {               // 내곽구조
// //         result = i * j;

// //         for (let r = 0; r < 2 - (result + '').length; r++) {
// //             space = space + '&nbsp;';
// //         }
// //         document.write(`${i} x ${j} = ${space + result} `);
// //         space = '';
// //     }
// //     document.write('<br/>');
// // }


// /** 글자수 유지하면서 곱셈하기*/
// let row, col, maxunit;

// row = +prompt('행크기:');
// // col = +prompt('열크기:');

// // maxunit = row * col + '';

// // for (let i = 1, v = 1; i <= row; i++) {

// //     for (let j = 1, result; j <= col; j++, v++) {
// //         result = v + '';

// //         for (let r = 0, ed = maxunit.length - result.length; r < ed; r++) {
// //             result = '&nbsp;' + result;
// //         }
// //         document.write(result + ' ');
// //     }
// //     document.write('<br/>');

// // }

// /* 행크기 절반에 오는 배치 구하기 */

// let m = (row + 1) / 2; //짝수
// maxunit = row * m + '';

// for (let i = 1, v = 1; i <= row; i++) {
//     for (let j = 1, result; j <= i; j++, v++) {
//         result = v + '';

//         for (let r = 0, ed = maxunit.length - result.length; r < ed; r++) {
//             result = '&nbsp' + result;
//         }
//         document.write(result + ' ');
//     }
//     document.write('<br/>');
// }

// /** 역배열*/
// m = (row + 1) / 2;
// maxunit = row * m + '';
// for (let i = 1, v = 1; i <= row; i++) {
//     for (let j = 1, result; j <= row.length + 1 - i; j++, v++) {
//         result = v + '';

//         for (let r = 0, ed = maxunit.length - result.length; r < ed; r++) {
//             result = '&nbsp' + result;
//         }
//         document.write(result + ' ');
//     }
//     document.write('<br/>');

// }


'use strict';

/* 
    < JSON(JavaScript Object Notation) >

- 값이나 객체를 나타내주는 표준 범용 포맷으로써, 자바스크립트에서
  사용할 목적으로 만들어진 포맷이지만, 특정 라이브러리를 사용하면
  자바스크립트가 아닌 언어에서도 JSON 을 조작 가능.
  일반적으로 JSON 은 클라이언트 측 언어가 자바스크립트일 때 데이터
  교환 목적으로 활용.
*/
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

/* 
    < JSON 클래스의 정적메서드 stringify >

- js 객체를 직렬화된 형태의 JSON 형식 객체로 변환시켜주는
  메서드로써 반환된 JSON 객체는 문자열임을 확인 가능.

=============================================================

- 변환된 JSON 형식의 객체는 아래와 같이 객체의 프로퍼티
  (필드)가 모두 문자열 형식으로 구성되어 있음을 확인 가능
  하며, 문자열 구분자 또한 싱글쿼터(')가 아닌 더블쿼터("")로
  구성 되어야함.
  즉, JSON 은 싱글쿼터(')나 백틱(`)이 인정되지 않음.


    < 변환 결과 >

    {
        "name": "John",
        "age": 30,
        "isAdmin": false,
        "courses": ["html", "css", "js"],
        "wife": null
    }

=============================================================

    < stringify 메서드로 변환 가능한 대상 >

- 객체, 배열, 문자열, 숫자형, 불린형, null



    < stringify 메서드로 변환 무시되는 대상 >

- 객체의 함수 프로퍼티, 심볼, undefined
*/
console.log(json);
console.log(typeof json);

/* ==================================================================== */

/* 
    < JSON 클래스의 정적메서드 parse >

- JSON 객체를  js 객체로 변환.
*/
let obj = JSON.parse(json);

console.log(obj);
console.log(typeof obj);