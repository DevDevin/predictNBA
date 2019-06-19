import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { goClick } from "../../actions/UserActions";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  onButtonPress() {
    Actions.main();
    //this.props.goClick();
  }
  render() {
    const { containerStyle, textStyle, cardSectionStyle, buttonStyle } = styles;
    return (
      <Card>
        <CardSection style={cardSectionStyle}>
          <Image source={require("../../Images/nbaLogo.png")} />
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button style={buttonStyle} onPress={this.onButtonPress.bind(this)}>
            Go
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: "center",
    alignItems: "stretch"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0,0.75",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  },
  buttonStyle: {
    flex: 1,
    alignItems: "stretch"
  }
};

export default connect(
  null,
  { goClick }
)(Home);
