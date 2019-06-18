import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { Card, CardSection, Button } from "../common";

class FinalScore extends Component {
  componentWillMount() {
    console.log("homeFinalScore: ", this.props.homeFinalScore);
    console.log("oppFinalScore: ", this.props.oppFinalScore);
  }
  render() {
    return (
      <CardSection>
        <Card>
          <Text>Final Score!</Text>
          <Text>HomeScore: </Text>
          <Text>OppScore: {this.props.oppFinalScore}</Text>
        </Card>
      </CardSection>
    );
  }
}

mapStateToProps = state => {
  return {
    homeFinalScore: state.team.homeScore, // maybe i can manipulate the value sometime before this point in the reducer.
    oppFinalScore: state.team.oppScore
  };
};

export default connect(
  mapStateToProps,
  {}
)(FinalScore);
