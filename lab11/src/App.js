import { useRef } from "react";
import FowardRef from "./components/ForwardRef";
import ForwardRefEx from "./components/ForwardRefEx";
import RefDOM from "./components/RefDOM";
import RefVsState from "./components/RefVsState";
import Stopwatch from "./components/Stopwatch";

function App() {
  const ref = useRef(0);
  console.log(ref);
  //-> useRef 함수는 current 속성 만을 갖는 자바스크립트 객체를 리턴.

  const handleClick = () => {
    // ref 객체의 current 값을 1 증가. alert 창을 띄움.
    ref.current++;
    alert(`클릭 ${ref.current}`);
  };

  return (
    <div>
      <h1>useRef</h1>
      <div>
        <button onClick={handleClick}>클릭!</button>
      </div>

      <hr />
      <RefVsState />

      <hr />
      <Stopwatch />

      <hr />
      <RefDOM />

      <hr />
      <FowardRef />

      <hr />
      <ForwardRefEx />
    </div>
  );
}

export default App;
