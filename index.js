import React from "react";
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    React.createElement("div", {}, [
      React.createElement("button", {
        onClick: () => setCount(count + 1),
      }, "Increment"),
      React.createElement("h1", {}, count),
    ])
  )
}

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));
