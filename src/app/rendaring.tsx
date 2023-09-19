// レンダリング計測テスト用
import React, { useState } from "react";

// レンダリング効率が悪いプログラム
function App1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <ChildComponent count={count} />
    </div>
  );
}

// レンダリングの効率化ができているプログラム
function ChildComponent({ count }: any) {
  console.log("ChildComponent is re-rendered!");
  return <div>Count: {count}</div>;
}

function App2() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <MemoizedChildComponent count={count} />
    </div>
  );
}

const MemoizedChildComponent = React.memo(function ChildComponent({
  count,
}: any) {
  console.log("ChildComponent is re-rendered!");
  return <div>Count: {count}</div>;
});
