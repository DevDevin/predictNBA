import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Picker, Text, Image } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { awayTeamUpdate, setTeamData } from "../../actions/UserActions";

class AwayTeam extends Component {
  state = {
    image: (
      <Image
        style={{
          width: 400,
          height: 300
        }}
        source={require("../../Images/all.png")}
      />
    ),
    imageStyle: {
      width: 300,
      height: 300
    }
  };

  onButtonPress() {
    // do an api call here  to predict the home team data then pass the data into the setTeamData() function call as an object
    // do an api call here  to predict the away team data then pass the data into the setTeamData() function call as an object
    this.props.setTeamData();
    Actions.matchupConfirm({ type: "reset" });
  }

  setImage(value) {
    console.log("inside setImage", value);
    switch (value) {
      case "Bucks":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "blazerss":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "Jazz":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "Nuggets":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "Rockets":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "Warriors":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      default:
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
    }
  }

  render() {
    const { imageStyle, cardSectionStyle } = styles;
    return (
      <Card>
        <CardSection style={cardSectionStyle}>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => {
              this.props.awayTeamUpdate({ prop: "awayTeam", value });
              // function that determines and returns the url. set the url as a const and assign to imageString
              this.setImage(value);
            }}
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
        <Text>{this.props.awayTeam}</Text>
        <CardSection style={cardSectionStyle}>{this.state.image}</CardSection>
        <CardSection style={cardSectionStyle}>
          <Button onPress={this.onButtonPress.bind(this)}>Next</Button>
        </CardSection>
      </Card>
    );
  }
}

mapStateToProps = state => {
  return {
    awayTeam: state.team.awayTeam
  };
};

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

export default connect(
  mapStateToProps,
  { awayTeamUpdate, setTeamData }
)(AwayTeam);
