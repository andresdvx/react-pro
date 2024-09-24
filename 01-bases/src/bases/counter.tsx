import { useState } from "react";

interface CounterProps {
    initialState : number
}

export const Counter = ({initialState} : CounterProps) => {
  const [counter, setCounter] = useState<number>(initialState);

  const handleClick = () => {
    setCounter((prev) => prev + 1);    
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Counter</button>
    </>
  );
};

