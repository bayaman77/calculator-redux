import { useDispatch, useSelector } from "react-redux";
import { calculaterActionTypes, store } from "../store/calculator/calculatorReducer";
import classes from "./Counter.module.css";

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: calculaterActionTypes.ADD, payload: 5 });
  };
  const divideHandler = () => {
    dispatch({ type: calculaterActionTypes.DIVIDE, payload: 4 });
  };
  const subtractHandler = () => {
    dispatch({ type: calculaterActionTypes.SUBTRACT, payload: 10 });
  };
  const multiplyHandler = () => {
    dispatch({ type: calculaterActionTypes.MULTIPLY, payload: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculater</h1>
      <div className={classes.value}>Result:{result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator;
