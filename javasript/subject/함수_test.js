'use strict';



// let calcul = function (a, b, x) {

//     let sum = 0;

//     switch (x) {
//         case '*':
//             sum = a * b;
//             break;
//         case '+':
//             sum = a + b;
//             break;
//         case '/':
//             sum = a / b;
//             break;
//         case '-':
//             sum = a - b;
//             break;
//     }
//     console.log(`값은 ${sum}`);

// };

// let calcul = (a, b, x) => {

//     let sum = 0;

//     switch (x) {
//         case '*':
//             sum = a * b;
//             break;
//         case '+':
//             sum = a + b;
//             break;
//         case '/':
//             sum = a / b;
//             break;
//         case '-':
//             sum = a - b;
//             break;
//     }
//     console.log(`값은 ${sum}`);

// };



// calcul(10, 3, '+');
// calcul(10, 3, '-');
// calcul(10, 3, '*');
// calcul(10, 3, '/');

// 연산 결과는 13 입니다.
// 연산 결과는 7 입니다.
// 연산 결과는 30 입니다.
// 연산 결과는 3.333 입니다.



'use strict';

// function sum(n1, n2) {
//   return n1 + n2;
// }

// function sub(n1, n2) {
//   return n1 - n2;
// }

// function mul(n1, n2) {
//   return n1 * n2;
// }

// function div(n1, n2) {
//   return n1 / n2;
// }

function calculator(first, second, op) {
    console.log(`연산 결과는 ${op(first, second)} 입니다.`)
}

calculator(10, 3, (n1, n2) => n1 + n2);
calculator(10, 3, (n1, n2) => n1 - n2);
calculator(10, 3, (n1, n2) => n1 * n2);
calculator(10, 3, (n1, n2) => n1 / n2);