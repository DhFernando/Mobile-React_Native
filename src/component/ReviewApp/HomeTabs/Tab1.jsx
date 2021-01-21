import React , { useState } from 'react'
import {StyleSheet, View,TouchableOpacity, Modal  } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {  Card, CardItem, Text, Icon, Right, Button } from 'native-base';

import { FlatList } from 'react-native-gesture-handler'

import PopupModal from '../PopupModal' 

const Tab1 = ({ navigation }) => {

    const [ reviews , setReviews ] = useState([
        {key:1, title:"IGI 1" , body:"i am going in" , rating: 5},
        {key:2, title:"GTA vice city" , body:"first person game" , rating: 5},
        {key:3, title:"loca cdjk" , body:"lorem ipsam" , rating: 5},
     
    ])

    const [ openModal , setOpenModal ] = useState(false)
    const [ newKey , setNewKey ] = useState(4)

    const handleModal = (_data)=>{
        setOpenModal(_data)
    }

    const addReviews =  (data)=>{
        if(data != null){
            data.key = newKey,
            setReviews([...reviews , data])
            setNewKey(newKey + 1)
        }
    }

    const navigate = (_to , params) =>{
       navigation.push(_to , params)
    }
    return (
            <View>

                <View>
                    <PopupModal open={openModal} handleModal={handleModal} addReviews={addReviews} />
                </View>

                <View style={{ alignSelf:"center" , marginTop:10 ,marginBottom:10 }}>
                    <Button warning onPressOut={ ()=>{ handleModal(true) } }><Text>Add games to review</Text></Button>
                </View>

                <FlatList
                    data={reviews}
                    keyExtractor={(item)=>item.key.toString()}
                    renderItem={(review)=>{
                        return( 
                            <View>
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
                            </View>
                        )
                    }}
                />
            </View>
    )
}

export default Tab1

const styles = StyleSheet.create({
   
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

