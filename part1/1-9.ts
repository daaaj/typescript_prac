// TypeScript로 HTML 변경과 조작할 때 주의점

// index.html <h4> 조작하기
let 제목 = document.querySelector('#title');

// 제목.innerHTML = '반가워요'; // 에러
/*
    why?
    제목이 유니언 타입이라서 => id를 잘못적었을때 null 값이 올 수도 있기 때문
    
    narrowing 해주자~
*/

// narrowing 방법 5개
// 1
if (제목 != null) {
    제목.innerHTML = '반가워요';
}

// 2 : 가장 많이 사용
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}

// 3 : as 키워드 사용
let 제목2 = document.querySelector('#title') as Element;
제목2.innerHTML = '반가워요';

// 4 : 오브젝트에 붙이는 ?.
// ? 사용하면 오른쪽의(innerHTML) 없으면 undefiend 내뱉는다 == 옵셔널체이닝
if (제목?.innerHTML != undefined) {
    제목.innerHTML = '내가 이다';
}

// 5 : tsconfig.json 에 strictNullChecks : false 지정하기

// <a> href 속성 조작하기
let 링크 = document.querySelector('.link');

// if (링크 instanceof Element) {
//     링크.href = 'https://kakao.com';
// }
// => 에러
/*
    why?
    Element 타입 중에서도 상세 타입들이있음 그걸 정확히 적어줘야함
    HTMLAnchorElement / HTMLHeadingElement / HTMLButtonElement 등
*/
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}

// <button> eventListener 조작
let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function () {
    console.log('버튼 클릭');
});

/*
    Q1. 버튼을 누르면 이미지를 바꿔봅시다.
*/
let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'change.jpg';
}

/*
    Q1. 바꾸고 싶은 html 요소가 많습니다.

    <a class="naver" href="naver.com">링크</a>
    <a class="naver" href="naver.com">링크</a>
    <a class="naver" href="naver.com">링크</a>

    3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
    자바스크립트 코드를 어떻게 짜야할까요? 
*/
// 똑같은 클래스 여러개를 한꺼번에 바꿀때 selectorAll
// forEach 사용해서 각각의 요소 마다 각각의 href 속성 변경해줌
let link = document.querySelectorAll('.naver');
link.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
