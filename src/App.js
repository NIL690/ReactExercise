import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const minus = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <button onClick={minus}>-</button>
        <span>Count:{count}</span>
        <button onClick={add}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
