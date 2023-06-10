// 배열
// mutable(원본 배열이 변경) vs immutable(원본 배열은 유지, 새로운 배열 리턴) 메서드

const arr1 = [];
const newLength = arr1.push(100);
// -> 원본 배열 arr1에 새로운 원소를 추가하고, 새로운 배열의 길이를 리턴함. mutable
console.log(arr1);
console.log(`length = ${newLength}`);

const arr2 = [];
const newArr = arr2.concat(100).concat(200); // immutable mtehod 함수내에서 원본배열 가공시 사용
// -> concat()은 원본 배열을 변경하지 않고, 원소를 추가한 새로운 배열을 만들어서 리턴
console.log(arr2);
console.log(newArr);

const arr3 = [1, 2, 3, 4, 5];
const popResult = arr3.pop();
// -> pop()은 배열의 가장 마지막 원소를 삭제(꺼냄). 원본 배열이 변경
// 리턴 값은 배열에서 꺼내진(삭제된)값. 만약 빈 배열인 경우에는 undefined를 리턴
console.log(arr3);
console.log(`popResult = ${popResult}`); //popResult = 5

const arr4 = [1, 2, 3, 4, 5];
const sliced = arr4.slice(0, arr4.length - 1); // 인텍스 0 이상 4미만 범위의 원소들을 자름
// -> slice()는 잘라낸 배열의 복사본을 리턴. immutable method 해당
console.log(arr4);
console.log(sliced); //[ 1, 2, 3, 4 ]

// ES6에서 새롭게 추가된 Array 함수들
// forEach, filter, map, reduce
// forEach(callback), filter(callback), map(callback)
// forEach, filter, map의 callback함수의 argument들:
// - value : 배열에서 반복하면서 순서대로 꺼내는 값
// - index : 배열의 인덱스
// - array : 배열 자체
// callback을 작성할 때는 필요한 argument들만 선언해도 됨

const front = ['HTML', 'CSS', 'Javascript', 'TypeScript'];

// forEach : 순사대로 반복하면서 수행할 작업
front.forEach((value, index) => console.log(`[${index}] ${value}`));
front.forEach(function (value) {
    console.log(value);
});   // 예전의 콜백함수 이용방법

// filter : 순서대로 반복하면서 조건에 맞는 원소들을 찾음
const filtered = front.filter((value) => value.length >= 5);  // 리턴값이 boolean이 될 수 있는 함수를 만들어주면 됨
console.log(filtered);  // [ 'Javascript', 'TypeScript' ]

// map : 순서대로 반복하면서 원소를 다른 값으로 변환
const mapped = front.map((value) => value.toLowerCase());
console.log(mapped);  // [ 'html', 'css', 'javascript', 'typescript' ]

// 배열 front에서 5글자 이상인 문자열들을 대문자로 변환 후 출력
front
    .filter((value) => value.length >= 5)
    .map((value) => value.toUpperCase())
    .forEach((value) => console.log(value));

// arrow function:
// (param, ...) => { statement; ...}
// (param, ...) => statement // 함수 body에 실행문이 하나만 있는 경우
// (prram, ...) => 리턴값 // 함수 body에 실행문이 하나만 있고, 실행문이 리턴문인 경우

// reduce(callback, initialValue) : 배열의 모든 원수를 순회하여 값 1개를 리턴함
// callback 함수의 argument들
// - previousValue : callback함수에서 이전에 리턴된 값, 최초 호출할때 initalValue값을 사용
// - currentValue : 반복하고 있는 현재 배열의 값
// - currentIndex : 반복하고 있는 현재 배열의 인덱스
// - array : 반복하고 있는 배열 자체

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => (total += current), 0);
console.log(`sum = ${sum}`); // sum = 15

numbers.reduce(function (total, current) {
    total += current;
    return total;
}, 0);

const factorial = numbers.reduce((total, current) => (total *= current), 1);
console.log(`factorial = ${factorial}`);  // factorial = 120

// 쿼리스트링을 분석해서 객체로 변환하는 함수:
const queryString = 'apple=10&banana=20&order=ok';
//  -> { apple: 10, banana: 20, order: 'ok' }

function parse(qs) {
    let result = {};
    const chunks = qs.split('&'); // -> ['apple=10', 'banana=20', 'order=ok']
    for (let x of chunks) {
        // const part = x.split('='); // -> ['apple', '10']
        // const key = part[0];
        // const value = part[1];
        const [key, value] = x.split('=');
        result[key] = value
    }
    return result;
};

console.log(parse(queryString)); // { apple: '10', banana: '20', order: 'ok' }

//'apple=10&banana=20&order=ok'
function parse2(qs) {
    let result = {};
    qs.split('&')
        .forEach((value) => {
            const [k, v] = value.split('=');
            result[k] = v;
        });
    return result;
}

console.log(parse2(queryString)); // { apple: '10', banana: '20', order: 'ok' }

//'apple=10&banana=20&order=ok'
function parse3(qs) {
    return qs.split('&')  // ['apple=10', 'banana=20', 'order=ok']
        .map((value) => {  // value='apple=10'
            const [k, v] = value.split('='); // k = apple, v = 10
            return { k, v }; // { k : k, v : v} 을 간단히 표기하는 문법 - ES6부터
        })
};

console.log(parse3(queryString));

function parse4(qs) {
    return qs.split('&')  // ['apple=10', 'banana=20', 'order=ok']
        .map((value) => {  // value='apple=10'
            const [k, v] = value.split('='); // [k, v] = [apple, 10]
            return { k, v }; // {k : apple, v : 10}
        }) // [{k : apple, v : 10}, {k : banana, v : 20}, ...] 배열 생성
        .reduce((prev, curr) => {  // prev에 초기에 빈 객체 {} 할당
            prev[curr.k] = curr.v; // {apple : 10}
            return prev;
        }, {}) // 배열을 객체로 변경
};

console.log(parse4(queryString)); // { apple: '10', banana: '20', order: 'ok' }


