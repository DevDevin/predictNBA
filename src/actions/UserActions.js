import { Actions } from "react-native-router-flux";
import {
  HOME_TEAM_UPDATE,
  AWAY_TEAM_UPDATE,
  SET_TEAM_DATA,
  SET_HOME_SCORE,
  SET_OPP_SCORE
} from "../actions/Types";
import { callPredictionModel } from "../components/Calc/ScoreCalc";

export const goClick = () => {
  Actions.main();
};

export const goToAwayTeam = () => {
  Actions.main();
};

export const homeTeamUpdate = ({ prop, value }) => {
  console.log("home team: ", value);
  return {
    type: HOME_TEAM_UPDATE,
    payload: { prop, value }
  };
};

export const awayTeamUpdate = ({ prop, value }) => {
  console.log("away team: ", value);
  return {
    type: AWAY_TEAM_UPDATE,
    payload: { prop, value }
  };
};

export const predictScore = () => {
  //call the function that calculates the team stats
  // then call the function that predicts the score and returns the score.
  // then add the scores as the payload
  // callPredictionModel();
  console.log("inside predictScore");
};

export const setTeamData = () => {
  // TODO: response object from api call will be passed in as a parameter and then set as the payload
  console.log("inside setTeamData");
  return {
    type: SET_TEAM_DATA,
    payload: "test"
  };
};

export const setHomeScore = response => {
  console.log("inside setHomeScore");
  return {
    type: SET_HOME_SCORE,
    payload: response
  };
};

export const setOppScore = response => {
  console.log("inside setOppScore");
  return {
    type: SET_OPP_SCORE,
    payload: response
  };
};
