import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native';

export default class RenderwithMap extends Component{
    listStudent=[{name: 'Nguyen Van A', age:18},
    {name: 'Nguyen Van B', age:25},
    {name: 'Nguyen Van C', age:48},
    {name: 'Nguyen Van D', age:31},
    {name: 'Nguyen Van E', age:19}]

    renderListStudent =()=>{
        const jsArray =[]
        for (let index = 0; index < this.listStudent.length; index++) {
           this.listStudent[index]
           const backgroundColor = index%2 ===0? '#80e27e': '#ff79ff';
           const element = (
            <View key={index} style={[styles.container, {backgroundColor}]}>

            <Text>Ten: {this.listStudent[index].name}</Text>
            <Text>Tuoi: {this.listStudent[index].age}</Text>
                    </View>
           ) ;
           console.log(element);
           jsArray.push(element)
        }
        return jsArray
    }
    renderListStudentwithMap=()=>{
       return this.listStudent.map((a, index)=>{
            const backgroundColor = index%2 ===0? '#80e27e': '#ff79ff';
            return(
                <View  style={[styles.container, {backgroundColor}]}>

            <Text>Ten: {a.name}</Text>
            <Text>Tuoi: {a.age}</Text>
                    </View>
            )
        })}
    
    render(){
    return(
        <View style={styles.container}>

{/* <Text>Ten: {this.listStudent[0].name}</Text>
<Text>Tuoi: {this.listStudent[0].age}</Text> */}
{/* {this.renderListStudent()} */}
{this.renderListStudentwithMap()}
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