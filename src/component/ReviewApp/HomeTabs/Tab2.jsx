import React , { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Axios from 'axios'

const Tab2 = () => {

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
        })
    },[])

    const [ users , setUsers ] = useState(null)

    return (
        <View>
            <View>{users != null && (<View>{ users.map((user)=>{
                return(<Text key={ user.id }>{ user.name }</Text>)
            }) }</View>)}</View>
        </View>
    )
}

export default Tab2