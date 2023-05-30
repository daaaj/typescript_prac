// 기본 타입 정리 (primitive types)
var 이름 = 'kim';
var 나이 = 50;
var 결혼 = null; // undefined 도 가능
// array 자료형
var 회원들 = ['kim', 'park'];
// object 자료형
var 회원들2 = { member1: 'kim', member2: 'park' };
/*
    무조건 다 타입 지정할 필요 없음
    타입지정은 원래 자동으로 된다 = 타입지정 문법 생략 가능
*/
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var myName = 'jeong';
var myAge = 20;
var myCity = 'seoul';
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
var myFavorite = { title: '노래', singer: '가수' };
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
