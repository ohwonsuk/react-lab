// 함수형 컴포넌트 - state 초기값을 객체로 사용하기:

import { useState } from "react";

const MyEvent3 = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    // 전개 연산자 이용하여 form의 타입을 맞춰서 오류 발생되지 않도록 함 

    const handleChange = (e) => {
        setForm({
            ...form,  // 기존의 form 상태가 가지고 있던 값들을 복사. 
            [e.target.name]: e.target.value, // username 또는 message 값을 변경.
        });
    };

    return (
        <div>
            <h1>객체 State 초기값</h1>

            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={handleChange} />
                <input type="text" readOnly value={form.username} />
            </div>

            <div>
                <input
                    type="text"
                    name="message"
                    placeholder="message"
                    onChange={handleChange} />
                <input type="text" readOnly value={form.message} />
            </div>

            <button>Clear</button>
        </div>
    );
};

export default MyEvent3;