const initialState = {
  countWin: 0,
  countGame: 0,
  clientChoose: "tài",
  dice: [1, 1, 1],
};

const xucXacReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default xucXacReducer;
