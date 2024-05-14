// console.log(null == undefined);
// console.log(null === undefined);      // 타입은 다르므로 엄격 이퀄 비교 연산시 다름으로 평가.

// console.log(null + 1);                // null은 다른 숫자와 연산시 기본적으로 0으로 변환되어 평가되는 반면,
// console.log(undefined + 1);           // undefined는 숫자가 아닌 타입(NaN)으로 인식함을 확인 가능.
// console.log(null * 1);
// console.log(undefined * 1);
// console.log(null * 'a');              // NaN
// console.log(undefined * 'a');         // NaN
// console.log(null + 'a');              // nulla
// console.log(undefined + 'a');         // undefineda
// console.log('-----------------');


// const i1 = 5;
// const i2 = undefined;
// const i3 = null;
// let i4;

// console.log(i1 == null);
// console.log(i2 == null);
// console.log(i3 == null);
// console.log(i4 == null);
// console.log();
// console.log(i1 == undefined);
// console.log(i2 == undefined);
// console.log(i3 == undefined);     // 이퀄연산은 null, undefined 또는 초기화되지
// console.log(i4 == undefined);     // 않은 빈 값에 대하여 모두 동일한 값으로 평가.
// console.log();
// console.log(i1 === null);
// console.log(i2 === null);
// console.log(i3 === null);         // 엄격 이퀄연산에서 null에 대한 평가는 오로지 null인지 아닌지로만 평가.
// console.log(i4 === null);
// console.log();
// console.log(i1 === undefined);
// console.log(i2 === undefined);
// console.log(i3 === undefined);    // 엄격 이퀄연산에서 undefined에 대한 평가는 undefined뿐만 아니라,
// console.log(i4 === undefined);    // 초기화되지 않은 비어있는 값에 대해서도 undefined로 평가.





/*
    원시값 중 빈 문자열('')과 false만 추상 동등 비교(==) 시 0으로 변환되어 평가.
*/
console.log('aa' == 0);         // false
console.log('' == 0);           // true
console.log(NaN == 0);          // false
console.log(null == 0);         // false
console.log(undefined == 0);    // false
console.log(true == 1);         // true       // true는 1로 평가.
console.log(false == 0);        // true       // false는 0으로 평가.
console.log('-------------');


/* NaN은 다른 모든 값과 비교했을 때 같지 않으며, 다른 NaN과도 같지 않음에 주의. */
// console.log(NaN == NaN);         // false
// console.log(NaN === NaN);        // false
// console.log(NaN != NaN);         // true
// console.log(NaN !== NaN);        // true
// console.log('-------------');


// console.log(null == null);               // true
// console.log(null === null);              // true
// console.log(undefined == undefined);     // true
// console.log(undefined === undefined);    // true
// console.log(true == true);               // true
// console.log(true === true);              // true
// console.log(false == false);             // true
// console.log(false === false);            // true



// /*
//     원시값에 대한 관계 추상 비교(>=,<=,>,<) 시 빈 문자열('')과 false는 그대로 0으로 평가되는 것을 확인가능.
//     또한 문자열과 NaN, undefined는 관계 추상 비교(>=,<=,>,<) 시 비교 자체가 무 의미하여 무조건 false로 평가.
//     단, null은 관계 추상 비교 시 빈 문자열('')과 false와 같이 0으로 수렴되어 평가되는 것을 확인 가능.
//     따라서 동등 비교시에는 엄격(strict) equal로 평가하는 것이 무방하지만, 범위 평가를 위한 관계 추상 비교시
//     에는 입력 데이터의 원시 자료형에 유의.
// */

// console.log('aa' <= 0);                  // false
// console.log('aa' >= 0);                  // false
// console.log();

// console.log(NaN <= 0);                   // false
// console.log(NaN >= 0);                   // false

// console.log(undefined <= 0);             // false
// console.log(undefined >= 0);             // false
// console.log();

// console.log('--------------');

// console.log('' <= 0);                    // true
// console.log('' >= 0);                    // true
// console.log(false <= 0);                 // true
// console.log(false >= 0);                 // true
// console.log();

// console.log(null <= 0);                  // true
// console.log(null >= 0);                  // true
// console.log(null >= 0 && null <= 0);     // true
// console.log();





/* 

    < Nullish coalescing operator >

- falsy값을 null과 undefined값으로만 제한함으로써 or(||)의 한계를 벗어나 0, '', NaN 등도 truthy값으로 인정함으로써
  정의된 값과 정의되지 않은 값을 간편히 구분가능하며 단락 평가 성질도 그대로 유지.
  즉, truthy값을 null과 undefined을 제외한 모든 값으로 인정.

형식     :      data1 ?? data2          - data1이 정의된 값이라면(null 또는 undefined가 아니라면) data1을 반환하되,
                                          data1이 정의되지 않은 값이라면(null 또는 undefined) data2 반환.
                                          결과적으로 or와 거의 유사하게 동작하나 평가 기준이 되는 falsy값을 null과
                                          undefined로만 제한하는 차이.


*/


'use strict';

/* 널 병합 연산자의 기본 동작 */
// let data1;
// let data2 = null;
// let data3 = '';
// let data4 = 0;
// let data5 = NaN;

// console.log(data1 ?? 'value');
// console.log(data2 ?? 'value');
// console.log(data3 ?? 'value');
// console.log(data4 ?? 'value');
// console.log(data5 ?? 'value');
// console.log('-------------');


/* null과 undefined가 아닌 데이터의 검출 */
// let input;

// console.log(input !== null && input !== undefined ? input : 'value');
// console.log('-------------');


// /* 널 병합 연산자를 통한 null과 undefined가 아닌 데이터의 검출 */
// console.log(input ?? 'value');
// console.log('-------------');


// /* 널 병합 연산자 적용 시 괄호 없는 and와 or연산자의 나열은 금지 */
// // console.log(data1 && data2 ?? 'value');
// console.log((data1 && data2) ?? 'value');






/** 최댓값 최솟값 비교 */

// 점수 : 0 ~ 100

// let max = 0, min = 100,
//   sc;
// for (let i = 0; i < 5; i++) {
//   sc = +prompt(`{${i + 1}}번째 학생 점수 : `);
//   if (sc > max) max = sc;
//   if (sc < min) min = sc;
// }

// alert(`최댓값 : ${max}, 최솟값 : ${min}`);


// 점수 범위를 몰라

// let max, min ,
//   sc;

// max = min = +prompt(`{${1}}번째 학생 점수 : `);

// for (let i = 1; i < 5; i++) {
//   sc = +prompt(`{${i + 1}}번째 학생 점수 : `);

//   if (sc > max) max = sc;
//   if (sc < min) min = sc;
// }

// alert(`최댓값 : ${max}, 최솟값 : ${min}`);





let number;
//입력없이 확인 - 빈문자열
// 취소 null
// 공백 확인 - 공백


for (; ;) {
    number = prompt('숫자만 입력');

    if (number) {  // number.trim() : 공백만 입력되는 경우에 대한 방어 코드. 공백은 true 로 평가됨에 주의.
        //                          // 취소 버튼을 눌렀을 때 반환되는 null 에 대한 즉각적인 trim 함수 호출은 에러처리되므로
        //                          // 먼저 number 변수의 값을 그대로 평가하여 참인 경우는 null 이 아니므로 비로소 number 에
        //                          // 대한 안전한 trim 함수 호출 가능.

        if (!isNaN(number)) {       // isNaN 함수는 ''과 null 또는 false의 경우에도 내부적으로 0 으로 변환하여 평가하므로
            alert('정상 입력^^');   // "확인", "취소" 버튼을 눌렀을 때의 방어 코드는 반드시 필요.
            break;
        }
    }
    alert('입력란에는 숫자만 입력 가능합니다 ㅠㅠ');
}