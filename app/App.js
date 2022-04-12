import React, { useState } from "react";
import { StatusBar, View, Text, TextInput, StyleSheet, Button, Image } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: 1,
      color: true,
    }
  }

  increaseDice() {
    this.setState({
      dice: this.state.dice + 1
    })
  }
  decreaseDice() {
    if (this.state.dice > 1) {
      this.setState({ dice: this.state.dice - 1 });
    }
  }

  cliqueBotao = _ => {
    this.setState({
      color: !this.state.color
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tiny} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        <StatusBar
          animated={true}
          backgroundColor={this.state.color ? 'green' : 'blue'} />
        <Button style={styles.churros} title={'Mudar a cor do StatusBar!'} onPress={this.cliqueBotao.bind(this)} />
        <Text style={styles.churros}>{this.state.dice}</Text>
        <Button color={'green'} title={'increase'} onPress={this.increaseDice.bind(this)} />
        <Button color={'red'} title={'decrease'} onPress={this.decreaseDice.bind(this)} />
      </View>

    )
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F1'
  },
  churros: {
    marginTop: 10,
    color: 'black',
    borderWidth: 3,
    borderColor: 'black',
    fontSize: 50,
    height: 100,
    width: 500,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }, tiny: {
    width: 50,
    height: 50
  }
});