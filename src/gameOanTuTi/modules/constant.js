import { CHOOSE_ITEM, END_GAME, RANDOM_ITEM } from "./actions";

export const actChooseItem = (choose) => {
  return {
    type: CHOOSE_ITEM,
    payload: choose,
  };
};

export const actPlayGame = () => {
  return {
    type: END_GAME,
  };
};

export const actRandom = () => {
  return {
    type: RANDOM_ITEM,
  };
};
