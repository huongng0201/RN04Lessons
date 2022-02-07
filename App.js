import { Binding } from "@babel/traverse";
import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native'
import DemoProps from "./src/Props/DemoProps";
// import B5BindingData from "./B5BindingData";
import RenderwithMap from "./src/RenderwithMap";


export default class App extends Component {
  render() {
    return (
      <View style={styles.containerbg}>
       
   {/* <RenderwithMap /> */}
   <DemoProps />
  

      </View>
    )
  }
}
const styles =StyleSheet.create({
containerbg:{
  flex:1,
  backgroundColor:'pink',
  justifyContent:'center',
  alignItems:'center'
}
})