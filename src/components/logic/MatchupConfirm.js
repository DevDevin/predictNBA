import React, { Component } from "react";
import { predictScore } from "../../actions/UserActions";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { Text } from "react-native";

class MatchupConfirm extends Component {
  componentWillMount() {
    console.log(
      "homeTeamName: ",
      this.props.homeTeamName,
      "awayTeamName: ",
      this.props.awayTeamName
    );
  }
  onButtonPress() {
    const homeTeam = "Rockets";
    const awayTeam = "Jazz";
    this.props.predictScore(homeTeam, awayTeam);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Confirm Matchup</Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Predict Score</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeTeamName: state.homeTeamName,
    awayTeamName: state.awayTeamName
  };
};

export default connect(
  mapStateToProps,
  { predictScore }
)(MatchupConfirm);
