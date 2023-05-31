// 함수에 타입 지정하는 법 & void 타입
// 파라미터, return 값 타입 지정 가능
function func0(a) {
    return a * 2;
}
// return값이 없을 때 => void 타입
// 실수로 return하는 걸 막을 수 있다
function func1(a) {
    // return a +2; // 에러남
    a + 2;
}
/*
    JavaScript와 다른점
    - 타입지정된 파라미터는 필수로 값 넘겨야함
    
    but, 파라미터가 옵션일 경우
    => ? 사용

    ** ? 연산자 **
    타입 | undefined 와 같다
    = undefiend 가 포함 된 union type을 만드는 것과 같음
*/
function func3(a) { }
func3();
function func4(a) {
    // console.log(a + 2); // 에러 => 엄격한 검사
    // 이럴떈 narrowing 사용
}
func3(10);
/*
    Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
    아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
    파라미터와 return 타입지정도 잘 해봅시다.
*/
function q1(a) {
    if (a === undefined) {
        console.log('이름이 없습니다');
    }
    else {
        console.log('안녕하세요 ' + a);
    }
}
q1('홍길동');
q1();
/*
    Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
    예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
    숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
    숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
*/
function q2(a) {
    var result = a.toString().length;
    return result;
}
console.log(q2(245));
/*
    Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
    1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
    2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
    3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
*/
function q3(a, b, c) {
    var result = 0;
    result += a;
    if (b) {
        result += 500;
    }
    if (c === '상') {
        result += 100;
    }
    if (result >= 600) {
        return '결혼가능';
    }
}
console.log(q3(700, false, '중'));
console.log(q3(100, false, '상'));
