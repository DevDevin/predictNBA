import { AWAY_TEAM_UPDATE } from "../actions/Types";

const INITIAL_STATE = {
  awayTeam: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action, " away team Reducer");
  switch (action.type) {
    case AWAY_TEAM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
