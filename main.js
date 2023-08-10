const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

const incrementByTenAction = {
  type: "INCREMENTBYTEN",
};

const decrementByTenAction = {
  type: "DECREMENTBYTEN",
};

const resetAction = {
  type: "RESET",
};

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENTBYTEN":
      return state + 10;
    case "DECREMENTBYTEN":
      return state - 10;
    case "RESET":
      return (state = initialState);
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const decrementButton = document.getElementById("button-decrement");
const incrementByTenButton = document.getElementById("button-incrementByTen");
const decrementByTenButton = document.getElementById("button-decrementByTen");
const resetButton = document.getElementById("button-reset");

const render = () => {
  counterRender.innerText = store.getState();
};
render();
store.subscribe(render);

incrementButton.addEventListener("click", () => {
  store.dispatch(incrementAction);
});

decrementButton.addEventListener("click", () => {
  store.dispatch(decrementAction);
});

incrementByTenButton.addEventListener("click", () => {
  store.dispatch(incrementByTenAction);
});

decrementByTenButton.addEventListener("click", () => {
  store.dispatch(decrementByTenAction);
});

resetButton.addEventListener("click", () => {
  store.dispatch(resetAction);
});
