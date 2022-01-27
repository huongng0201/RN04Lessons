import { Binding } from "@babel/traverse";
import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native'
import B5BindingData from "./B5BindingData";


export default class App extends Component {
  render() {
    return (
      <View style={styles.containerbg}>
       
   <B5BindingData />
  

      </View>
    )
  }
}
const styles =StyleSheet.create({
containerbg:{
  flex:1,
  backgroundColor:'#80e27e'
}
})