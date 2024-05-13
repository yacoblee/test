'use strict';

let sum = 0;

// for (let one, two; ;) {
//     one = +prompt('정수1 :');
//     two = +prompt('정수2 :');


//     if (one >= two) {
//         sum = one - two
//         alert(`${one} 과 ${two}의 차이는 ${sum} 입니다.`);
//         if (confirm('창 닫을까요')) {
//             break;
//         }
//     }

//     if (two >= one) {
//         sum = two - one
//         alert(`${one} 과 ${two}의 차이는 ${sum} 입니다.`);
//         alert('창 닫을까요?');
//         break;
//     }
// }




// for (let one, two; ;) {
//     one = +prompt('정수1 :');
//     two = +prompt('정수2 :');


//     if (one > two) {
//         alert(`큰수는 ${one} 입니다.`);
//         if (confirm('창 닫을까요')) break;

//     }

//     if (two > one) {
//         alert(`큰 수는 ${two} 입니다.`);
//         if (confirm('창 닫을까요')) break;
//     }
//     if (one == two) {
//         alert(' 두수는 같음');
//         if (confirm('창 닫을까요')) break;
//     }
// }


for (let name, one, two, three, ave; ;) {
    name = +prompt('정수1 :');
    one = +prompt('국어점수 :');
    two = +prompt('영어점수 :');
    three = +prompt('수학점수 :');

    sum = (one + two + three) / 3;


    if (sum >= 90) {
        ave = A
    }else if (90 > sum >= 80) {
        ave = B
    }else {
        ave = C
    };

    alert(`학생명:${name}, 학점: ${ave}  평균은: ${sum} 입니다.`);


}
