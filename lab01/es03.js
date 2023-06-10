// 함수
// function functionName(param ...) { ... }
function add(x, y) {
    console.log(`x = ${x}, y= ${y}`);
    return x + y;
}

let result = add(1, 2);
console.log(result);

result = add("abc", 1); //JS 함수는 argument 타입을 검사하지 않음
console.log(result);

result = add(1);  //JS 함수는 argument 개수를 검사하지 않음, y 값은 undefinded (값이 할당되지 않은 상태)
console.log(result); // 결과는 NaN (Not a Number)

// default argument
function add2(x = 0, y = 0) {
    console.log(`x = ${x}, y= ${y}`);
    return x + y;
}

console.log(add2(1, 2)); // 초기값 대신 값을 재할당
console.log(add2());

const myFunc = add2;
console.log(myFunc);
console.log(myFunc(10, 20));

function plusN(n) {
    let f = function (x) {
        return x + n;
    };
    return f;
};   // return 값이 함수임

let plusOne = plusN(1);
console.log(plusOne);
console.log(plusOne(100)); // 결과 101

let plusTen = plusN(10);
console.log(plusTen(100)); // 결과 110

// 화살표 함수 (arrow function)
// let multiply = function (x,y) { return x * y;};
let multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 결과 6

//let hello = function () { return '안녕하세요...';};
let hello = () => "안녕하세요...";
console.log(hello());

function myFilter(arr, func) {
    const result = []; //빈 배열
    for (let x of arr) {
        if (func(x)) {
            result.push(x);
        }
    }
    return result;
} // if문에 들어가므로 func 은 true, false 로 나와야 함

const numbers = [1, -2, -3, 4, 5, 6];
result = myFilter(numbers, function (x) {
    return x > 0;
});

console.log(result);

result = myFilter(numbers, (x) => x < 0);
console.log(result);

