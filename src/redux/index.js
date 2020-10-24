import { combineReducers } from "redux";
import xucXacReducer from "./../gameXucXac/modules/xucXacReducer";
import oanTuTiReducer from "./../gameOanTuTi/modules/oanTuTiReducer";

const rootReducer = combineReducers({
  xucXacReducer,
  oanTuTiReducer,
});

export default rootReducer;
