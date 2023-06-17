import { useRef } from "react";

const FowardRef = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <h2>다른 컴포넌트 DOM 참조</h2>
            <nav>
                <button onClick={handleClick}>클릭</button>
            </nav>
            <MyInput myRef={inputRef} />
        </>
    );
};

const MyInput = ({ myRef }) => {
    return (
        <>
            <input ref={myRef} placeholder="메시지 입력..." />
        </>
    );
};

export default FowardRef;