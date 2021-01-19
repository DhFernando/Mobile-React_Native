import React , { useState , useEffect } from 'react';

import { StyleSheet, Text, View , FlatList,
    TouchableOpacity
   } from 'react-native';

export default function TodoList( props ) {

    const initTodos = [
        { key: 1, todo: "Leanne Graham"  },
        { key: 2, todo: "Ervin Howell" },
        { key: 3, todo: "Clementine Bauch" },
        { key: 4, todo: "Patricia Lebsack" },
        { key: 5, todo: "Chelsey Dietrich"  },
        { key: 6, todo: "Clementine Bauch" },
        { key: 7, todo: "Patricia Lebsack" },
        { key: 8, todo: "Chelsey Dietrich"  },
        { key: 9, todo: "Clementine Bauch" },
        { key: 10, todo: "Patricia Lebsack" },
        { key: 11,todo: "Chelsey Dietrich"  }
      ]
       
      const [todos , setTodos] = useState(initTodos)
    
      useEffect(()=>{
        if(props.todo != null){
            setTodos([ ...todos , props.todo ])
        }
      } , [ props.todo ])
    
      const removeTodo = (key) =>{ 
        setTodos([
          ...todos.filter( todo => todo.key != key )
        ])
      }

    return (
        <View style={styles.container}>
            <View style={ styles.list__View } > 
                <FlatList
                    data={todos} 
                    numColumns={2}
                    keyExtractor={(item)=>item.key} 
                    renderItem={(todo) => (
                        <TouchableOpacity onPress={ ()=> removeTodo( todo.item.key ) }>
                            <Text style={ styles.todo__list }> {  todo.item.todo } - { todo.item.key } </Text>
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
    todo__list:{
        backgroundColor:"pink",
        margin:20,
        padding:10
      },
    
      list__View:{
        height:400,
        backgroundColor:"#e0e0e0"
      }
     
  });