import "./App.css";
import { CounterBy } from "./bases/ConterBy";
import { Counter } from "./bases/Counter";

function App() {
  return (
    <>
      <Counter initialState={15} />
      <CounterBy initialState={1}/>
    </>
  );
}

export default App;
