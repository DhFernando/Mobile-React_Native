import React , { useState } from 'react'
import TodoList from "./TodoList"

import { StyleSheet, View , Button, TextInput,
    Alert , Keyboard
   } from 'react-native';


export default function InputTodo() {

    const [newkey , setKey] = useState(20)
    const [text , setText] = useState(null)

    const [ newTodo , setNewTodo ] = useState(null)
   
 
    const addTodo = () =>{
        Keyboard.dismiss()
       if(text != null){
        setNewTodo( { key : newkey , todo: text  } )
        setText(null)
        setKey(newkey + 1)
       }else{
           Alert.alert( "Ooops","Just input some work",[
               { text : "Okay !!!" , onPress : () =>{
                   console.log( "Alert Closed" )
               } }
           ] )
       }
    }
    return (
        <View>
            <View style={styles.container}>
                <TextInput  style={ styles.input }
                 onChangeText={ (val)=>setText(val) }
                 value={ text } />
                <Button style={ styles.state_change_btn } title="Add new Todo" onPress={()=> addTodo() } />
            </View>

            <TodoList todo={newTodo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#fff'
    },
     
    input:{
      borderWidth:1,
      borderColor:"gray",
      margin:15,
      padding:10
    },
     
  });