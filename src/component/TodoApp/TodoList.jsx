import React , { useState , useEffect } from 'react';

import { StyleSheet, Text, View , FlatList,
    TouchableOpacity
   } from 'react-native';
   
import {MaterialIcons} from "@expo/vector-icons"

export default function TodoList( props ) {

    const initTodos = [
        { key: 1, todo: "Leanne Graham"  }
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
                    keyExtractor={(item)=>item.key.toString()} 
                    renderItem={(todo) => (
                        
                        <View style={ styles.todo__box }>
                            <View>
                                <Text style={ styles.todo }>
                                    {  todo.item.todo } - { todo.item.key }   
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={ ()=> removeTodo( todo.item.key ) }>
                                    <MaterialIcons style={ styles.list__icon } size={ 24 }  name="delete" />
                                </TouchableOpacity>
                            </View>
                        </View>
                   
                    ) }
                    />
            </View>
        </View>
    
    )
}


const styles = StyleSheet.create({
   
    todo__box:{
        backgroundColor:"#bbdefb",
        margin:10,
        padding:15,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems:"center"
      },
    
      list__View:{
        height:467, 
        flexDirection:"column",
        backgroundColor:"#e0e0e0"
      },
      list__icon:{
          color:"red",
          
      },
      todo:{
        paddingTop:4,
        fontWeight:"bold",
        color:"#424242"
      }
     
  });