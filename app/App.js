import React, { useState, Component } from "react";
import { View, Text, StyleSheet, Button, Image, FlatList } from "react-native";

import api from "./services/api";
import Filmes from "./src";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmes: []
    }
  }

  async componentDidMount() {
    const response = await api.get('/films')
    this.setState({
      filmes: response.data
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList

          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => <Filmes data={item} index={index} />}
        />
      </View>
    )

  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    margin: 10
  }
});