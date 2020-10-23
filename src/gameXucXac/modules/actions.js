import { CHOOSE_GAME, PLAY_GAME } from "./constant";

export const actChooseGame = (choose) => {
  return {
    type: CHOOSE_GAME,
    payload: choose,
  };
};

export const actPlayGame = () => {
  return {
    type: PLAY_GAME,
  };
};
