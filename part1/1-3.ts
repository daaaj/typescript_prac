// 타입을 미리 정하기 애매할 때 (union type, any, unknown)

/*
    Union type
    - type2개 이상 합쳐진 새로운 타입
    - | 연산자 사용
    - or 연산자 같은 역할
*/
// 이 변수엔 string 또는 number가 들어올 수 있다
let name1: string | number = 'kim';
let age: string | number = 123; // 괄호 사용 가능

// array, object
let arr: (number | string)[] = [1, '2', 3];
let obj1: { a: number | string } = { a: '123' };

/*
    any type
    - 모든 자료형 허용해준다
    - 이걸 사용한면 typescript 사용하는 의미가 없음
    - 타입실드 해제문법

    => 타입 관련 버그가 나도 잡아주지 않음
*/
let anyType: any;
anyType = 123;
anyType = 'jeong';
anyType = [];

// 에러 안남(버그 안잡아줌)
let anyTest: string = anyType;

/*
    unknown type
    - 모든 자료형 허용해준다 (any와 유사)
    - any보다 안전함

    => 타입 관련 버그 잡아줌
*/
let unknownType: unknown;
unknownType = 123;
unknownType = {};

// let unTest: string = unknownType; // 에러남
/*
    unTest 변수는 string 만 올 수 있기 때문에 에러 잡아줌
*/

/*
    타입스크립트는 타입 엄격하게 지켜햐함
    - 간단한 수학연산도 타입 맞아야함
*/

let age1: string | number;
// age1 + 1; // 에러남
/*
    why? 
    union type은 string | number 라는 새로운 타입을 만들어 낸거임
    그래서 안됨(엄격)

    string + 1 => 허용
    number + 1 => 허용
    string | number + 1 => 비허용
*/

// Q1. 다음 변수 4개에 타입을 지정해봅시다.
let user: string = 'kim';
let age2: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age2, married];

// Q2. 학교라는 변수에 타입지정해보십시오.
let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
