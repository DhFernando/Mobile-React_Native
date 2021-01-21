import React  from 'react'
import { Tab, Tabs, Container} from 'native-base';

import Tab1 from './HomeTabs/Tab1';
import Tab2 from './HomeTabs/Tab2';
import Tab3 from './HomeTabs/Tab3';
 

export default function Home( {navigation} ) {


    return (
            <Container>
                
                <Tabs  tabBarPosition="bottom"  onChangeTab={()=>{}}>
                <Tab activeTabStyle={{ backgroundColor:"white" }} 
                     textStyle={{color:"white", fontFamily:"nunito-bold"}} tabStyle={{backgroundColor: "orange"}}
                     activeTextStyle={{color:"green"}} heading="Tab1">
                        <Tab1 navigation={navigation} />
                </Tab>
                <Tab activeTabStyle={{ backgroundColor:"white" }} 
                     textStyle={{color:"white", fontFamily:"nunito-bold"}} tabStyle={{backgroundColor: "orange"}}
                     activeTextStyle={{color:"green"}} heading="Tab2">
                    <Tab2 />
                </Tab>
                <Tab activeTabStyle={{ backgroundColor:"white" }} 
                     textStyle={{color:"white", fontFamily:"nunito-bold"}} tabStyle={{backgroundColor: "orange"}}
                     activeTextStyle={{color:"green"}} heading="Tab3">
                    <Tab3 />
                </Tab>
                </Tabs>
            </Container>
    )
}
