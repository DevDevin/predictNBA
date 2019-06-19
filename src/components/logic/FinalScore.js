import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { Text, Image } from "react-native";
import { Card, CardSection, Button } from "../common";

class FinalScore extends Component {
  componentWillMount() {
    console.log("homeFinalScore: ", this.props.homeFinalScore);
    console.log("oppFinalScore: ", this.props.oppFinalScore);
  }

  onButtonPress() {
    Actions.home();
  }
  render() {
    const { textStyle, imageStyle, cardSectionStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Text style={textStyle}>Final Score!</Text>
        </CardSection>
        <CardSection>
          <Text style={textStyle}>HomeScore: {this.props.homeFinalScore}</Text>
          <Text style={textStyle}>OppScore: {this.props.oppFinalScore}</Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Image
            style={imageStyle}
            source={require("../../Images/nbaLogo2.jpg")}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Back to Home</Button>
        </CardSection>
      </Card>
    );
  }
}

mapStateToProps = state => {
  return {
    homeFinalScore: state.team.homeScore, // maybe i can manipulate the value sometime before this point in the reducer.
    oppFinalScore: state.team.oppScore
  };
};

const styles = {
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  imageStyle: {
    width: 300,
    height: 300
  },
  cardSectionStyle: {
    justifyContent: "center",
    alignItems: "stretch"
  }
};

export default connect(
  mapStateToProps,
  {}
)(FinalScore);
