import React , { useState } from 'react';

import { StyleSheet, Text, View , Button,
    TextInput , ScrollView , FlatList,
    TouchableOpacity
   } from 'react-native';

export default function TodoList() {

    const initUsers = [
        { key: 1, name: "Leanne Graham"  },
        { key: 2, name: "Ervin Howell" },
        { key: 3, name: "Clementine Bauch" },
        { key: 4, name: "Patricia Lebsack" },
        { key: 5, name: "Chelsey Dietrich"  },
        { key: 6, name: "Clementine Bauch" },
        { key: 7, name: "Patricia Lebsack" },
        { key: 8, name: "Chelsey Dietrich"  },
        { key: 9, name: "Clementine Bauch" },
        { key: 10, name: "Patricia Lebsack" },
        { key: 11,name: "Chelsey Dietrich"  }
      ]
       
      const [users , setUsers] = useState(initUsers)
     
    
      const removeUser = (key) =>{ 
        setUsers([
          ...users.filter( user => user.key != key  )
        ])
      }

    return (
        <View style={styles.container}>
            <View style={ styles.list__View } > 
                <FlatList
                    data={users} 
                    numColumns={2}
                    keyExtractor={(item)=>item.key} 
                    renderItem={(user) => (
                        <TouchableOpacity onPress={ ()=> removeUser( user.item.key ) }>
                        <Text style={ styles.user__list }> {  user.item.name } - { user.item.key } </Text>
                        </TouchableOpacity>
                    ) }
                    />
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#fff'
    },
    user__list:{
        backgroundColor:"pink",
        margin:20,
        padding:10
      },
    
      list__View:{
        height:400,
        backgroundColor:"#e0e0e0"
      }
     
  });