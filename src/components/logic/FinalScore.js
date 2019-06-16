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
        </Card>
      </CardSection>
    );
  }
}

mapStateToProps = state => {
  return {
    homeFinalScore: state.team.homeScore,
    oppFinalScore: state.team.oppScore
  };
};

export default connect(
  mapStateToProps,
  {}
)(FinalScore);
