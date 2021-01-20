import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import About from '../component/ReviewApp/About'
import Header from '../component/ReviewApp/shared/Header'

const screens = {
    About:{
        screen:About,
        navigationOptions: ({ navigation }) => {
            return {
            headerTitle: () => <Header title='About GameZone' navigation={navigation} />
        }
        },
    }
}

const AboutStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor:"#37474f",
        headerStyle:{backgroundColor : "orange"}
    }
})

export default AboutStack


