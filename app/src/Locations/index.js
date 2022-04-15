import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Locacoes extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.index + 1} - {this.props.data.name}</Text>
                <Text style={styles.climate}>{this.props.data.climate}</Text>
                <Text style={styles.terrain}>{this.props.data.terrain}</Text>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold'
    },
    climate: {
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    terrain: {
        fontFamily: 'sans-serif',
        fontSize: 20
    },
})