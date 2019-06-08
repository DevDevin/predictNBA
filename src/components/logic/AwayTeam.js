import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Picker } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "../common";
import { awayTeamUpdate } from "../../actions/UserActions";

class AwayTeam extends Component {
  onButtonPress() {
    Actions.matchupConfirm();
    //this.props.goToAwayTeam();
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.awayTeamUpdate({ prop: "awayTeam", value })
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
          <Button onPress={this.onButtonPress.bind(this)}>Next</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { awayTeamUpdate }
)(AwayTeam);
