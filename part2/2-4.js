// public, private
/*
    public
    - 모든 자식들이 이용 가능
    - public 키워드는 없어도 기본으로 설정 되어있음
*/
var User_public = /** @class */ (function () {
    function User_public(a) {
        // name = 'jeong';
        this.name = 'jeong';
        this.name = a;
    }
    return User_public;
}());
var 유저1 = new User_public('dada');
유저1.name = '까꿍';
/*
    private
    - class {} 안에서만 수정, 사용가능

    ** class 밖에서 수정한걸 사용하고 싶을때는?
    1. class 안에서 필요한 함수 제작
    2. 자식들이 사용
*/
var User_private = /** @class */ (function () {
    function User_private(a) {
        this.familyName = 'jeong';
        this.name = a + this.familyName;
    }
    User_private.prototype.이름변경함수 = function () {
        this.familyName = 'kim';
    };
    return User_private;
}());
var 유저2 = new User_private('dada');
// 유저2.name = '까꿍'; // 에러
// console.log(유저2.familyName); // 에러
유저2.이름변경함수();
/*
    constructor에 public 키워드 사용시 this 생략가능
*/
var Person2_4 = /** @class */ (function () {
    /*
    name;
    age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    */
    function Person2_4(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2_4;
}());
var 자식 = new Person2_4('kim', 20);
console.log(자식); // {name : kim, age : 20}
