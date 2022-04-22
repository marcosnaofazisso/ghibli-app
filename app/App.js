import React from "react";
import { ScrollView, View, Text, StyleSheet, Pressable, Image, FlatList } from "react-native";

import api from "./services/api";
import Filmes from "./src/Filmes/index";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filmes: []
    }
  }

  async componentDidMount() {
    const response = await api.get('/films')
    const localResp = await api.get('/locations')
    this.setState({
      filmes: response.data,
      locations: localResp.data
    })
  }

  goTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }
  render() {
    return (
      <>

        <View style={styles.container}>
          <Text style={styles.mainTitle}>Ghibli App</Text>
          <Image style={{ width: 200, height: 100, marginBottom: 30 }} source={require('./assets/logo.png')} />
          <ScrollView ref={(c) => { this.scroll = c }}>
            <FlatList
              data={this.state.filmes}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item, index }) => <Filmes data={item} index={index} />}
            />
            <Pressable style={styles.button} onPress={this.goTop.bind(this)}>
              <Text style={styles.text}>Go to top</Text>
            </Pressable>
          </ScrollView>
        </View>

      </>
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
  },
  mainTitle: {
    fontFamily: 'Roboto',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
    marginTop: 15,

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});