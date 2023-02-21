// export const calculaterActionTypes = {
//   ADD: "ADD",
//   SUBTRACT: "SUBTRACT",
//   DIVIDE: "DIVIDE",
//   MULTIPLY: "MULTIPLY",
// };

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};


export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.result += action.payload
    },
    subtruct: (state, action) => {
      state.result -= action.payload
    },
    divide: (state, action) => {
      state.result /= action.payload
    },
    multiply: (state, action) => {
      state.result *= action.payload
    },
  }
})

export const calculatorActions = calculatorSlice.actions

// export const calculatorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case calculaterActionTypes.ADD:
//       return {
//         ...state,
//         result: state.result + action.payload,
//       };
//     case calculaterActionTypes.SUBTRACT:
//       return {
//         ...state,
//         result: state.result - action.payload,
//       };
//     case calculaterActionTypes.DIVIDE:
//       return {
//         ...state,
//         result: state.result / action.payload,
//       };
//     case calculaterActionTypes.MULTIPLY:
//       return {
//         ...state,
//         result: state.result * action.payload,
//       };
//     default:
//       return state;
//   }
// };
