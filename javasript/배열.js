/*
    < js 배열 >

- 자바스크립트의 배열은 자바와 동일하게 동적할당이 적용되며, 자바의 컬렉션 프레임워크와 같이
  요소값 추가에 따라 자동 확장.

  ---------------------------------------------------------------------------------------------------

    < 리터럴 배열 생성 > - 리터럴 초기화 블럭을 이용한 배열 생성

참조변수 = [요소값1, 요소값2, 요소값3, ....];

*/

'use strict';

let ar1 = [];            //배열 리터럴에 요소값을 넣지 않으면 기본적으로 공간을 할당하지 않음.
let ar2 = ar1;  // 자바의 동시 참조 개념과 같음.

console.log(ar1.length);
console.log(ar1[0]);          // 공간이 할당되지 않은 영역이나 배열 범위를 벗어난 접근은 'undefined'값 반환.
console.log(ar1);   // 배열의 참조를 지정하면 자바의 컬렉션 프레임워크와 같이 배열 요소값을
//                  //  '[요소값1, 요소값2, 요소값3, ....]'형태로 반환.
console.log('---------------------------');


ar1[0] = 1;     // 인덱스를 통해서 배열에 요소값을 넣으면 자동으로 공간 할당 및 확장.
ar1[1] = 2;

console.log(ar1.length);
console.log(ar1);
console.log(ar2);
console.log('---------------------------');


ar2[4] = 5;     // 이와 같이 중간에 요소값이 비어 있는 상태로도 공간 확장 가능.

console.log(ar1.length);
console.log(ar1);         // [ 1, 2, <2 empty items>, 5 ]
console.log('---------------------------');


let ar3 = [11, 22, 33, 44, 55];

console.log(ar3);

ar3[1] = 'a';       // 이와 같이 타입이 다른 요소값도 저장 가능. 함수도 가능.
ar3[2] = 'psy';
ar3[3] = 4.15;

console.log(ar3);
console.log('---------------------------');


delete ar3[4];      // delete 연산자를 통해 요소값 삭제 가능. 단, 배열 안의 값을 삭제 할뿐
console.log(ar3);   // 배열이 할당되어 있는 크기에는 영향을 주지 않음.
console.log(ar3.length);

ar3[5] = 66;
console.log(ar3);
console.log('---------------------------');


console.log(ar3.toString());    // 11,a,psy,4.15,,66
//                              // 자바와 동일하게 Object의 메서드 toString은 배열도 문자열로 변환한 값을 반환.

console.log([] + 5);            // 배열 요소에 대한 +연산은 당연히 요소값에 대한 산술연산을 처리하지만, 이와같이
console.log([1] + 5);           // 배열 자체에 대한 +연산은 배열에 대하여 toString메서드를 호출한후 연산 처리를
console.log([1, 2] + 5);        // 하는 것과 동일하게 문자열로 자동 형변환후 연산.
console.log('---------------------------');


ar3.value = 'add';        // 배열은 객체형에 속하므로 이와같이 멤버 연산자를 통한 요소 추가도 가능하지만
//                        // 이렇게 하면 특수한 형태의 자료구조인 배열에 최적화 기법이 적용되지 않아
//                        // 배열에 적용되는 이점들이 적용되지 않음. 즉, length필드로 배열의 크기조사를
//                        // 하는 경우 그 크기에 포함되지 않으며, 배열 순회를 위한 for~of나 forEach를 통한
//                        // 접근에서도 배제됨.(forEach의 콜백함수 array인수를 통한 배열 전체 참조는 예외)
//                        // 단, 배열 접근시 권장되지 않는 for~in은 객체 접근을 위한 용도이므로 배제되지 않음.

console.log(ar3.value);   // 객체형에 속하는 배열의 특성으로 인해 배열의 인덱스는 정수형 프로퍼티에 해당되고
//                        // 멤버 연사자를 통해 추가한 value프로퍼티는 정수형이 아니므로 배열의 맨 끝에 위치.
console.log(ar3);
console.log(ar3[ar3.length - 1]);   // 66
console.log();

for (const key of ar3) { //단순 값부만 읽기용
  console.log(key);
}
console.log();

ar3.forEach((v, i, a) => {  // a 는 주소를 참조해서 데이터를 실질적으로 변경이 가능함
  console.log(v, i);
});
console.log();

for (const key in ar3) {
  console.log(ar3[key]);
}







/*
    < 객체 리터럴(Literal)  생성 형식 > - 일회성 객체
const 참조변수 = {
    속성1,
    속성2,
    속성3,
};
속성(Property) : 콜론(:)구분자를 기준으로 키(Key)와 값(value)으로 구성.

- 속성의 키는 문자열이나 심볼(Symbol)만 가능한 반면, 속성의 값은 객체, 배열, 함수(메서드)를 포함한 모든 자료형이 가능.
  단, 계산된 프로퍼티 형식을 이용하는 경우 키에도 변수 지정 가능.
*/

'use strict';

const car = {
  'carName': 'sonata',	 // 키를 문자열 구분자로 묶은 경우에는 멤버 연산자로 접근 가능. 단, 계산된 프로퍼티
  //						 // 형식으로 접근하는 경우에는 반드시 문자열 구분자를 지정해야함에 주의.
  color: 'red',            // 키는 문자열만 가능하여 문자열 구분자('') 생략 가능.
  carNum: 1,
  'car type': 'sedan',     // 키에 공백이나 특수문자가 포함되는 경우 반드시 문자열 구분자('')를 이용하여 표기.
  //                       // 이때의 접근은 계산된 프로퍼티 형식으로만 접근 가능.

  5: 'a',                  // 키를 숫자 형태로 표기하였지만 내부적으로 문자열 형식으로 처리.
  //                       // 이때의 접근은 계산된 프로퍼티 형식으로만 접근 가능.
};

console.log(car[]);
console.log(car.color);
console.log(car.carNum);
console.log(car.carName);
console.log(car['carName']);
console.log(car["car type"]);    // 객체의 속성 접근시 멤버 접근 연산자(.)나 또는 배열 접근 연산자(계산된 프로퍼티)
//                               // 사용 가능. 단, 공백이나 숫자형식 또는 특수문자가 포함된 키의 경우 배열 접근
//                               // 연산자(계산된 프로퍼티 형식)로만 접근 가능.

console.log(car);      // 객체의 참조는 중괄호 블럭('{ }') 내에 객체 내부의 모든 속성(키,값)을 쉼표로 구분
console.log();         // 하여 반환. 이때 키가 숫자 형식이거나 공백 또는 특수문자가 포함된 경우 문자열 구분자를
//                     // 포함한 형식으로 반환.

console.log(car.fuel);                    // 존재하지 않는 필드에 대한 접근은 컴파일 에러가 아닌 undefined 반환.
// console.log(car.run());                // 단, 존재하지 않는 메서드에 대한 접근은 컴파일 에러 발생.
console.log('------------------------');


// console.log(car[color]);      // 계산된 프로퍼티 형식으로 접근시 키가 문자열인 경우에는 반드시 문자열 구분자를
console.log(car['color']);       // 사용하여 접근 가능하되 외부 변수나 숫자 형태는 구분자 없이 직접 접근 가능.
console.log(car[5]);
const keyColor = 'color';
console.log(car[keyColor]);
console.log('------------------------');


car.typeOfFuel = 'gasoline';   // 객체를 생성한 이후에도 이처럼 새로운 속성을 추가 가능. 특수한 개별 객체에 대하여
console.log(car);              // 어떤 조건이 부합하는 경우 이러한 형식으로 속성을 추가하는 형태로 활용.
console.log('------------------------');


delete car.carNum;        // 객체를 생성한 이후에도 delete 예약어를 통해 이처럼 속성을 삭제 가능.
console.log(car);         // 형식 : delete 객체.키
console.log('------------------------');


const key1 = 'father', key2 = 'mother';
const value1 = '아빠', value2 = '엄마';

const faimly = {
  [key1]: value1,       // 계산된 프로퍼티를 이용한 동적 프로퍼티 생성. 키에는 문자열이나 심볼만 적용이 가능하지만,
  [key2]: value2,       // 계산된 프로퍼티 형식을 이용하는 경우에는 변수 지정 가능.
};

console.log(faimly);


const car = {
  carName: 'sonata',
  color: 'red',
  carNum: 1,
  'car type': 'sedan',
};

function getProperty1(obj, property) {
  console.log(obj.property);              // obj에 property라는 key가 존재하지 않으므로 undefined 반환.
}

getProperty1(car, 'carName');
console.log();


function getProperty2(obj, property) {
  console.log(obj[property]);             // 계산된 프로퍼티를 활용하여 값을 동적으로 얻는 것이 가능.
}

getProperty2(car, 'carName');




/* 
  < js 에서의 메서드 정의 >

- js 에서는 자바에서의 필드와 메서드를 모두 통칭하여 프로퍼티로 정의.
따라서 프로퍼티 key 에 데이터 값(value)을 할당한 형태가 필드 프로퍼티로 평가되며,
프로퍼티 key 에 함수를 할당한 형태를 메서드로 정의.
*/

const option = {
  hiPass: true,
  sunRoof: false
}

const car = {
  carName: 'poter',
  color: 'blue',
  typeOfFuel: 'diesel',
  'car type': 'truck',
  performance: {             // 값(value)에는 리터럴 객체를 직접 지정 가능.                             
    speed: 100,
    breakCapability: 10    // 제동력.                                                 
  },
  carOption: option,          // 값(value)에는 외부 객체나 외부 함수의 참조도 포함 가능.

  inforCar: function () {     // 객체 메서드.

    console.log(`차명 : ${this.carName}, 색상 : ${this.color}, 종류 : ${this["car type"]}`)
    // 메서드 내에서 객체 속성(필드, 메서드) 접근시에는 반드시 this키워드를 통해서 접근 가능.
    // ( this 대신 car 를 통해서도 접근 가능하지만 권장되지 않음 )
    // VSCODE에서는 속성명만 입력해도 this키워드 자동 로딩.
  },

  run() {                     // 객체 메서드 축약.
    console.log("부릉 부릉");
  },

  /* 
      리터럴 객체 정의 후에도 외부에서 객체의 프로퍼티를 추가할 수 있듯이,
      객체내 별도의 필드 정의 없이도 객체에 포함된 메서드 내에서도 this
      키워드를 이용해 필드 추가 정의 가능.
  */
  add(props, value) {
    car[props] = value;
  }
};

console.log(car.performance.speed);
console.log(car.performance.breakCapability);
console.log("하이패스 " + ((car.carOption.hiPass) ? "" : "미") + "장착");
console.log("선루프 " + ((car.carOption.sunRoof) ? "" : "미") + "설치");
console.log(car);
console.log('------------------------');


car.inforCar();
car.run();
car.add('num', 119);
console.log(car);
console.log('------------------------');


function convey() {
  console.log('짐을 실어 나르기.');
}

car.stop = function () {        // 함수 표현식을 활용한 객체 메서드 추가.
  console.log('끼이익');
};

car.convey = convey;            // 외부 함수의 참조 전달을 통한 메서드 추가.

car.stop();
car.convey();
car['convey']();     // 계산된 프로퍼티를 활용한 메서드 호출도 가능.
console.log('------------------------');


// car.attack();    // 존재하지 않는 필드에 대한 접근은 undefined 를 반환하지만,
//                  // 존재하지 않는 메서드에 대한 접근은 컴파일 에러가 발생됨에 주의.








const car1 = {
  carName: '소나타',
};

const car2 = {
  carName: '아반떼',
};

function viewCarName() {
  console.log(this.carName);      // this를 활용한 외부함수에 대한 동적 객체 할당(메서드화). 함수 내에서 this는 기본적으로
}                                 // 값이 할당되지 않은 상태(undefined)를 유지하다가  객체에 포함되어 호출되는 시점에서
//                                // 해당 객체를 참조.

// viewCarName();                 // 객체가 할당되지 않은 상태에서의 this 는 undefined 를 반환하고 undefined 에 대한
//                                // 속성 참조 연산(.)을 하므로 컴파일 에러.

car1.viewCarName = viewCarName;
car2.viewCarName = viewCarName;

car1.viewCarName();
car2.viewCarName();



function testFunc() {
  console.log(this);      // 일반함수(함수선언, 함수표현식)에서 this는 객체를 할당 받기전 undefined 반환. 함수를 동적으로 객체에
}                          //  할당하면 함수 내의 this는 동적 할당된 객체를 지정.

const testArrow = () => {
  console.log(this);      // 화살표 함수에서의 this는 내부적으로 익명 객체를 생성하므로 빈 객체를 반환.
};

testFunc();
testArrow();


const car1 = {
  carName: '소나타',
  viewCarName() {
    function output() {
      console.log(this.carName);  // viewCarName메서드 내에서 this는 할당 객체 car1의 carName을 가리키지만, output함수 내에서
    }                               // this는 4행에서와 마찬가지로 ouput함수가 객체에 할당되지 않은 상태이므로 undefined를 반환
    output();                       // 하여 this.carName은 컴파일 오류.
  },
}

// car1.viewCarName();

const car2 = {
  carName: '아반떼',
  // viewCarName: () => console.log(this.carName),    // 화살표 함수 내에서 this는 8행과 같이 빈 객체가 반환되므로 this.carName은
  // undefined 반환. 따라서 객체 내에 함수 정의 시 객체에 할당된 다른 프로퍼티를
  // 참조해야 하는 경우에는 람다식이 아닌 객체 프로퍼티에 익명함수를 할당하는
  // 방식을 사용. ( 17행과 같은 객체 메서드 축약 포함. )
  // 즉, 람다식은 객체의 다른 프로퍼티에 영향을 받지 않고 독립적인 기능을 하는
  // 동작의 전달을 해야하는 경우에 활용하는 것이 적합.

  viewCarName() {
    const output = () => console.log(this.carName); // 메서드 내에서 화살표 함수의 this는 빈 객체를 참조하지 않고 자신을 포함하는
    output();                                       // 메서드(viewCarName)의 this를 참조.
  },
}

car2.viewCarName();