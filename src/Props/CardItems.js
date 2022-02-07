import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';

export default class DemoProps extends Component {


   

    render() {
        return (
            <View style={[styles.container, {backgroundColor:this.props.backgroundColor}]}>

                <Text>Ten: {this.props.name}</Text>
                <Text>Tuoi: {this.props.age}</Text>
  

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
        borderRadius: 8,
        width: '80%',
        paddingVertical: 20,
        marginBottom: 10

    }
})