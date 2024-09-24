import { useState } from "react";

interface CounterByProps {
  initialState: number;
}

export const CounterBy = ({ initialState }: CounterByProps) => {
  const [counter, setCounter] = useState({
    counter: initialState,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounter((prev) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter By : {counter.counter}</h1>
      <h1>Click : {counter.clicks}</h1>
      <button onClick={() => handleClick(1)}>Counter + 1</button>
      <button onClick={() => handleClick(5)}>Counter + 5</button>
    </>
  );
};
