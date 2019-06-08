import React, { Component } from "react";
import { View, Text } from "react-native";
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
    return (
      <Card>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Go</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { goClick }
)(Home);
