import React from 'react'
import {StyleSheet, View, Text , Button } from 'react-native'

export default function Home( props ) {

    const navigate = (_to) =>{
        props.navigation.push(_to)
    }

    return (
        <View style={styles.container}>
            <Text> Home Component </Text>
           <View style={styles.nav_btn}>
            <Button  title="Goto review "
                onPress={()=>navigate("ReviewDeatails")}
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
