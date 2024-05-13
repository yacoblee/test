
'use strict';

// for (var i = 47; i < 93;) {
//     console.log(i);
//     i++;
// }

// for (let i = 242; ;) {
//     i--;
//     if (i <= 168) break;
//     console.log(i);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }


// 작은수: 1 큰수:10 띄워주기
// let total = 0, min, max;
// let n1, n2;
// min = +prompt('작은수: ');
// max = +prompt('큰수: ');

// for (let i = min; i <= max; i++) {
//     total = total + i;
// }


// alert(`${min}부터 ${max}까지 누적합: ${total}`);

//중첩루프 특정: 외곽구조 변수 값이 고정되어 있는 상태에서 내곽구조 값이 변하는 특성.

// for (let i = 1, space = '', result; i <= 9; i++) {               // 외곽구조
//     if (i == 7) continue;

//     for (let j = 1; j <= 9; j++) {               // 내곽구조
//         result = i * j;

//         for (let r = 0; r < 2 - (result + '').length; r++) {
//             space = space + '&nbsp;';
//         }
//         document.write(`${i} x ${j} = ${space + result} `);
//         space = '';
//     }
//     document.write('<br/>');
// }


/** 글자수 유지하면서 곱셈하기*/
let row, col, maxunit;

row = +prompt('행크기:');
// col = +prompt('열크기:');

// maxunit = row * col + '';

// for (let i = 1, v = 1; i <= row; i++) {

//     for (let j = 1, result; j <= col; j++, v++) {
//         result = v + '';

//         for (let r = 0, ed = maxunit.length - result.length; r < ed; r++) {
//             result = '&nbsp;' + result;
//         }
//         document.write(result + ' ');
//     }
//     document.write('<br/>');

// }

/* 행크기 절반에 오는 배치 구하기 */

let m = (row + 1) / 2; //짝수
maxunit = row * m + '';

for (let i = 1, v = 1; i <= row; i++) {
    for (let j = 1, result; j <= i; j++, v++) {
        result = v + '';

        for (let r = 0, ed = maxunit.length - result.length; r < ed; r++) {
            result = '&nbsp' + result;
        }
        document.write(result + ' ');
    }
    document.write('<br/>');
}

/** 역배열*/
m = (row + 1) / 2;
maxunit = row * m + '';
for (let i = 1, v = 1; i <= row; i++) {
    for (let j = 1, result; j <= row.length + 1 - i; j++, v++) {
        result = v + '';

        for (let r = 0, ed = maxunit.length - result.length; r < ed; r++) {
            result = '&nbsp' + result;
        }
        document.write(result + ' ');
    }
    document.write('<br/>');

}