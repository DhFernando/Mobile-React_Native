import React , { useState } from 'react'
import { View, Text, Modal } from 'react-native'
import { Button, Container, Content, Form, Item, Input } from 'native-base';

const PopupModal = ({ open , handleModal, addReviews }) => {

    const initData = {
        title:null,
        body:null,
        ratiing:null
    }
    const [ data , setData ] = useState(initData)

    return (
        <Container>
            <Modal  visible={open} animationType="slide">
                <View style={{ padding:"8%" }}>
                    <Text style={{alignSelf:"center"}}>Hello Model { open }</Text>
                    
                    <View > 
                        <Item>
                            <Input placeholder="Title" onChangeText={ (val)=>setData({ ...data , title : val }) } />
                        </Item>
                        <Item last>
                            <Input placeholder="body" onChangeText={ (val)=>setData({ ...data , body : val }) } />
                        </Item>
                        <Item last>
                            <Input placeholder="Rating" onChangeText={ (val)=>setData({ ...data , rating : val }) } />
                        </Item>
                    </View>
                    <View style={{alignSelf:"center", marginTop:"10%" , flexDirection:"row"}} >
                        <Button style={{  width:100 , marginRight:"1%" }}  warning onPressOut={ ()=>{ 
                            addReviews(data)
                            handleModal(false) 
                        } }>
                            <Text style={{ paddingLeft:"34%" , color:"white" , fontFamily:"nunito-bold" }}>Add</Text>
                        </Button>
                        <Button style={{ width:100 , backgroundColor:"#ff6e40" }}  warning onPressOut={ ()=>{ handleModal(false) } }>
                            <Text style={{ paddingLeft:"34%" , color:"white" , fontFamily:"nunito-bold" }}>Close</Text>
                        </Button>
                    </View>
                
                </View>
            </Modal>
        </Container>
    )
}

export default PopupModal
