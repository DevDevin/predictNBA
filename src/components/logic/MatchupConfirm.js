import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  predictScore,
  setHomeScore,
  setOppScore,
  setLoadingFalse
} from "../../actions/UserActions";
import { connect } from "react-redux";
import { Card, CardSection, Button, Spinner } from "../common";
import { Text, Image } from "react-native";

class MatchupConfirm extends Component {
  state = {
    homeImage: (
      <Image
        style={{
          width: 300,
          height: 200
        }}
        source={require("../../Images/all.png")}
      />
    ),
    oppImage: (
      <Image
        style={{
          width: 300,
          height: 200
        }}
        source={require("../../Images/blazers.jpeg")}
      />
    ),
    imageStyle: {
      width: 300,
      height: 200
    },
    homeTeam: ""
  };

  componentWillMount() {
    // get the home team image
    switch (this.props.teamName.homeTeam) {
      case "Bucks":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/bucks.jpg")}
            />
          )
        });
        break;
      case "blazerss":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "Jazz":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/jazz.png")}
            />
          )
        });
        break;
      case "Raptors":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/raptors.png")}
            />
          )
        });
        break;
      case "Nuggets":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/nuggets.jpg")}
            />
          )
        });
        break;
      case "Rockets":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/rockets.png")}
            />
          )
        });
        break;
      case "Warriors":
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/warriors.png")}
            />
          )
        });
        break;
      default:
        this.setState({
          homeImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/all.png")}
            />
          )
        });
    }

    //get the away team image
    switch (this.props.teamName.awayTeam) {
      case "Bucks":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/bucks.jpg")}
            />
          )
        });
        break;
      case "blazerss":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/blazers.jpeg")}
            />
          )
        });
        break;
      case "Jazz":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/jazz.png")}
            />
          )
        });
      case "Raptors":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/raptors.png")}
            />
          )
        });
        break;
        break;
      case "Nuggets":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/nuggets.jpg")}
            />
          )
        });
        break;
      case "Rockets":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/rockets.png")}
            />
          )
        });
        break;
      case "Warriors":
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/warriors.png")}
            />
          )
        });
        break;
      default:
        this.setState({
          oppImage: (
            <Image
              style={this.state.imageStyle}
              source={require("../../Images/all.png")}
            />
          )
        });
    }
  }
  onButtonPress() {
    var url =
      "https://ussouthcentral.services.azureml.net/workspaces/25728ac0a79b4b5dbfac3a35d1d00490/services/20fcedfaf3da44ca95df078c6ba70b61/execute?api-version=2.0&format=swagger";

    /////////////////////////////////////////////////// predict homeTeam's score ////////////////////////////////////////////////////////////////
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        Inputs: {
          input1: [
            {
              Team: "",
              Matchup: "",
              HomeOrAway: "1",
              Pts: "1",
              FGM: this.props.teamData.FGM,
              FGA: this.props.teamData.FGA,
              FGPerc: this.props.teamData.FGPerc,
              ThreesMade: this.props.teamData.ThreesMade,
              ThreesAttempted: this.props.teamData.ThreesAttempted,
              ThreePercent: this.props.teamData.ThreePercent,
              FTM: this.props.teamData.FTM,
              FTA: this.props.teamData.FTA,
              FTPercent: this.props.teamData.FTPercent,
              OREB: this.props.teamData.OREB,
              DREB: this.props.teamData.DREB,
              REB: this.props.teamData.REB,
              AST: this.props.teamData.AST,
              TOV: this.props.teamData.TOV,
              STL: this.props.teamData.STL,
              BLK: this.props.teamData.BLK,
              PF: this.props.teamData.PF,
              OppTeam: "",
              OppPts: "1",
              OppFGM: this.props.teamData.OppFGM,
              OppFGA: this.props.teamData.OppFGA,
              OppFGPercent: this.props.teamData.OppFGPercent,
              OppThreesMade: this.props.teamData.OppThreesMade,
              OppThreesAttemped: this.props.teamData.OppThreesAttemped,
              OppThreePercent: this.props.teamData.OppThreePercent,
              OppFTM: this.props.teamData.OppFTM,
              OppFTA: this.props.teamData.OppFTA,
              OppFTPercent: this.props.teamData.OppFTPercent,
              OppOREB: this.props.teamData.OREB,
              OppDREB: this.props.teamData.OppDREB,
              OppREB: this.props.teamData.OppREB,
              OppAST: this.props.teamData.OppAST,
              OppTOV: this.props.teamData.OppTOV,
              OppSTL: this.props.teamData.OppSTL,
              OppBLK: this.props.teamData.OppBLK,
              OppPF: this.props.teamData.OppPF
            }
          ]
        },
        GlobalParameters: {}
      }),
      headers: new Headers({
        "cache-control": "no-cache",
        "Postman-Token": "4ed608c5-b194-4d7e-a202-19e20d3e1128",
        Authorization:
          "Bearer JubkNWztb3aZBqk/dF4wDEl7dRkh+G75+CP6+SOyKgzfwIreNgqETqzf7NOdTINHd5Z1bnKlDdiik4fdqn2lnw==",
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.log("Error: ", error))
      .then(response => {
        console.log(
          "Success! homeTeam's score: ",
          response.Results.output1[0]["Scored Labels"]
        );
        this.props.setHomeScore(response.Results.output1[0]["Scored Labels"]);
      })
      .then(() => {
        ////////////////////////////////////// predict the oppTeam's score ////////////////////////////////
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            Inputs: {
              input1: [
                {
                  Team: "",
                  Matchup: "",
                  HomeOrAway: "1",
                  Pts: "1",
                  FGM: this.props.teamData.OppFGM,
                  FGA: this.props.teamData.OppFGA,
                  FGPerc: this.props.teamData.OppFGPercent,
                  ThreesMade: this.props.teamData.OppThreesMade,
                  ThreesAttempted: this.props.teamData.OppThreesAttemped,
                  ThreePercent: this.props.teamData.OppThreePercent,
                  FTM: this.props.teamData.OppFTM,
                  FTA: this.props.teamData.OppFTA,
                  FTPercent: this.props.teamData.OppFTPercent,
                  OREB: this.props.teamData.OppOREB,
                  DREB: this.props.teamData.OppDREB,
                  REB: this.props.teamData.OppREB,
                  AST: this.props.teamData.OppAST,
                  TOV: this.props.teamData.OppTOV,
                  STL: this.props.teamData.OppSTL,
                  BLK: this.props.teamData.OppBLK,
                  PF: this.props.teamData.OppPF,
                  OppTeam: "",
                  OppPts: "1",
                  OppFGM: this.props.teamData.FGM,
                  OppFGA: this.props.teamData.FGA,
                  OppFGPercent: this.props.teamData.FGPerc,
                  OppThreesMade: this.props.teamData.ThreesMade,
                  OppThreesAttemped: this.props.teamData.ThreesAttempted,
                  OppThreePercent: this.props.teamData.ThreePercent,
                  OppFTM: this.props.teamData.FTM,
                  OppFTA: this.props.teamData.FTA,
                  OppFTPercent: this.props.teamData.FTPercent,
                  OppOREB: this.props.teamData.OREB,
                  OppDREB: this.props.teamData.DREB,
                  OppREB: this.props.teamData.REB,
                  OppAST: this.props.teamData.AST,
                  OppTOV: this.props.teamData.TOV,
                  OppSTL: this.props.teamData.STL,
                  OppBLK: this.props.teamData.BLK,
                  OppPF: this.props.teamData.PF
                }
              ]
            },
            GlobalParameters: {}
          }),
          headers: new Headers({
            "cache-control": "no-cache",
            "Postman-Token": "4ed608c5-b194-4d7e-a202-19e20d3e1128",
            Authorization:
              "Bearer JubkNWztb3aZBqk/dF4wDEl7dRkh+G75+CP6+SOyKgzfwIreNgqETqzf7NOdTINHd5Z1bnKlDdiik4fdqn2lnw==",
            "Content-Type": "application/json"
          })
        })
          .then(res => res.json())
          .catch(error => console.log("Error: ", error))
          .then(response => {
            console.log(
              "Success! oppTeam's Score: ",
              response.Results.output1[0]["Scored Labels"]
            );
            this.props.setOppScore(
              response.Results.output1[0]["Scored Labels"]
            );
            this.props.setLoadingFalse();
          })
          .then(() => Actions.finalScore());
      });
  }
  render() {
    const { cardSectionStyle, buttonStyle } = styles;
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
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
          <CardSection style={cardSectionStyle}>
            {this.state.homeImage}
          </CardSection>
          <Text>-VS-</Text>
          <CardSection style={cardSectionStyle}>
            {this.state.oppImage}
          </CardSection>
          <CardSection>
            <Button style={buttonStyle} onPress={this.onButtonPress.bind(this)}>
              Predict Score
            </Button>
          </CardSection>
        </Card>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    teamName: state.team,
    teamData: state.team.teamData,
    loading: state.team.loading
  };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
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
  { predictScore, setHomeScore, setOppScore, setLoadingFalse }
)(MatchupConfirm);
