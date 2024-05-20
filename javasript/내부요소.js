'use strict'

/* 
    요소들을 변수에 저장함으로써 재사용성을 높이고 참조 위치를 미리
    저장함으로써 문서(Dom)에 대한 재검색률을 낮춤으로써 처리 속도 향상.
*/
let nav = document.getElementById('nav'),
    menu = document.getElementsByClassName('menu'),
    li = document.getElementsByTagName('li'),
    paragraph = document.querySelector('div>p'),
    paragraphAll = document.querySelectorAll('div p');

/* 
    getElementsByClassName, getElementsByTagName, querySelectorAll 은
    다중 요소 선택에 의한 배열 형식으로 반환되므로 반드시 배열 연산자를
    통한 접근을 해야함에 주의.

==========================================================================

    < CSS 스타일 지정 및 컨텐트 반환/지정 형식 >

형식    :   요소.style.CSS스타일속성명 = 문자열 형식의 value

형식    :   요소.value = 문자열 형식의 value

            -  input 태그와 같이 닫는 태그가 없어 value 속성 지정이 가능한
               태그에 대한 값 반환 및 지정.

형식    :   요소.textContent = 문자열 형식의 value

            - 태그 내의 텍스트 컨텐트를 반환 및 지정.

==========================================================================

    < innerHTML >

- textContent 는 해당 요소 내의 태그를 제외한 텍스트 형식의 컨텐트만 읽고
  변경이 가능한 반면, innerHTML 은 해당 컨텐트 영역 내의 텍스트 문자열
  뿐만아니라 태그도 읽고 변경이 가능.

*/
nav.style.backgroundColor = 'burlywood';
menu[2].style.fontSize = '30px';
li[1].style.listStyle = 'none';
paragraph.style.color = 'red';
paragraphAll[1].style.color = 'blue';

let inputTag = document.getElementsByTagName('input');
console.log(inputTag[0].value);
// if (inputTag[0].value == '다음') {
//     inputTag[0].value = 'Next';
// }

console.log(menu[1].textContent);
// if (menu[1].textContent == '카페') {
//     menu[1].textContent = 'Cafe';
// }

console.log(li[1].innerHTML);
li[1].innerHTML = '<h3><a href="#" class="menu cafe">     다락방</a></h3>';


/* 
    < innerText >
- textContent 와 동일하게 태그 내의 텍스트 컨텐트를 반환 및 지정.
  단, textContent 를 통해 요소를 읽을 때는 while space character 를
  모두 그대로 인식하는 반면 innerText 는 while space character 를
  모두 무시하고 컨텐트만 인식.
  하지만 textContent 를 통해 요소에 데이터를 지정하는 경우에는
  반대로 textContent 는 컨텐트만 인식하는 반면, innerText 는 while 
  space character 에서 개행만 그대로 인식하여 지정되는 특성.
*/
console.log(li[1].textContent);
console.log(li[1].innerText);

li[2].textContent = `
과시창`;

// li[2].innerText = `
// 과시창`;

/*
    < length >

- 배열의 크기를 반환하는 필드.
*/
// for (let i = 0; i < paragraphAll.length; i++) {
//     paragraphAll[i].style.opacity = '.3';
// }



let nav = document.getElementById('nav'),
	menu = document.getElementsByClassName('menu'),
	li = document.getElementsByTagName('li'),
	aLink = document.querySelectorAll('a'),
	div = document.querySelector('div');

/* 
	< 요소의 id, 클래스명, 태그명 추출 및 변경 >

- 객체의 참조를 통해 요소의 id, 클래스명, 태그명을 추출 가능.
  참조를 통해 id, 클래스명은 변경이 가능하지만 태그의 변경은 불가.
  id, 클래스명은 기존에 id 나 클래스명이 존재했다면 새로운 id 나
  클래스명으로 변경을 하고 없었다면 새로 생성.
  태그명(tagName)의 반환은 대문자 형태로 반환됨에 주의.

	< 형식 >

객체참조.id
객체참조.className
객체참조.tagName

*/

console.log(nav.id);
console.log(menu[0].className);
console.log(li[0].tagName);

/* id, 클래스명 변경. */
nav.id = 'navigation';
menu[0].className = 'menuMail';

/* id, 클래스 생성. */
div.id = 'container';
div.className = 'divBox';

// =========================================================================================

/* 
	< classList >

- 하나의 태그 참조에 대한 classList 필드는 해당 태그에 지정된 클래스명을 배열 형태로 반환.
  단, 배열 인덱싱을 통한 참조는 가능하지만 직접 변경은 불가.

*/
console.log(aLink[1].classList);
console.log(aLink[1].classList[1]);

// aLink[1].classList[1] = 'Cafe';      // 인덱싱을 통한 변경 불가.


/* 
※ 하나의 태그에 배열 형태로 저장되는 클래스명을 add 와 remove 메서드를
   이용 추가 및 삭제 가능.
   클래스가 존재하지 않는 태그에 대한 add 메서드 호출은 클래스 속성을 생성하는 효과.


	< 태그의 기존 클래스명에 새로운 클래스명을 추가 >

형식    :     객체참조.classList.add( 문자열 형태의 클래스명 )


	< 태그의 기존 클래스명을 삭제 >

형식    :     객체참조.classList.remove( 문자열 형태의 클래스명 )

*/
li[0].classList.add('list1');

aLink[3].classList.add('know');
aLink[3].classList.remove('knowledge');

/* 
	< contains >

- 리스트 형태의 자료구조에서 token 을 인수로 전달함으로써 해당
  token 의 존재 여부를 boolean 값으로 반환.

형식    :     TokenList.contains( token )


- Tree 구조의 임의 node 객체에 대하여 다른 nodeOBJ 객체를 인수로
  전달함으로써 해당 node 객체의 자손 여부를 boolean 값으로 반환.
  자손의 측정 인정 범위는 node 객체 자신을 포함.

형식    :     Node.contains( nodeOBJ )
*/
console.log(aLink[1].classList.contains('cafe'));

console.log(nav.contains(aLink[1]));
console.log(nav.contains(nav));

// =========================================================================================

/* 
	< parentNode >

- 요소에 대한 부모 요소의 참조를 반환.

형식    :     객체참조.parentNode

*/

console.log(aLink[0].parentNode);
console.log(aLink[0].parentNode.parentNode);

aLink[1].parentNode.parentNode.className = 'list2';

// =========================================================================================

/* 
	< hasAttribute >

- 요소의 지정된 속성 존재 여부를  boolean 값으로 반환.

객체참조.hasAttribute( 문자열 형태의 속성명 )


	< getAttribute >

- 요소의 지정된 속성명에 대응되는 값(value)을 반환.

객체참조.getAttribute( 문자열 형태의 속성명 )


	< setAttribute >

- 요소의 지정된 속성명에 값(value)을 지정.
  요소에 지정된 속성이 존재하지 않으면 지정된 속성명에 대응되는 값을 새로 생성.

객체참조.setAttribute( 문자열 형태의 속성명, 문자열 형태의 값 )

*/

let input = document.querySelector('input'),
	paragraphAll = document.querySelectorAll('div p');

if (input.hasAttribute('type')) {
	console.log(input.getAttribute('type'));
}

if (paragraphAll[0].hasAttribute('type')) {
	console.log(paragraphAll[0].getAttribute('type'));
} else {
	console.log('해당 속성은 없다~')
}

/* 새로운 속성을 추가. */
for (let i = 0; i < paragraphAll.length; i++) {
	if (!paragraphAll[i].hasAttribute('class')) {
		paragraphAll[i].setAttribute('class', `p${i + 1}`);
	}
}

/* 기존 존재하는 속성의 값을 변경. */
input.addEventListener('click', function () {
	this.setAttribute('type', 'text');
	input.type = 'text';
	input['type'] = 'text';
});

// =========================================================================================

/* 
	< 사용자 정의 속성에 대한 접근 및 변경 - dataset >

- dataset 프로퍼티를 이용하여 사용자 정의 속성에 대한 접근 및 변경을 
  멤버연산자(.)를 통해 접두사(data-)가 없는 형식으로 접근 가능.
  사용자 정의 속성명이 존재하지 않는 경우에는 setAttribute 와 같이 사용자 속성에
  대응되는 값을 새롭게 추가.

형식    :     객체참조.dataset.접두사가_없는_사용자_속성명

*/

paragraphAll[0].dataset.count = 1;              // 새로운 사용자 정의 속성 추가.
console.log(paragraphAll[0].dataset.count);

// paragraphAll[0].dataset.bgcolor = 'red';

/* 
	접두사가_없는_사용자_속성명 지정시 단어 단위로 첫 글자에 대한 대문자 형태로 구분하면
	자동으로 단어 사이를 하이픈(-)으로 연결하고 연결 단어의 첫 글자를 소문자로 변경하여
	사용자 속성명이 새롭게 조립되는 것을 확인 가능.
*/
// paragraphAll[0].dataset.textColor = 'blue';

// paragraphAll[0].dataset.count = 2;              // 기존 사용자 정의 속성의 값 변경.





