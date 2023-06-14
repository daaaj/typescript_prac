// narrowing 할 수 있는 방법 더 알아보기

// null & undefined 타입체크
function func2_2(a: string | undefined) {
    // if ~ else 문으로 체크

    // && 연산자 사용하여 체크
    if (a && typeof a === 'string') {
        // a === undefined 면 if문 실행 X
        // a === string 면 if문 실행 O
    }

    /*
        && 연산자의 다른기능

        && 비교할때 자료형을 넣으면 
        && 사이에서 처음 등장하는 falsy 값을 찾아주고
        그게 아니면 마지막 값을 남겨준다
        (falsy값 : null, undefined, NaN 이런 값들을 의미)

        ex) 1 && null && 3 // null 남음
            undefined && '안녕' && 100  // undefined 남음
    */
}

/*
    in 키워드로 object narrowing

    - 속성명 in object자료
    => 사용시 해당 오브젝트에만 있는 속성 갖다써야함
*/
type Fish = { swim: string };
type Bird = { fly: string };

function func2_21(animal: Fish | Bird) {
    if ('swim' in animal) {
        animal.swim;
    }
}

/*
    instanceof 연산자로 object narrowing
    
    - 오브젝트 instanceof 부모class
    => 오브젝트의 부모가 누구인지
*/

/*
    비슷한 object 타입일 경우
    literal type 강제로 만들어 두기..
    (애초에 속성이 같으면 합치기..)
*/
type Car1 = {
    wheel: '4개';
    color: string;
};
type Bike1 = {
    wheel: '2개';
    color: string;
};
function func2_22(a: Car1 | Bike1) {
    // in : 속성명이 같기때문에 사용불가
    // instanceof : 부모class가 없기 때문에 사용불가
    if (a.wheel === '4개') {
        console.log('이 차는 ' + a.color);
    } else {
        console.log('이 차는 ' + a.color);
    }
}
