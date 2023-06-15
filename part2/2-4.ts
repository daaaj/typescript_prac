// public, private

/*
    public
    - 모든 자식들이 이용 가능
    - public 키워드는 없어도 기본으로 설정 되어있음
*/
class User_public {
    // name = 'jeong';
    public name = 'jeong';

    constructor(a) {
        this.name = a;
    }
}
let 유저1 = new User_public('dada');
유저1.name = '까꿍';

/*
    private
    - class {} 안에서만 수정, 사용가능

    ** class 밖에서 수정한걸 사용하고 싶을때는?
    1. class 안에서 필요한 함수 제작
    2. 자식들이 사용
*/
class User_private {
    // private name = 'jeong';
    name: string;
    private familyName: string = 'jeong';

    constructor(a) {
        this.name = a + this.familyName;
    }

    이름변경함수() {
        this.familyName = 'kim';
    }
}
let 유저2 = new User_private('dada');
// 유저2.name = '까꿍'; // 에러
// console.log(유저2.familyName); // 에러
유저2.이름변경함수();

/*
    constructor에 public 키워드 사용시 this 생략가능
*/
class Person2_4 {
    /*
    name;
    age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    */
    constructor(public name: string, public age: number) {}
}
let 자식 = new Person2_4('kim', 20);
console.log(자식); // {name : kim, age : 20}
