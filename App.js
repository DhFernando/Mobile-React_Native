import React , { useState } from 'react';

import * as Font from 'expo-font'

import Navigator from './src/routes/drawer'

import { StyleSheet, View , TouchableWithoutFeedback,
         Keyboard } from 'react-native';

import AppLoading from 'expo-app-loading';


export default function App() {

  const [ fontLoad , setFontLoad ] = useState(false)

  const loadFont = async() => await Font.loadAsync({
      'nunito-regular': require('./src/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./src/fonts/Nunito-Bold.ttf'),
      "Roboto": require('./src/fonts/Roboto-Regular.ttf'),
      "Roboto_medium": require('./src/fonts/Roboto-Medium.ttf'),
    })

  return (
          
    <TouchableWithoutFeedback onPress={ ()=>{ Keyboard.dismiss() } } >
      { fontLoad == true ? 
        (<View style={styles.container}>   
               
              <Navigator />
        </View>): 
        ( <AppLoading
            startAsync={ ()=>loadFont() }
            onFinish={ ()=> setFontLoad(true)  }
            onError={console.warn}
          /> ) }
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1
  }

});
