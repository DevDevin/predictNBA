import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { homeTeamUpdate, awayTeamUpdate } from "../../actions/UserActions";
import { Card, CardSection, Button } from "../common";
import { goClick } from "../../actions/UserActions";
import { Actions } from "react-native-router-flux";

class Home extends Component {
  componentWillMount() {
    this.props.homeTeamUpdate({ prop: "homeTeam", value: "all" });
    this.props.homeTeamUpdate({ prop: "awayTeam", value: "all" });
  }

  onButtonPress() {
    Actions.main();
    //this.props.goClick();
  }
  render() {
    const { cardSectionStyle, buttonStyle } = styles;
    return (
      <Card>
        <CardSection style={cardSectionStyle}>
          <Image source={require(`../../Images/nbaLogo.png`)} />
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
  { goClick, homeTeamUpdate, awayTeamUpdate }
)(Home);
