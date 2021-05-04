import React, { Component } from "react";
import { Text, Picker, Image } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import {
  goToAwayTeam,
  homeTeamUpdate,
  setHomeTeamImageString
} from "../../actions/UserActions";
import { Card, CardSection, Button } from "../common";

class HomeTeam extends Component {
  state = {
    image: (
      <Image
        style={{
          width: 400,
          height: 400,
          borderRadius: 400 / 2
        }}
        source={require("../../Images/all.png")}
      />
    ),
    imageStyle: {
      width: 300,
      height: 300,
      borderRadius: 300 / 2
    },
    homeTeam: ""
  };

  componentWillMount() {
    console.log("homeImage: ", this.props.homeImage);
  }

  onButtonPress() {
    Actions.awayTeam();
  }

  setImage(value) {
    console.log("inside set home image", value);
    switch (value) {
      case "Bucks":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/bucks.jpg")}
            />
          )
        });
        break;
      case "Blazers":
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
              source={require("../../Images/jazz.png")}
            />
          )
        });
        break;
      case "Nuggets":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/nuggets.jpg")}
            />
          )
        });
        break;
      case "Rockets":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/rockets.png")}
            />
          )
        });
        break;
      case "Warriors":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/warriors.png")}
            />
          )
        });
        break;
      case "Raptors":
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/raptors.png")}
            />
          )
        });
        break;
      default:
        this.setState({
          image: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/all.png")}
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
            selectedValue={this.props.homeTeam}
            onValueChange={value => {
              this.props.homeTeamUpdate({ prop: "homeTeam", value });

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
        <Text>{this.props.homeTeam}</Text>
        <CardSection style={cardSectionStyle}>{this.state.image}</CardSection>

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
    homeTeam: state.team.homeTeam,
    homeImage: state.team.homeImage
  };
};

export default connect(
  mapStateToProps,
  { goToAwayTeam, homeTeamUpdate, setHomeTeamImageString }
)(HomeTeam);
