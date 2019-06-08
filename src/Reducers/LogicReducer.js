import {
  PREDICT_SCORE,
  HOME_TEAM_UPDATE,
  AWAY_TEAM_UPDATE
} from "../actions/Types";

const INITIAL_STATE = {
  score: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log("entered Logic Reducer");
  console.log(action);
  switch (action.type) {
    case PREDICT_SCORE:
      console.log(
        "entered predict score reducer",
        " payload: ",
        action.payload
      );
      return {
        ...state,
        homeTeam: action.payload.homeTeam,
        awayTeam: action.payload.awayTeam
      };

    case HOME_TEAM_UPDATE:
      console.log("entered ", HOME_TEAM_UPDATE, action.payload.value);
      return {
        ...state,
        homeTeamName: action.payload.value
      };
    case AWAY_TEAM_UPDATE:
      console.log("entered ", AWAY_TEAM_UPDATE, action.payload.value);
      return {
        ...state,
        awayTeamName: action.payload.value
      };
    default:
      return state;
  }
};
