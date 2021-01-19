import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';

import Header from "./component/Header"
import Input from "./component/InputTodo"

import { StyleSheet, View 
        } from 'react-native';
        

export default function App() {

 

  
  return (
    <View style={styles.container}> 
        <Header />
 
        <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff'
  },
  
  state_change_btn:{
    maxWidth:100
  },
  state_change_input:{
    borderWidth:1,
    borderColor:"gray",
    margin:15,
    padding:10
  },
  user__list:{
    backgroundColor:"pink",
    margin:20,
    padding:10
  },

  list__View:{
    height:400,
    backgroundColor:"#e0e0e0"
  }

});
