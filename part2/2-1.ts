// 함수 rest 파라미터, destructuring할 때 타입지정

/*
    rest parameter
    - ... 붙이면 파라미터 여러개 들어올 수 있다
    - 다른 파라미터 있는 경우, 맨 뒤에만 사용 가능
        function func(num, ...a) { }
    - 타입지정시 array 형태로 들어오기 때문에 array로 타입 지정해줘야 함
*/
function func2_1(...a: number[]) {
    console.log(a);
}
func2_1(1, 5, 3, 6, 4, 8, 6);

/*
    ... spread operator 문법의 용도
    ( 함수 파라미터로 사용하면 = rest parameter )

    array나 object 앞에 사용하면
    = 괄호 벗겨주세요 문법
*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2]; // [1,2,3,4,5] 출력
// console.log(arr3);

//  destructuring

let arr4 = ['안녕', 100];
// let 변수1 = arr[0];
// let 변수2 = arr[1];
// => 변수에 각각 index 지정해서 넣으면 귀찮...
//    그래서 아래와 같이 사용 가능
let [변수1, 변수2] = ['안녕', 100];
let { student, grade } = { student: true, grade: 'a' };

// 함수 파라미터에 destructuring
let 오브젝트 = { student: true, grade: 'a' };

/*
function 함수(a, b) {
    console.log(a, b);
}
함수(오브젝트.student, 오브젝트.grade); // => 각각 지정해서 넣기 귀찮다!!
*/

/*
// 변수 맞춰서 통째로 넣기~
function 함수({ student, grade }) {
    console.log(student, grade);
}
*/

// type 지정하기
type 함수Type = {
    student: boolean;
    grade: string;
};

function 함수({ student, grade }: 함수Type) {
    console.log(student, grade);
}
함수({ student: true, grade: 'a' });

/*
    Q1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
    최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
    (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
    (조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/
function q1Test2_1(...a: number[]): void {
    let result = 0;
    a.forEach((i) => {
        if (result < i) {
            result = i;
        }
    });
    console.log(result);
}
q1Test2_1(6, 3, 7, 2);

/*
    Q2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

    함수( { user : 'kim', comment : [3,5,4], admin : false } )

    어떻게 코드를 짜야할까요?
    (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
    (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/
type q1Test2_2Type = {
    user: string;
    comment: number[];
    admin: boolean;
};
function q1Test2_2({ user, comment, admin }: q1Test2_2Type): void {
    console.log(user, comment, admin);
}
q1Test2_2({ user: 'kim', comment: [3, 5, 4], admin: false });

/*
    Q3. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

    함수( [40, 'wine', false] )

    어떻게 코드를 짜야할까요?
    (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
    (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/
function q1Test2_3([...a]) {
    console.log(a);
}
q1Test2_3([40, 'wine', false]);
