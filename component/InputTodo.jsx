import React , { useState } from 'react'
import TodoList from "./TodoList"

import { StyleSheet, View , Button, TextInput 
   } from 'react-native';

export default function InputTodo() {

    

    const [ todo , setTodo ] = useState(null)
    const addTodo = () =>{

    }
    return (
        <View>
            <View style={styles.container}>
                <TextInput  style={ styles.input } keyboardType="numeric" />
                <Button style={ styles.state_change_btn } title="press me" onPress={()=> increment() } />
            </View>
            
            <TodoList />
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