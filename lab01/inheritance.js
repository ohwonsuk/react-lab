class Component {
    // 생성자
    constructor(props) {
        this.props = props;
    }
}

const comp1 = new Component({ name: '홍길동', age: 16 });
console.log(comp1.props);

// MyComponent : 하위 클래스, 자식 클래스
// Component : 상위 클래스, 부모 클래스
class MyComponent extends Component {
    constructor(props, enable) {
        super(props); // 상위 클래스의 생성자를 명시적으로 호출.
        this.enable = enable
    }
    render() {
        return `Hello, ${this.props.name}.`;
    }
}

const comp2 = new MyComponent({ name: "그린아이티", age: 10 }, true);
console.log(comp2.props);
console.log(comp2.render());