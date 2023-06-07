// 함수와 methods에 type alias 지정하는 법
// function func8() {} // 함수 선언식
var func8 = function (a) {
    return 10;
};
var people = {
    name: 'jeong',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
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
var cutZero = function (a) {
    var str = a.slice(0, 1);
    if (str === '0') {
        return a.slice(1);
    }
    else {
        return a;
    }
};
var removeDash = function (a) {
    var str = a.split('-');
    return Number(str.join(''));
};
var Q3_8 = function (a, b, c) {
    console.log(c(b(a)));
};
Q3_8('0111-555-7777', cutZero, removeDash);
