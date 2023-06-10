// 객체(object), 클래스(class)
const x = 1;
const y = 2;
const obj = {
    x: x,
    y: y,
    // 메서드(method): 객체가 가지고 있는 함수
    log: function () {
        console.log(`x = ${x}, y = ${y}`);
    },
};

console.log(obj); // { x: 1, y: 2, log: [Function: log] }

obj.log(); // x=1, y=2

// ES6(ECMAScript2015)부터 바뀐 내용:
const obj2 = {
    x, // x: x, 간단히 표현
    y,
    // function 키워드 없이 메서드 선언이 가능
    log() {
        console.log(`x = ${x}, y = ${y}`);
    },
};

console.log(obj2); // { x: 1, y: 2, log: [Function: log] }
obj2.log();

// class 키워드가 도입되기 전(ES5 이전)
// 생성자 함수()를 사용해서 객체의 모양을 선언
function Book(title, author, publisher, price) {
    // properties
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
    // method
    this.discount = function (ratio) {
        return this.price * (1 - ratio);
    };
}

const book1 = new Book('리액트를 다루는 기술', '김민준', '길벗', 42_000);  // 숫자는 천단위 '_' 사용
console.log(book1);
console.log(book1.discount(0.1));

// ES6부터 class 키워드를 사용해서 객체의 모양을 정의
// 클래스에서 변수를 선언할 때 var, const, let과 같은 키워드를 사용하지 않음
// 클래스에서 메서드를 선언할 때 function 키워드를 사용하지 않음
// 인스턴스 변수 - 객체가 생성된 후 사용할 수 있는 속성(변수)들
class MyBook {
    // 생성자 함수:
    constructor(title, author, publisher, price) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
    }

    // 메서드:
    discount(ratio) {
        return this.price * (1 - ratio);
    }
}

// class를 사용했을 때 생성자는 클래스 이름으로 호출
const book2 = new MyBook('리액트를 다루는 기술', '김민준', '길벗', 42_000); // -> 클래스의 선언된 constructor()를 호출
console.log(book2);
console.log(book2.discount(0.2));

// 상속, override
// 도형
class Shape {
    constructor(x, y) {
        this.move(x, y);  // 시작점
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {  // 넓이 
        return 0;
    }
}

// 상속 : 원은 도형이다.
// 도형(Shape) : 부모 타입(상위 타입), 원(Circle) : 자식 타입(하위 타입)
// 사각형은 도형이다
// Shape : Parent(Super), Rectangle : Child(Sub)

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);  // 부모 클래스의 생성자를 호출, Shape의 constructor 호출
        this.radius = radius;
    }

    // override : 부모가 가지고 있는 메서드를 재정의 하는 것
    area() {
        return 3.14 * this.radius * this.radius;
    }
}

const circle = new Circle(0, 0, 10);
console.log(circle); // circle 객체 출력 Circle { x: 0, y: 0, radius: 10 }
circle.move(1, 2);  // 부모로부터 상속받은 메서드를 사용
console.log(circle); // Circle { x: 1, y: 2, radius: 10 }
console.log(circle.area());

