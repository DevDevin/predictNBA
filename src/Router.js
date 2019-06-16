import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import Home from "./components/home/Home";
import HomeTeam from "./components/logic/HomeTeam";
import AwayTeam from "./components/logic/AwayTeam";
import MatchupConfirm from "./components/logic/MatchupConfirm";
import FinalScore from "./components/logic/FinalScore";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root" hideNavBar>
        <Scene key="home">
          <Scene key="home" component={Home} title="Predict NBA" initial />
        </Scene>

        <Scene key="main">
          <Scene key="homeTeam" component={HomeTeam} title="Home Team" />
          <Scene key="awayTeam" component={AwayTeam} title="Away Team" />
        </Scene>
        <Scene
          key="matchupConfirm"
          component={MatchupConfirm}
          title="Confirm Matchup"
        />
        <Scene key="finalScore" component={FinalScore} title="Final Score" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
