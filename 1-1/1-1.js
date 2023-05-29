// 변수 타입 지정
var str = 'kim';
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
var strArr = ['kim', 'park'];
// 이 변수엔 stirng 담긴 array만 들어올 수 있다
var obj = { name: 'kim' };
// name key값은 string만 들어올 수 있다
// ? : name 속성이 있을 수도, 없을 수도 있다
/*
    Union type
    - 다양한 타입이 들어올 수 있다
*/
var unionTest = 123;
var typeTest = 123;
// = let typeTest: string | number = 123
/*
    함수 타입 지정
    - 파라미터,  리턴값에 타입 지정 가능
    - return값 없을 시 타입은 : void
*/
function func(x) {
    return x * 2;
}
// func('일이삼') // 에러남
func(123);
// let jeong:Member = [123, 'true']; // 에러남
var jeong = [123, true];
var da = { name: 'jeong', age: '123' };
/*
    class 타입 지정
*/
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
