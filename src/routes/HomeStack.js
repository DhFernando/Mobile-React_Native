import React from 'react'
import { createStackNavigator } from 'react-navigation-stack' 

import Home from '../component/ReviewApp/Home'
import ReviewDeatails from '../component/ReviewApp/ReviewDeatails'
import Header from '../component/ReviewApp/shared/Header.jsx'


const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <Header title='GameZone' navigation={navigation} />
          }
        },
      },
    ReviewDeatails:{
        screen:ReviewDeatails,
        navigationOptions:{
            title:"Review Deatails"
        } 
    }
}

const HomeStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor:"#37474f",
        headerStyle:{backgroundColor : "orange" , height:80 }
    }
})

export default HomeStack


