import React, { Component } from "react";
import { predictScore, predictScore2 } from "../../actions/UserActions";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { Text } from "react-native";

class MatchupConfirm extends Component {
  componentWillMount() {
    console.log("teamName: ", this.props.teamName);
  }
  onButtonPress() {
    const homeTeam = "Rockets";
    const awayTeam = "Jazz";
    const data = "";
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
              FGM: "1",
              FGA: "1",
              FGPerc: "1",
              ThreesMade: "1",
              ThreesAttempted: "1",
              ThreePercent: "1",
              FTM: "1",
              FTA: "1",
              FTPercent: "1",
              OREB: "1",
              DREB: "1",
              REB: "1",
              AST: "1",
              TOV: "1",
              STL: "1",
              BLK: "1",
              PF: "1",
              OppTeam: "",
              OppPts: "1",
              OppFGM: "1",
              OppFGA: "1",
              OppFGPercent: "1",
              OppThreesMade: "1",
              OppThreesAttemped: "1",
              OppThreePercent: "1",
              OppFTM: "1",
              OppFTA: "1",
              OppFTPercent: "1",
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
    teamName: state.teamName
  };
};

export default connect(
  mapStateToProps,
  { predictScore, predictScore2 }
)(MatchupConfirm);
