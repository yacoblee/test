'use strict';


/**문제: 공백 제거 및 대문자 치환 */
// for (let value; ;) {
//     value = prompt("ID를 입력해주세요", '영문자 조합으로만 입력');

//     value = (value.toUpperCase()).trim();
    // alert(`아이디는 : ${value}`);
// }



/*
    < 문제 >

- 다음과 같이 email 변수에 이메일 주소가 저장되어 있을 때,
  메일주소의 처음과 @ 앞에 "_" 를 삽입하고 @ 뒤의 도메인명은
  개별 도메인명의 뒤에 ".kr"이 삽입되어 email 변수에 저장하도록
  프로그램을 구현.
  단, 아래 메일주소와 도메인명은 예시일뿐 다른 모든 메일주소와
  도메인명에 대하여 적용되야함에 주의.
    ( replace 사용 불가 )

    < 변환 예시 >

    psy1234@daum.net       ->      _psy1234_@daum.kr.net

    ysk999990@naver.com    ->      _ysk999990_@naver.kr.com
*/

// 이메일 값 반환
// let email = 'psy1234@daum.net';
// let suv, dot, anot;


// suv = email.slice(0, email.indexOf('@'));
// suv = '_' + suv + '_';

// dot = email.slice(email.indexOf('@'), email.indexOf('.'));

// anot = email.slice(email.lastIndexOf('.'), email.length);
// console.log(suv + dot + '.kr' + anot);


//하의픈 값 변환
/*
    < 문제 >

- 주민번호를 입력받되 하이픈(-)을 포함하여 입력하면 "하이픈(-)을 공백으로 변경을 원하십니까?" 라는
  문구를 표시하는 확인/취소 대화상자를 활성화시켜 "확인" 버튼을 클릭하면 공백으로 변경하고 "취소"
  버튼을 클릭하면 하이픈이 포함된 그대로 대화상자에 표시되도록 프로그램 구현.
  단, 하이픈이 포함되지 않은 경우에는 입력받은 그대로 대화상자에 표시되도록 구현.
*/
// let str = prompt("주민번호를 입력해주세요: ");
// let val = str.includes('-');

// if (val == true) {

//     if (confirm('하이튼을 공백으로 변경을 원하십니까?')) {
//         str = str.replace('-', ' ');
//     } 

// }
//     alert(`${str}`);




/* 
      < 사이트 URL을 이용한 비밀번호 생성 >

step1 : "http://" 부분은 제외하고 추출.                             =>      daum.net
step2 : 닷(.)부터 표시되는 문자열을 제외하여 추출.                   =>      daum
step3 : '$' + 처음 3자리 + 총 글자 수 + url 의 14번째 문자.         =>      $dau4e

※ url 의 14번째 문자가 존재하지 않을 때는 ? 문자로 표시.            =>      $dau4?
*/

// let url = 'http://daum.net';

// let step1, step2, step3;
// step1 = url.split('//')[1];
// step2 = step1.split('.')[0];

// if (url.length > 13) {
//     step3 = url.slice(13, 14);
//     console.log('$' + step2.slice(0, 3) + step2.length + step3);
// } else {
//     console.log('$' + step2.slice(0, 3) + step2.length + '?');

// }


/* 
    < 문제 >

- 입력받은 값이 숫자인지 아닌지를 평가하는 프로그램 구현.
  숫자 입력 시 입력없이 "확인" 버튼을 누르거나 "취소" 버튼을 누르는
  상황에 대한 예외 처리는 제외.
*/

// let num = prompt("숫자 입력: ");
// num = num.trim();

// if (confirm('입력된 숫자가 맞습니까?')) {
//     let val = num.split('');

//     for (let i = 0, tes; i < val.length; i++) {
//         tes = Number(val[i]);

//         if (isNaN(tes)) {
//             alert('숫자가 아닙니다. 프로그램을 종료합니다.');
//             break;
//         }
//         if (i === val.length - 1) {
//             alert('입력한 값이 숫자가 맞습니다.');
//         }
//     }

// } else {
//     alert('사용자가 취소했습니다. 프로그램을 종료합니다.');
// }
