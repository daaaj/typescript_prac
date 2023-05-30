// 기본 타입 정리 (primitive types)

let 이름: string = 'kim';
let 나이: number = 50;
let 결혼: null = null; // undefined 도 가능

// array 자료형
let 회원들: string[] = ['kim', 'park'];

// object 자료형
let 회원들2: { member1: string; member2: string } = { member1: 'kim', member2: 'park' };

/*
    무조건 다 타입 지정할 필요 없음
    타입지정은 원래 자동으로 된다 = 타입지정 문법 생략 가능
*/

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let myName: string = 'jeong';
let myAge: number = 20;
let myCity: string = 'seoul';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let myFavorite: { title: string; singer: string } = { title: '노래', singer: '가수' };

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: { member: string[]; days: number; started: boolean } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
