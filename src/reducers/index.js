import { addReducer } from "reactn";

export default function combineReducers(){
  addReducer('increment', (global, dispatch, x = 1) => ({
    tuananh: global.tuananh + x
  }));
}

export const incrementReducer = (global, dispatch, action) => ({
  tuananh: global.tuananh + action.amount,
});

export const decrementReducer = (global, dispatch, action) => ({
  tuananh: global.tuananh - action.amount,
});