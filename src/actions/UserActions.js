import { Actions } from "react-native-router-flux";
import {
  HOME_TEAM_UPDATE,
  AWAY_TEAM_UPDATE,
  SET_TEAM_DATA,
  SET_HOME_SCORE,
  SET_OPP_SCORE,
  SET_LOADING_FALSE
} from "../actions/Types";

export const goClick = () => {
  Actions.main();
};

export const goToAwayTeam = () => {
  Actions.main();
};

export const homeTeamUpdate = ({ prop, value }) => {
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
};

export const setTeamData = () => {
  // TODO: response object from api call will be passed in as a parameter and then set as the payload
  return {
    type: SET_TEAM_DATA,
    payload: "test"
  };
};

export const setHomeScore = response => {
  return {
    type: SET_HOME_SCORE,
    payload: response
  };
};

export const setOppScore = response => {
  return {
    type: SET_OPP_SCORE,
    payload: response
  };
};

export const setHomeTeamImageString = homeTeam => {
  imageString = `../../Images/${homeTeam}.png`;
  console.log("imageString: ", imageString);
  //update the url string state with urlString
  return imageString;
};

export const setLoadingFalse = () => {
  console.log("inside set loading false");
  return {
    type: SET_LOADING_FALSE,
    payload: "false"
  };
};
