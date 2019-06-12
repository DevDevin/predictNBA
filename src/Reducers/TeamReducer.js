import { HOME_TEAM_UPDATE, AWAY_TEAM_UPDATE } from "../actions/Types";

const INITIAL_STATE = {
  homeTeam: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log("inside of home team reducer");
  switch (action.type) {
    case HOME_TEAM_UPDATE:
      console.log("test:", action.payload);
      return { ...state, [action.payload.prop]: action.payload.value };
    case AWAY_TEAM_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    default:
      return state;
  }
};
