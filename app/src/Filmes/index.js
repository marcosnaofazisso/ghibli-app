import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";

export default class Filmes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeFilme: ""
        }

    }

    verDetalhes = _ => {
        Alert.alert(this.props.data.title, `Título Original: ${this.props.data.original_title_romanised} \nDuração: ${this.props.data.running_time}min \nData de Lançamento: ${this.props.data.release_date} \nDiretor: ${this.props.data.director}`)
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

                <Pressable style={styles.button} onPress={this.verDetalhes.bind(this)}>
                    <Text style={styles.text}>Ver detalhes</Text>
                </Pressable>
            </View >)
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
        marginTop: 25
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
})