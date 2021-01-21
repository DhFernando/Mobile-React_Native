import React , { useState } from 'react'
import {StyleSheet, View,TouchableOpacity  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {  Card, CardItem, Text, Icon, Right } from 'native-base';

import { FlatList } from 'react-native-gesture-handler'

export default function Home( props ) {

    const [ reviews , setReviews ] = useState([
        {key:1, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:2, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:3, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:4, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:5, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:6, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:7, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:8, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:9, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:10, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:11, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:12, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
        {key:13, title:"loca cdjk" , body:"lorem ipsam" , rating: 5}
    ])

    const navigate = (_to , params) =>{
        props.navigation.push(_to , params)
    }

    return (
        <View style={styles.container}>
           <View style={styles.reviews_block}>
                <FlatList
                    data={reviews}
                    keyExtractor={(item)=>item.key.toString()}
                    renderItem={(review)=>{
                        return(
                            <TouchableOpacity onPress={()=>navigate("ReviewDeatails", review.item ) }>
                                <Card>
                                    <CardItem>
                                        <MaterialIcons name='stars' size={28} style={styles.styles__icon} />
                                        <View style={ styles.item }>
                                            <Text  note numberOfLines={3}> {  review.item.title } - { review.item.key } </Text>
                                        </View>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
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
    },
    reviews_block:{
        flex:1,
        margin:20
    },
    review:{
        backgroundColor:"pink",
        marginBottom:15,
        padding:20
    },
    styles__icon:{
        color:"#ffc107",
        marginRight:"5%"
    },
    item:{
        width:"70%"
    }
})
