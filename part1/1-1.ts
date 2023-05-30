// 변수 타입 지정
let str: string = 'kim';
// str = 123; // 에러 남

/*
    타입
    string
    number
    boolean
    null
    undefined
    bigint
    []
    {} ...
*/

let strArr: string[] = ['kim', 'park'];
// 이 변수엔 stirng 담긴 array만 들어올 수 있다

let obj: { name?: string } = { name: 'kim' };
// name key값은 string만 들어올 수 있다
// ? : name 속성이 있을 수도, 없을 수도 있다

/*
    Union type
    - 다양한 타입이 들어올 수 있다
*/
let unionTest: string | number = 123;
// 이 변수에는 string 또는 number만 들어올 수 있다

/*
    Type alias
    - 타입을 변수에 담아서 사용할 수 있다
    - 첫글자는 대문자로 작명

    type 변수명 = 타입
*/
type MyType = string | number;
let typeTest: MyType = 123;
// = let typeTest: string | number = 123

/*
    함수 타입 지정
    - 파라미터,  리턴값에 타입 지정 가능
    - return값 없을 시 타입은 : void 
*/
function func(x: number): number {
    return x * 2;
}
// func('일이삼') // 에러남
func(123);

/*
    array에 쓸 수 있는 tuple 타입
    - 타입 지정한 순서대로 값이 와야 함 
*/
type Member = [number, boolean];
// let jeong:Member = [123, 'true']; // 에러남
let jeong: Member = [123, true];

/*
    object에 타입 지정해야할 속성이 너무 많을 때
    - ex : Member2에 name, age, address 등 X 100... 일때
         => 한꺼번에 지정할 수 있음
*/
type Member2 = {
    [key: string]: string;
    // [key : string] = 모든 object 속성
    // => 글자로 된 모든 object 속성의 타입은 string
};
let da: Member2 = { name: 'jeong', age: '123' };

/*
    class 타입 지정
*/
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
