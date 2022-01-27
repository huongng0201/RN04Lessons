// import React, { Component } from "react";
// import {View, Text, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

// export default class BindingData extends Component {
//     name = 'Pony'
//     age= 12
  

//     state ={isLogin:false}

//     renderName(){
//         if(this.state.isLogin){
//             return(
//                 <>
//                 <Text style={styles.textInfo}>{this.name}</Text>
//                 <Text>{this.age}</Text>
//                 </>
//            )
//         }
       
//     }

//     onPressButton=()=>{
//         console.log('button Press');
//     this.setState({isLogin:true});
//     }
//   render() {
//     return (
//       <View style={styles.container}>
       
//         <Text style={styles.textInfo}>Binding Component</Text>
       
//         <Button title='press' color='#f06292'/>
//         <TouchableOpacity style={styles.btn} onPress={this.onPressButton} >
//             <Text>Login</Text>
//         </TouchableOpacity>
    
//         {this.renderName()}
//       </View>
      
//     )
//   }
// }
// const styles =StyleSheet.create({
// container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#f3e5f5'

// },

// textInfo:{
//     color:'red',
//     textAlign:'center'
// },
// btn:{
//     backgroundColor:'blue', 
//     alignItems:'center',
//     justifyContent:'center', 
//     width:50,
   
  
   
// }   
// })


// import React, {Component} from 'react';
// import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native';
// import {Pictures} from './src/Pictures';
// export default class Nhap extends Component{
//     listIcon = [{id:1, icon: require('./src/Pictures/angry.png')},
//     {id:2, icon: require('./src/Pictures/care.png')},
//     {id:3, icon: require('./src/Pictures/haha.png')},
//     {id:4, icon: require('./src/Pictures/like.png')},
//     {id:5, icon: require('./src/Pictures/love.png')},
//     {id:6, icon: require('./src/Pictures/sad.png')}]


// state= {
//      icon: false


// }
// renderName(){
//     return (
//         <View>
//            {this.state.icon?(
//         <Image  style={styles.icon} source={this.listIcon[0].icon}/> 
//         ): null}
//     {this.listIcon.map((i,index)=>{
//         return( 
//            <>
//                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton} >
//             <Image  style={styles.icon} source={i.icon}/>
//             </TouchableOpacity>
          
           
//             </>
           
//         )
//     })
// }
// </View>   
// )
// }
    

//     onPressButton=()=>{
//     this.setState({icon:true})

       
//     }
    
//     render(){
//         return (
//             <View style={styles.container}>
//              <View>
//               <Text style={styles.textInfo}>Hôm nay bạn thế nào?</Text>
//               </View>
 
//           <View style={styles.iconLine}>
//           {this.renderName()}
         
//           </View>
              
//             </View>
            
//           )
//         }
//       }
//       const styles =StyleSheet.create({
//       container:{
//           flex:1,
//           justifyContent:'center',
//           alignItems:'center',
//           backgroundColor:'#f3e5f5',
//           flexDirection:'column'
//       },
//       textInfo:{
//           color:'red',
//           textAlign:'center'
//       },
    
//       icon:{
//           height:50,
//           width:50,
       
       
//       } ,
//       iconLine:{
//        display:'flex',
//         justifyContent:'space-around',
//         flexDirection:'row',
//         paddingVertical:20,
       
       


//       }
//       })
