import { CHOOSE_GAME, PLAY_GAME } from "./constant";

const initialState = {
  countWin: 0,
  countGame: 0,
  clientChoose: true,
  dice: [1, 1, 1],
};

const xucXacReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CHOOSE_GAME: {
      state.clientChoose = actions.payload;
      return { ...state };
    }
    case PLAY_GAME: {
      //đổ xúc xắc
      state.dice = state.dice.map((item) => {
        return Math.ceil(Math.random() * 6);
      });

      //tính tổng xúc xắc
      let result = state.dice.reduce((sum, item) => {
        return (sum += item);
      }, 0);

      //kiểm tra kết quả
      let gameResult = result > 12 ? true : false;
      if (gameResult === state.clientChoose) {
        state.countWin++;
      }

      state.countGame++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default xucXacReducer;
