import HomeTeamReducer from "./HomeTeamReducer";
import AwayTeamReducer from "./AwayTeamReducer";
import LogicReducer from "./LogicReducer";

import { combineReducers } from "redux";
export default combineReducers({
  homeTeamName: HomeTeamReducer,
  awayTeamName: AwayTeamReducer,
  logicReducer: LogicReducer
});
