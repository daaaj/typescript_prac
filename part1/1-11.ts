// object에 타입 지정시 interface 사용

type SquareType = { color: string; width: number };
/*
    type 처럼 interface 사용 가능
    => class 만드는 법이랑 유사함 !!
*/
interface SquareInterface {
    color: string;
    width: number;
}

let square: SquareInterface = { color: 'red', width: 100 };

/*
    interface의 장점
    - extends 로 복사 가능
*/
interface Student {
    name: string;
}
// extends 사용하면 student의 속성 복붙된다
interface Teacher extends Student {
    // name: string; // student의 name과 중복이 되네? => extends 사용
    age: number;
}
let 학생: Student = { name: 'kim' };
let 선생: Teacher = { name: 'kim', age: 20 };

/*
    type alias는 & 기호가 유사한 기능이다
    = intersection type
    = 두 타입을 전부 만족하는 타입이라는 뜻
*/

/*
    type VS interface 의 차이점

    type : 중복선언 불가능
    interface : 중복선언 가능
*/

// interface는 중복 선언시 score라는 속성이 합쳐짐
interface Student {
    // score: number;
}
// type은 중복 선언시 에러 남
type 타입중복 = { name: string };
// type 타입중복 = {age : number} // 에러

/*
    interface의 장점 

    외부 라이브러리 같은 경우 interface를 많이 사용
    추후 타입에 추가하는게 좀 더 유연하게 가능하다
    => 중복선언 가능하기 때문 !!

    재사용이 많이 될 것 같으면 interface 사용하는게 좋음
*/

/*
    extends 사용 시 중복속성 발생하면 ?
    => 에러 잡아줌
    
    interface Student {
        name: string;
    }

    interface Teacher extends Student {
        name : number; // 에러
        age: number;
    }

    & 사용 시 중복속성 발생하면 ?
    => 미리 에러가 발생 안함
    => 실제 type을 사용하면 그때 에러 발생함
    
    type Animal = { name : string }
    type Cat = { name : number } & Animal // 에러 안남
    
    let 실제사용시 : Cat = { name : 'kim' } // 에러

*/

/*
    Q1. interface 이용해서 간단하게 타입을 만들어봅시다
*/
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
let 상품: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };

/*
    Q2. array 안에 object 여러개가 필요합니다.
    object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
*/
interface Cart {
    product: string;
    price: number;
}
let 장바구니: Cart[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];

/*
    Q3. 위에서 만든 타입을 extends 해봅시다.
    갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
    { product : '청소기', price : 7000, card : false }
    위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
*/
interface NewCart extends Cart {
    card: boolean;
}

/*
    Q4. object 안에 함수를 2개 넣고 싶은데요 
    1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
    2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
    이 object 자료를 어떻게 만들면 될까요? 
    interface를 이용해서 object에 타입지정도 해보십시오. 
*/
interface Calc {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
let q4Test: Calc = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
};
