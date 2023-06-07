// 함수와 methods에 type alias 지정하는 법

/*
    type alias에 함수 type 저장해서 사용할 때
    => 화살표 함수 사용

    함수 type alias 사용 시
    ** 함수표현식 사용하기
*/
type funcType = (a: string) => number;

// function func8() {} // 함수 선언식
let func8: funcType = function (a) {
    return 10;
};

// object 안의 함수 타입지정

type peopleType = {
    name: string;
    plusOne: (a: number) => number;
    changeName: () => void;
};

let people: peopleType = {
    name: 'jeong',
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log('ㅎ2ㅎ2');
    },
};
people.plusOne(10);
people.changeName();

/*
    Q1. 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
    - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
    - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
    - type 키워드를 쓰든 말든 알아서 합시다. 

    type peopleType = {
        name: string;
        plusOne: (a: number) => number;
        changeName: () => void;
    };
*/

/*
    콜백함수
    1. Test1() 의 내부 코드 a() 실행 됨
    2. 파라미터 = Test2 이기 때문에 Test2() 실행 됨
*/
function callbackTest1(a) {
    a();
}
function callbackTest2() {
    console.log('난 콜백함수');
}
callbackTest1(callbackTest2);

/*
    Q2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
    - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
    - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
    - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
*/
type cutZeroType = (a: string) => string;
let cutZero: cutZeroType = (a) => {
    let str = a.slice(0, 1);
    if (str === '0') {
        return a.slice(1);
    } else {
        return a;
    }
};

type removeDashType = (a: string) => number;
let removeDash = (a) => {
    let str = a.split('-');

    return Number(str.join(''));
};

/*
    Q3. 함수에 함수를 집어넣고 싶습니다.
    숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
    이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
    1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
    2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
    3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
    이 함수는 어떻게 만들면 될까요?
    둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
*/
type Q3_8Type = (a: string, b: cutZeroType, c: removeDashType) => void;

let Q3_8: Q3_8Type = (a, b, c) => {
    console.log(c(b(a)));
};
Q3_8('0111-555-7777', cutZero, removeDash);
