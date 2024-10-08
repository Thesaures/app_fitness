import { View,Text,StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Workout from "../components/WorkoutCard";
import { FlashList } from "@shopify/flash-list";
import taskOne from '../../assets/images/taskOne.svg';
import taskTwo from '../../assets/images/taskTwo.svg';
import taskThree from '../../assets/images/taskThree.svg'
import { card } from "../types/types";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
const Routine =()=>{
    const [personelArray,setPersonelArray] =useState<card[]>([])
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const dataArray=[
        {
            index:1,
            header:'Upperbody Workout',
            number:11,
            time:32,
            Svg:taskOne
        },
        {   
            index:2,
            header:'Lowerbody Workout',
            number:10,
            time:28,
            Svg:taskTwo
        },
        {
            index:3,
            header:'Fullbody Workout',
            number:14,
            time:40,
            Svg:taskThree
        },
        
    ]
    const addValue =(item:card)=>{
        const isAvail = personelArray.some(card=>card.index === item.index);
        console.log('this is avail',isAvail)
        if(!isAvail){
            setPersonelArray((preState)=>(
                [...preState,item]
            ))
        }
        
    }
    const navigateTo =()=>{
        navigation.navigate('Workout')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Upcoming Workout</Text>
            <View  style={styles.list}>
                <FlatList
                data={personelArray}
                renderItem={({ item }) => 
                 <TouchableOpacity onPress={navigateTo}>
                    <Workout header={item.header} number={item.number} time={item.time} Svg={item.Svg}/>
                 </TouchableOpacity>   
                
                }
                />
            </View>
            <Text style={styles.heading}>What do you want to train</Text>
            <View  style={styles.list}>
                <FlatList
                data={dataArray}
                renderItem={({ item }) => 
                 <TouchableOpacity onPress={()=>addValue(item)}>
                    <Workout header={item.header} number={item.number} time={item.time} Svg={item.Svg}/>
                 </TouchableOpacity>   
                
                }
                />
            </View>
       
        </View>
    )
}
export default Routine;
const styles = StyleSheet.create({
    container:{
        flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    list:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    heading:{
        fontSize:23,
        fontWeight:'700'
    }
})