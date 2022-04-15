import React from "react";
import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";

export default class Filmes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeFilme: ""
        }

    }

    verDetalhes = _ => {
        Alert.alert("Voce escolheu o filme", this.props.data.title)
        this.setState({ nomeFilme: this.props.data.title })

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: this.props.data.image
                    }} />
                    <Text>{this.state.nomeFilme}</Text>
                <Text style={styles.title}>{this.props.index + 1} - {this.props.data.title}</Text>
                <Text style={styles.subtitle}>{this.props.data.original_title}</Text>
                <Text style={styles.description}>{this.props.data.description}</Text>
                <Button
                    title={"Ver detalhes"}
                    color={"#0000FF"}
                    onPress={this.verDetalhes.bind(this)}
                />
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitle: {
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    description: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        marginLeft: 40,
        marginRight: 40
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 40
    }
})