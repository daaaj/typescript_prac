// 타입 변수에 담아 쓰기 type 키워드 사용 & readonly
var ani = { name: 'kim', age: 20 };
/*
    typescript 사용하면 object자료 수정도 막을 수 있다
    => readonly 키워드 사용
*/
var born = { region: 'seoul' };
// born = 'busan';
born.region = 'busan'; // 수정 가능
var girl = { name: 'jeong' };
var girl2 = { name: 'jeong' };
girl2.name = 'da';
var q3Obj = { name: 'kim', phone: 123, email: 'abc@naver.com' };
