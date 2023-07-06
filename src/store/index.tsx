import { createStore } from 'redux';

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action: { type: any; }) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;