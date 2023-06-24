//determines how to compute the next state
//array of two values returned 
//1.reactive state to be shown on the UI
//2.Instead of a function that updates the state we use one that dispatches an action obj of any type)
//unction determines how the next state should be computed based on the current state and the dispatched action.
import { useReducer } from "react";

function AppReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(AppReducer, 0);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}
