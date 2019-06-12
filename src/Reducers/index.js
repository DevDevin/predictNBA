import HomeTeamReducer from "./TeamReducer";
import LogicReducer from "./LogicReducer";

import { combineReducers } from "redux";
export default combineReducers({
  teamName: HomeTeamReducer,
  logicReducer: LogicReducer
});
