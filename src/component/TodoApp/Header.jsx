import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={ styles.header__text }>My Todo Application</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#fff'
    },
    header:{
        flexDirection:"row",
        height:60,
        backgroundColor: "#1a237e" ,
        justifyContent: 'center',
        alignItems:"center",
        
      },
      header__text:{
        marginTop:20,
        color : "white",
        // fontWeight:"bold"
        fontFamily:'nunito-bold'

      },
  
  });