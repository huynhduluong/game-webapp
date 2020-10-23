import { CHOOSE_GAME } from "./constant";

export const actChooseGame = (choose) => {
  return {
    type: CHOOSE_GAME,
    payload: choose,
  };
};
