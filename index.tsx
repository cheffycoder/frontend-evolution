import * as React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

function App() {
  const [count, setCount] = React.useState<number>(0)

  return (
    <>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
    </>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));