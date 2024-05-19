'use strict';



// let st1, st2;

// st1 = +prompt('정수1: ');
// st2 = +prompt('정수1: ');


// if (isNaN(st1 + st2)) {
//     alert('두수중 하나는 숫자가 아닙니다.');
// } else {
//     alert(`${st1} + ${st2} = ${st1 + st2}`);
// }

// let names;

// names = prompt('이름 입력: ');

// if (names != undefined && names != '') {
//     alert(`${names}`);
// } else {
//     alert('입력되지 않았습니다.');
// }

// alert(`${names ?? '이름이 아닙니다.'}  `)




/*
  < 문제 >

- 고객명과 나이, 연락처를 입력받아 아래의 조건에 맞추어 확인이 가능한 프로그램 구현.

----------------------------------------------------------------------------------------------------------------

  < 조건 >

1) 고객{명, 나이, 연락처 입력 시 정보가 입력되지 않거나 "취소" 버튼을 누르면 "미입력" 이라는 문자열
   정보가 저장되도록 프로그램 구현.
2) 고객명, 나이, 연락처가 모두 정상적으로 입력된 것이 확인되면 아래 < 예시 > 와 같이 고객 정보를 보여주고
   "확인" 버튼을 누르면 "정보 확인에 감사드립니다. ^^" 문구가 대화상자 형태로 표시되도록 구현.
   "취소" 버튼을 누르면 "차후에 다시 정확한 정보 입력을 부탁드립니다." 문구가 대화상자 형태로 표시되도록
   프로그램 구현.

   < 예시 >

   고객명 : 박성연      나이 : 22       연락처 : 010-1234-5678
   
   입력하신 고객명은 박성연님 이고 나이는 22세, 연락처는 010-1234-5678 입니다. 맞습니까?

3) 고객명, 나이, 연락처 정보 중에 상기 1) 의 조건에 의해 어느 하나라도 "미입력" 문자열 정보가 저장되는
   경우에는 "고객명, 나이, 연락처가 모두 입력되어야 합니다." 라는 형태로 대화상자가 표시되도록 구현.
   
*/
// let names, age, number;

// names = prompt('이름: ');
// names = ((names != null && names.trim() != '') ? names : '미입력');
// age = prompt('나이: ');
// age = ((age != null && age.trim() != '') ? age : '미입력');
// number = prompt('연락처: ');
// number = ((number != null && number.trim() != '') ? number : '미입력');


// if ((names || age || number) == '미입력') {
//     alert('고객명 나이 연락처가 모두 입력 되어야 합니다.');

// } else {
//     if (confirm(`입력하신 고객명은 ${names} 나이는 ${age} 연락처는 ${number} 맞나요?`)) {
//         alert('정보 확인에 감사드립니다.');
//     } else {
//         alert('차후에 다시 정확한 정보 입력을 부탁드립니다.');
//     }
// }


// 학생명과 국어, 영어, 수학 점수를 순서대로 입력받아 평균을 구하여 출력하는 프로그램 구현.
// 단, 순서대로 정보를 입력받는 과정에서 어느 하나라도 값이 입력되지 않는 경우에는 다음 입력
// 과정으로의 진행을 멈추고 "학생 정보가 순서대로 정확히 입력되지 않았습니다." 문구를 대화상자
// 형태로 표시하고 프로그램이 종료되도록 구현.

// let names, a, b, c, d, sum;


// while (true) {
//     names = prompt('학생명: ');
//     if (names == '') { alert('아닙니다.'); break; };

//     a = +prompt('국어: ');
//     if (a == '') { alert('아닙니다.'); break; };

//     b = +prompt('영어: ');
//     if (b == '') { alert('아닙니다.'); break; };

//     c = +prompt('수학: ');
//     if (c == '') { alert('아닙니다.'); break; };

//     sum = (a + b + c) / 3;

//     alert(`평균 값은 ${sum}`);
//     break;
// }

// let num1, num2;
// let num3 = 1;

// while (true) {

//     num1 = prompt('밑수: ');
//     if (num1 <= 0) {
//         alert('음수가 입력되었습니다.');
//         break;
//     }
//     num2 = prompt('지수: ');
//     if (num2 <= 0) {
//         alert('음수가 입력되었습니다.');
//         break;
//     }

//     for (let i = 1; i <= num2; i++) {
//         num3 = num3 * num1;

//         if (i == num2) {
//             alert(`${num1} 의 ${num2}승은 ${num3}입니다.`);
//         }
//     }
// }


/*
    < 문제 >
- 학생명, 국어점수, 영어점수, 수학점수를 입력받아 테이블 형태로
  입력받은 정보와 성적 합계, 평균이 출력되도록 프로그램 구현.

    < 조건 >
1> 외부 스타일 시트와 외부 스크립트 적용.
2> 국어점수, 영어점수, 수학점수는 0 ~ 100점 사이의 범위로 입력 받는다 가정.
   단, 과목은 국, 영, 수 외에 더 확장이 될 수 있다는 가정하에 구현.
3> 평균은 정수부만 표현되도록 Math.trunc() 함수 활용.
4> 테이블의 제목은 caption 속성을 적용하고 테이블의 구성은 tr, th, td 로만 구성.
5> 테이블 제목과 모든 행의 높이는 30px 적용.
6> 테입블의 개별 열 너비는 각각 100px 적용.
7> 그 외 사항은 출력 예시 참조.
8> 모든 html 태그 구성은 js 를 이용하여 구성.
*/


// const data = [
//     ['국어점수', '영어점수', '수학점수'],
//     ['a', 'b', 'c']
// ];

// document.write('<table>');

// for (let i = 0; i < 4; i++) {
//     document.write('<tr>');
//     for (let j = 0; j < 4; j++) {
//         document.write(`<td>${data[i][j]}</td>`);
//     }
//     document.write('</tr>');
// }
// document.write('</table>');


let studentName = prompt("학생명을 입력하세요:");
let kor = parseInt(prompt("국어 점수를 입력하세요 (0 ~ 100):"));
let eng = parseInt(prompt("영어 점수를 입력하세요 (0 ~ 100):"));
let math = parseInt(prompt("수학 점수를 입력하세요 (0 ~ 100):"));
let total = kor + eng + math;
let ave = Math.trunc(total / 3);


const data = [
    ['국어점수', '영어점수', '수학점수', '합계', '평균'],
    [`${kor}`, `${eng}`, `${math}`, `${total}`, `${ave}`]
];

document.write('<table>');
document.write('<caption>제목</caption>')

for (let i = 0; i < data[i].length; i++) {
    document.write('<tr>');

    for (let j = 0; j < data[i].length; j++) {
        if (i == 0) {
            document.write(`<th>${data[i][j]}</th>`);
        } else {
            document.write(`<td>${data[i][j]}</td>`);
        }
    }
v
    document.write('</tr>');
}


document.write('</table>');
