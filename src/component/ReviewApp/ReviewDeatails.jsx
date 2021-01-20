import React from 'react'
import {StyleSheet, View, Text, Button } from 'react-native'

export default function ReviewDeatails(props) {


    return (
        <View style={styles.container}>
            <Text>
                Review Details
            </Text>
            <Text>
               { props.navigation.getParam( "title" ) }
            </Text>
            <View style={styles.nav_btn}>
            <Button  title="Goto review "
                onPress={()=> props.navigation.goBack()}
                color="#0d47a1"
                /> 
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    nav_btn:{
        padding:30
    }
})