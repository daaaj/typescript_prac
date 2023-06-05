// 타입 변수에 담아 쓰기 type 키워드 사용 & readonly

// type alias = 타입 변수
// => 변수 작명 : 첫글자는 대문자, 뒤에 type 붙이던가..

// type Animal = string | number | undefined;
// let ani: Animal = 'kim';

type Animal = { name: string; age: number };
let ani: Animal = { name: 'kim', age: 20 };

/*
    typescript 사용하면 object자료 수정도 막을 수 있다
    => readonly 키워드 사용
*/
const born = { region: 'seoul' };
// born = 'busan';
born.region = 'busan'; // 수정 가능

type Girlfriend = {
    readonly name: string;
};
const girl: Girlfriend = { name: 'jeong' };
// girl.name = 'da'; // 에러
/*
    girl.name = 'da';
    => ts 파일에서만 에디터에서 에러 띄워주는거다
       js 파일 가면 da 로 에러없이 수정 됨
*/

// object 속성 안에도 ? 사용 가능
type Girlfriend2 = {
    name?: string;
};
const girl2: Girlfriend2 = { name: 'jeong' };
girl2.name = 'da';

// union type으로 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기 = extend
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY;

// 같은 이름의 type 변수 재정의 불가능

/*
    Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
*/
type Type1 = { test: string; test2: number };
type Type2 = { test: string };
type Q1Type = Type1 & Type2; // 에러 안남

/*
    Q2. 다음 조건을 만족하는 타입을 만들어봅시다. 
    1. 이 타입은 object 자료형이어야합니다.
    2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
    3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
    4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
    type alias로 만들어보셈 
*/
type Q2Type = {
    color?: string;
    size: number;
    readonly position: number[];
};

/*
    Q3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
    1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
    2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/
type Q3Type = { name: string; phone: number; email: string };
let q3Obj: Q3Type = { name: 'kim', phone: 123, email: 'abc@naver.com' };

/*
    Q4. 다음을 만족하는 type alias를 만들어보십시오.
    1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
    3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
*/
type Q4Type = { adult: boolean };
type NewQ3Q4TYpe = Q3Type & Q4Type;
