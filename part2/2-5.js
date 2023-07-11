// class애서 사용가능한 protected, static 키워드
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2_5 = /** @class */ (function () {
    function User2_5() {
        // private : class 안에서만 사용가능
        this.x = 10;
        // protected : class 안에서만 사용가능
        // => extends 된 class는 사용가능
        this.a = 10;
    }
    return User2_5;
}());
var NewUser2_5 = /** @class */ (function (_super) {
    __extends(NewUser2_5, _super);
    function NewUser2_5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // extends시 User2_5 class 가 복사된다
    // 여기서는 User2_5 class 의 private 는 사용못함
    // protected는 사용가능
    NewUser2_5.prototype.doThis = function () {
        this.a = 20;
    };
    return NewUser2_5;
}(User2_5));
// static : class에 직접 부여되는 속성
var User_static = /** @class */ (function () {
    function User_static() {
        this.y = 20;
    }
    User_static.x = 10;
    return User_static;
}());
var son = new User_static();
// console.log(son);
// {x : 10, y : 20} static 키워드 없을때
// {y : 20} static 키워드 있을때 (부모만 사용가능 + 자식에게 안물려줌)
// console.log(son.x) // 에러
// console.log(User_static.x); // 사용가능
/*
    public / private / protected + static 키워드 사용가능
*/
var User2_5Test = /** @class */ (function () {
    function User2_5Test() {
        // intro = '전문가입니다.';
        this.intro = User2_5Test.skill + ' 전문가입니다.';
    }
    // 앞에 어떤 전문가인지 붙이고 싶다
    /*
        skill = 'js'
        intro = this.skill +  ' 전문가입니다.'
        => 출력시 { skill : "js", intro : "js 전문가입니다."}
        => skill 은 출력안되게 하고 싶다 = static 키워드 사용
    */
    User2_5Test.skill = 'js';
    return User2_5Test;
}());
var soo = new User2_5Test();
// console.log(soo);
// soo2 는 ts 전문가입니다 로 출력하고 싶다
User2_5Test.skill = 'ts';
var soo2 = new User2_5Test();
// console.log(soo2); // { intro : "ts 전문가입니다." }
/*
    Q1. 다음 x, y, z 속성의 특징을 설명해보십시오.
*/
var User2_5Q1 = /** @class */ (function () {
    function User2_5Q1() {
        this.z = 30; // 클래스 내부, extends 된 class 내부에서만 수정, 접근 가능 + 자식 사용 O
    }
    User2_5Q1.x = 10; // 클래스 내에서만 수정, 접근 가능 + 자식 사용 X
    User2_5Q1.y = 20; // 클래스 내부, 외부에서 수정, 접근 가능 + 자식 사용 X
    return User2_5Q1;
}());
var testq1 = new User2_5Q1();
// console.log(testq1);
/*
    Q2. x 속성에 숫자를 더해주는 함수가 필요합니다.

        저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
        그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
        (조건) private static x = 10; 이 코드 수정금지
*/
var User2_5Q2 = /** @class */ (function () {
    function User2_5Q2() {
    }
    // 클래스명.속성명 사용했기때문에 static 사용
    User2_5Q2.addOne = function (a) {
        User2_5Q2.x += a;
    };
    User2_5Q2.printX = function () {
        console.log(User2_5Q2.x);
    };
    User2_5Q2.x = 10;
    User2_5Q2.y = 20;
    return User2_5Q2;
}());
User2_5Q2.addOne(3); //이렇게 하면 x가 3 더해져야함
User2_5Q2.addOne(4); //이렇게 하면 x가 4 더해져야함
User2_5Q2.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
/*
    Q3. 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
        이렇게 네모.draw()를 할 때마다
        index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
        가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.

        Square라는 class를 어떻게 만들면 될까요?
        html css 기초학력이 흔들리는 분들은 좌절을 느낄 수 있는데 생각보다 별거 아닙니다.
        그리고 심심하면 타입지정도 해봅시다.
*/
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var i = Math.random();
        var square = "<div style=\"position:relative;\n            top : ".concat(i * 400, "px;\n            left : ").concat(i * 400, "px;\n            width : ").concat(this.width, "px;\n            height : ").concat(this.height, "px;\n            background : ").concat(this.color, "\">/<div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
