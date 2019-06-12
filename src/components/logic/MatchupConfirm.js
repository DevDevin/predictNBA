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
    this.props.predictScore2();
    this.props.predictScore(homeTeam, awayTeam);
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
