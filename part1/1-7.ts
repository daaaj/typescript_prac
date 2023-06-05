// Literal Type으로 만드는 const 변수 유사품

// Literal Types
// type 지정시 더 엄격하게 지정 가능
let liTest1: 123; // 123 만 들어올 수 있다
// literalTest = 456; // 에러
liTest1 = 123;

let liTest2: 'jeong' | 'da';

function liTest3(a: 'hello'): 1 | 0 {
    return 1;
}
liTest3('hello');

/*
    Q. 1. 가위 or 바위 or 보 중 1개 입력가능
       2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야 함
*/
function quizTest(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
    return [a];
}
quizTest('가위');

/*
    const 변수의 한계
    => const 업그레이드 버전 == literal type
*/

// literal type 의 문제점
var 자료 = {
    name: 'jeong',
};

function 내함수(a: 'jeong') {}
// 내함수('jeong');
// 내함수(자료.name); // 에러
/*
    why?
    자료.name 의 type 은 string 이다.
    내함수의 파라미터의 type은 jeong 이기 때문에 type 에러남

    => 이걸 해결하기 위해서는?
    1. objeoct 만들때 타입지정 하기
        var 자료 : {name : 'jeong'} = {
            name: 'jeong',
        };
    
    2. as 사용하기
        내함수(자료.name as 'jeong');

    3. as const 키워드 사용
    - object value 값을 그대로 타입으로 지정해줌
    - object 속성들에 모두 readonly 붙여줌

        var 자료 = {
            name: 'jeong',
        } as const;
        // => 이 object는 literal type 지정 알아서 해줘
*/
