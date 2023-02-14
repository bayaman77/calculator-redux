import { combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import { calculatorReducer } from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  auth: AuthReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("STORE CHANGED", store.getState());
});
