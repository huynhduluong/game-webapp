import { CHOOSE_GAME, PLAY_GAME, RANDOM_XUC_XAC } from "./constant";

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

export const actRandomXucXac = () => {
  return {
    type: RANDOM_XUC_XAC,
  };
};
