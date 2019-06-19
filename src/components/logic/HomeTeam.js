import React, { Component } from "react";
import { View, Text, Picker, Image } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { goToAwayTeam, homeTeamUpdate } from "../../actions/UserActions";
import { Card, CardSection, Button } from "../common";

class HomeTeam extends Component {
  onButtonPress() {
    Actions.awayTeam();
    //this.props.goToAwayTeam();
    console.log("this.props.homeTeam: ", this.props.homeTeam);
  }

  render() {
    const { imageStyle, cardSectionStyle, buttonStyle } = styles;
    return (
      <Card>
        <CardSection style={cardSectionStyle}>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.homeTeam}
            onValueChange={value =>
              this.props.homeTeamUpdate({ prop: "homeTeam", value })
            }
          >
            <Picker.Item label="Warriors" value="Warriors" />
            <Picker.Item label="Trail Blazers" value="Trail Blazers" />
            <Picker.Item label="Rockets" value="Rockets" />
            <Picker.Item label="Nuggets" value="Nuggets" />
            <Picker.Item label="Bucks" value="Bucks" />
            <Picker.Item label="Raptors" value="Raptors" />
            <Picker.Item label="Jazz" value="Jazz" />
          </Picker>
        </CardSection>
        <Text>{this.props.homeTeam}</Text>
        <CardSection style={cardSectionStyle}>
          <Image
            style={imageStyle}
            source={require("../../Images/jazzLogo.png")}
          />
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Choose Away Team
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  imageStyle: {
    width: 300,
    height: 300
  },
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

const mapStateToProps = state => {
  return {
    homeTeam: state.team.homeTeam
  };
};

export default connect(
  mapStateToProps,
  { goToAwayTeam, homeTeamUpdate }
)(HomeTeam);
