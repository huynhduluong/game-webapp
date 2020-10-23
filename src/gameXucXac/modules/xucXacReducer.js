import { CHOOSE_GAME } from "./constant";

const initialState = {
  countWin: 0,
  countGame: 0,
  clientChoose: "tài",
  dice: [1, 1, 1],
};

const xucXacReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CHOOSE_GAME: {
      state.clientChoose = actions.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default xucXacReducer;
