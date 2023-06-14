// narrowing 할 수 있는 방법 더 알아보기
// null & undefined 타입체크
function func2_2(a) {
    // if ~ else 문으로 체크
    // && 연산자 사용하여 체크
    if (a && typeof a === 'string') {
        // a === undefined 면 if문 실행 X
        // a === string 면 if문 실행 O
    }
    /*
        && 연산자의 다른기능

        && 비교할때 자료형을 넣으면
        && 사이에서 처음 등장하는 falsy 값을 찾아주고
        그게 아니면 마지막 값을 남겨준다
        (falsy값 : null, undefined, NaN 이런 값들을 의미)

        ex) 1 && null && 3 // null 남음
            undefined && '안녕' && 100  // undefined 남음
    */
}
function func2_21(animal) {
    if ('swim' in animal) {
        animal.swim;
    }
}
function func2_22(a) {
    // in : 속성명이 같기때문에 사용불가
    // instanceof : 부모class가 없기 때문에 사용불가
    if (a.wheel === '4개') {
        console.log('이 차는 ' + a.color);
    }
    else {
        console.log('이 차는 ' + a.color);
    }
}
