import {
  HOME_TEAM_UPDATE,
  AWAY_TEAM_UPDATE,
  SET_TEAM_DATA
} from "../actions/Types";

const INITIAL_STATE = {
  homeTeam: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log("inside of teams reducer");
  switch (action.type) {
    case HOME_TEAM_UPDATE:
      console.log("test:", action.payload);
      return { ...state, [action.payload.prop]: action.payload.value };
    case AWAY_TEAM_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case SET_TEAM_DATA:
      console.log("inside of SET_TEAM_DATA");
      // TODO: THE payload will be the response object from the api call. can then set team data with payload
      return {
        ...state,
        teamData: {
          Team: "",
          Matchup: "",
          HomeOrAway: "1",
          Pts: "1",
          FGM: "40",
          FGA: "94",
          FGPerc: "40.4",
          ThreesMade: "9",
          ThreesAttempted: "38",
          ThreePercent: "23.7",
          FTM: "13",
          FTA: "14",
          FTPercent: "92.9",
          OREB: "8",
          DREB: "33",
          REB: "41",
          AST: "20",
          TOV: "10",
          STL: "5",
          BLK: "7",
          PF: "13",
          OppTeam: "",
          OppPts: "1",
          OppFGM: "45",
          OppFGA: "96",
          OppFGPercent: "46.9",
          OppThreesMade: "9",
          OppThreesAttemped: "32",
          OppThreePercent: "28.1",
          OppFTM: "19",
          OppFTA: "22",
          OppFTPercent: "86.4",
          OppOREB: "10",
          OppDREB: "45",
          OppREB: "55",
          OppAST: "19",
          OppTOV: "9",
          OppSTL: "4",
          OppBLK: "4",
          OppPF: "9"
        }
      };
    default:
      return state;
  }
};
