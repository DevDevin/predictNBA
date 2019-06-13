import React, { Component } from "react";
import { predictScore, predictScore2 } from "../../actions/UserActions";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { Text } from "react-native";
import axios from "axios";

class MatchupConfirm extends Component {
  componentWillMount() {
    console.log("teamName: ", this.props.teamName);
  }
  onButtonPress() {
    const homeTeam = "Rockets";
    const awayTeam = "Jazz";
    const data = "";
    axios
      .post(
        "https://ussouthcentral.services.azureml.net/workspaces/25728ac0a79b4b5dbfac3a35d1d00490/services/20fcedfaf3da44ca95df078c6ba70b61/execute",
        data,
        {
          qs: { "api-version": "2.0", format: "swagger" },
          headers: {
            "Postman-Token": "7eb1156a-4a54-4b50-b186-424dd8ad5cab",
            "cache-control": "no-cache",
            Authorization:
              "Bearer JubkNWztb3aZBqk/dF4wDEl7dRkh+G75+CP6+SOyKgzfwIreNgqETqzf7NOdTINHd5Z1bnKlDdiik4fdqn2lnw==",
            "Content-Type": "application/json"
          },
          body: {
            Inputs: {
              input1: [
                {
                  Team: "",
                  Matchup: "",
                  "H/A": "1",
                  Pts: "1",
                  FGM: "1",
                  FGA: "1",
                  "FG%": "1",
                  "3PM": "1",
                  "3PA": "1",
                  "3P%": "1",
                  FTM: "1",
                  FTA: "1",
                  "FT%": "1",
                  OREB: "1",
                  DREB: "1",
                  REB: "1",
                  AST: "1",
                  TOV: "1",
                  STL: "1",
                  BLK: "1",
                  PF: "1",
                  OppTeam: "",
                  "Matchup (2)": "",
                  OppPts: "1",
                  OppFGM: "1",
                  OppFGA: "1",
                  "OppFG%": "1",
                  Opp3PM: "1",
                  OPP3PA: "1",
                  "Opp3P%": "1",
                  OppFTM: "1",
                  OppFTA: "1",
                  "OppFT%": "1",
                  OppOREB: "1",
                  OppDREB: "1",
                  OppREB: "1",
                  OppAST: "1",
                  OppTOV: "1",
                  OppSTL: "1",
                  OppBLK: "1",
                  OppPF: "1"
                }
              ]
            },
            GlobalParameters: {}
          }
        }
      )
      .then(function(response) {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    // this.props.predictScore2();
    // this.props.predictScore(homeTeam, awayTeam);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Confirm Matchup</Text>
        </CardSection>
        <CardSection>
          <Text>
            {this.props.teamName.homeTeam} vs {this.props.teamName.awayTeam}
          </Text>
        </CardSection>
        <CardSection />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Predict Score</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    teamName: state.teamName
  };
};

export default connect(
  mapStateToProps,
  { predictScore, predictScore2 }
)(MatchupConfirm);
