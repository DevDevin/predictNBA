import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { Text, Image } from "react-native";
import { Card, CardSection, Button } from "../common";

class FinalScore extends Component {
  state = {
    winner: "all",
    imageStyle: {
      width: 300,
      height: 300
    }
  };

  componentWillMount() {
    console.log("homeFinalScore: ", this.props.homeFinalScore);
    console.log("oppFinalScore: ", this.props.oppFinalScore);
    if (this.props.homeFinalScore > this.props.oppFinalScore) {
      console.log("home wins");
      this.setState({ winner: this.props.teamName.homeTeam });
    } else {
      console.log("away wins", this.props.teamName.awayTeam);
      this.state.winner = this.props.teamName.awayTeam;
      console.log("winner: ", this.state.winner);
    }
    console.log("homeTeam: ", this.props.teamName.homeTeam);
    console.log("awayTeam: ", this.props.teamName.awayTeam);
    console.log("this.state.winner: ", this.state.winner);
    // get the image
    switch (this.state.winner) {
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
          <Text style={textStyle}>
            {this.props.teamName.homeTeam}: {this.props.homeFinalScore}
          </Text>
          <Text style={textStyle}>
            {this.props.teamName.awayTeam}: {this.props.oppFinalScore}
          </Text>
        </CardSection>
        <CardSection style={cardSectionStyle}>{this.state.image}</CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Back to Home</Button>
        </CardSection>
      </Card>
    );
  }
}

mapStateToProps = state => {
  return {
    homeFinalScore: state.team.homeScore,
    oppFinalScore: state.team.oppScore,
    teamName: state.team
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
