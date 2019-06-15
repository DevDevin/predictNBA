import TeamReducer from "./TeamReducer";
import LogicReducer from "./LogicReducer";

import { combineReducers } from "redux";
export default combineReducers({
  team: TeamReducer,
  logicReducer: LogicReducer
});
