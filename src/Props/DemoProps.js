import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native';
import CardItems from './CardItems'
export default class DemoProps extends Component{
    listStudent=[{name: 'Nguyen Van A', age:18},
    {name: 'Nguyen Van B', age:25},
    {name: 'Nguyen Van C', age:48},
    {name: 'Nguyen Van D', age:31},
    {name: 'Nguyen Van E', age:19}]
state={number: 1}
    
    renderListStudentwithMap=()=>{
       return this.listStudent.map((a, index)=>{
            const backgroundColor = index%2 ===0? 'red': '#ff79ff';
            return(
                <CardItems 
                name={a.name} 
                age={a.age} 
                backgroundColor={backgroundColor}/>
            )
        })}

        onPressButton =()=>{
            this.setState({number: this.state.number+1})
        }
    
    render(){
    return(///
        <View style={styles.container}>

<CardItems name={'RN 04'} age = {this.state.number} />
<Text onPress={this.onPressButton}>Count Up</Text>
{/* {this.renderListStudentwithMap()} */}
        </View>
    )
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
      
        borderRadius:8,
        width:'80%',
        paddingVertical: 20,
       marginBottom:10
        
    }
})