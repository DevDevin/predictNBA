import { Actions } from "react-native-router-flux";
import axios from "axios";
import {
  HOME_TEAM_UPDATE,
  AWAY_TEAM_UPDATE,
  PREDICT_SCORE
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

export const predictScore3 = dispatch => {
  return dispatch => {
    console.log("inside predict score2");
    axios("http://api.example.com").then(data => dispatch(console.log(data)));
  };

  // use dispatch
};

export function predictScore2() {
  return function action(dispatch) {
    // dispatch({ type: FETCH_OFFERS });

    const request = axios({
      method: "GET",
      url: `${BASE_URL}/offers`,
      headers: []
    });

    return request.then(
      response => dispatch(fetchOffersSuccess(response)),
      err => dispatch(fetchOffersError(err))
    );
  };
}

export const predictScore = ({ homeTeam, awayTeam }) => {
  //call the function that calculates the team stats

  // then call the function that predicts the score and returns the score.
  // then add the scores as the payload
  // callPredictionModel();
  console.log("tellakfj;lkdkajf;ldkja;lfkdj;l");

  return {
    type: PREDICT_SCORE,
    payload: { homeTeam, awayTeam }
  };
};
