import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation' 

import Home from '../component/ReviewApp/Home'
import ReviewDeatails from '../component/ReviewApp/ReviewDeatails'

const screens = {
    Home:{
        screen:Home
    },
    ReviewDeatails:{
        screen:ReviewDeatails
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)


