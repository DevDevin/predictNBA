import React, { Component } from "react";
import { predictScore } from "../../actions/UserActions";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { Text } from "react-native";

class MatchupConfirm extends Component {
  componentWillMount() {
    console.log("teamName: ", this.props.teamName);
    console.log("teamData: ", this.props.teamData);
  }
  onButtonPress() {
    var url =
      "https://ussouthcentral.services.azureml.net/workspaces/25728ac0a79b4b5dbfac3a35d1d00490/services/20fcedfaf3da44ca95df078c6ba70b61/execute?api-version=2.0&format=swagger";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        Inputs: {
          input1: [
            {
              Team: "",
              Matchup: "",
              HomeOrAway: "1",
              Pts: "1",
              FGM: this.props.teamData.FGM,
              FGA: this.props.teamData.FGA,
              FGPerc: this.props.teamData.FGPerc,
              ThreesMade: this.props.teamData.ThreesMade,
              ThreesAttempted: this.props.teamData.ThreesAttempted,
              ThreePercent: this.props.teamData.ThreePercent,
              FTM: this.props.teamData.FTM,
              FTA: this.props.teamData.FTA,
              FTPercent: this.props.teamData.FTPercent,
              OREB: this.props.teamData.OREB,
              DREB: this.props.teamData.DREB,
              REB: this.props.teamData.REB,
              AST: this.props.teamData.AST,
              TOV: this.props.teamData.TOV,
              STL: this.props.teamData.STL,
              BLK: this.props.teamData.BLK,
              PF: this.props.teamData.PF,
              OppTeam: "",
              OppPts: "1",
              OppFGM: this.props.teamData.OppFGM,
              OppFGA: this.props.teamData.OppFGA,
              OppFGPercent: this.props.teamData.OppFGPercent,
              OppThreesMade: this.props.teamData.OppThreesMade,
              OppThreesAttemped: this.props.teamData.OppThreesAttemped,
              OppThreePercent: this.props.teamData.OppThreePercent,
              OppFTM: this.props.teamData.OppFTM,
              OppFTA: this.props.teamData.OppFTA,
              OppFTPercent: this.props.teamData.OppFTPercent,
              OppOREB: this.props.teamData.OREB,
              OppDREB: this.props.teamData.OppDREB,
              OppREB: this.props.teamData.OppREB,
              OppAST: this.props.teamData.OppAST,
              OppTOV: this.props.teamData.OppTOV,
              OppSTL: this.props.teamData.OppSTL,
              OppBLK: this.props.teamData.OppBLK,
              OppPF: this.props.teamData.OppPF
            }
          ]
        },
        GlobalParameters: {}
      }),
      headers: new Headers({
        "cache-control": "no-cache",
        "Postman-Token": "4ed608c5-b194-4d7e-a202-19e20d3e1128",
        Authorization:
          "Bearer JubkNWztb3aZBqk/dF4wDEl7dRkh+G75+CP6+SOyKgzfwIreNgqETqzf7NOdTINHd5Z1bnKlDdiik4fdqn2lnw==",
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.log("Error: ", error))
      .then(response => console.log("Success:", response));
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
    teamName: state.team,
    teamData: state.team.teamData
  };
};

export default connect(
  mapStateToProps,
  { predictScore }
)(MatchupConfirm);
