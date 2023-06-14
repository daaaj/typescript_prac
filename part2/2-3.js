// never
/*
    함수 return 값에 붙일 수 있는 never type
    - return 값이 없어야 함
    - endpoint가 없어야 함
      function Test(): never {} // return 값이 없지만 에러
      => why? 함수는 return 값 명시하지 않아도 return undefined 가 기본이다
*/
/*
    endpoint가 없는 함수(= 끝나지 않는 함수)
    1. 에러 내기
    2. 무한 반복문

    => 실무에서는 쓸데없음 (void 사용하기)
*/
function func2_3() {
    throw new Error();
}
function func2_31() {
    while (true) { }
}
/*
    never type이 등장하는 경우
    - 이상한 narrowing
    - 어떤 함수표현식은 return타입이 자동으로 never
*/
