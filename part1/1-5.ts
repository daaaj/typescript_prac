// 타입 확정하기 Narrowing & Assertion

/*
    type이 아직 하나로 확정되지 않은 경우
    => if문 등으로 narrowing 해줘야 조작 가능
*/
// typeof
function func1(a: number | string) {
    // console.log(a + 2); // 에러 => 엄격한 검사때문
    if (typeof a === 'number') {
        return a + 2;
    } else {
        return a + 2;
    }
}
func1(10);

function func2(a: number | string) {
    let arr: number[] = [];
    // arr[0] = a; // 에러 : a는 union type 이기 때문
    if (typeof a === 'number') {
        arr[0] = a;
    }
}
func2(10);

/*
    narrowing으로 판정해주는 문법들
    - typeof 변수
    - 속성명 in 오브젝트자료
    - 인스턴스 instanceof 부모

    => 현재 변수의 타입이 뭔지 특정지울 수 있기만 하면 다 인정해줌
*/

/*
    assertion 문법
    - 타입 덮어쓰기
    => 변수 as 타입

    용도
    - narrosing 할 때 사용(타입을 한개로 확정 지어줄 때)
      ex) let a : string = 'jeong';
          a as number; // 에러 : 타입 바꿀때 사용 X
    - 무슨 타입이 들어올지 100% 확실할 때 사용
      ex) a as number;
          func3('10'); // string 타입이 들어왔지만 에러 안남 
          => 버그를 잡아주지 않기 때문에 사용 자제하자 (비상용)
*/
function func3(a: number | string) {
    let arr: number[] = [];
    arr[0] = a as number;
}
func3(10);

/*
    Q1. 숫자여러개를 array 자료에 저장해놨는데
    가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
    이걸 클리닝해주는 함수가 필요합니다. 
    클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
    [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
*/
function q1(a: (number | string)[]) {
    let result: number[] = [];

    a.forEach((i) => {
        if (typeof i === 'string') {
            let num = Number(i);
            result.push(num);
        } else {
            result.push(i);
        }
    });
    return result;
}
console.log(q1(['1', 2, '3']));

/*
    Q2. 다음과 같은 함수를 만들어보십시오.

    let 철수쌤 = { subject : 'math' }
    let 영희쌤 = { subject : ['science', 'english'] }
    let 민수쌤 = { subject : ['science', 'art', 'korean'] }

    지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
    과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
    과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 

    철수쌤같은 선생님 object 자료를 집어넣으면 
    그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
    그리고 타입지정도 엄격하게 해보도록 합시다. 
*/
function q2(a: { subject: string | string[] }) {
    if (typeof a.subject === 'string') {
        return a.subject;
    } else if (Array.isArray(a.subject)) {
        return a.subject[a.subject.length - 1];
    } else {
        return '없음';
    }
}
console.log(q2({ subject: 'math' }));
console.log(q2({ subject: ['science', 'art', 'korean'] }));
//console.log(q2({ hello: 'hi' }));
