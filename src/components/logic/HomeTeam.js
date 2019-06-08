import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
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
    return (
      <Card>
        <CardSection>
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
        <CardSection>
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
  }
};

const mapStateToProps = state => {
  return {
    homeTeam: state.homeTeam
  };
};

export default connect(
  mapStateToProps,
  { goToAwayTeam, homeTeamUpdate }
)(HomeTeam);
