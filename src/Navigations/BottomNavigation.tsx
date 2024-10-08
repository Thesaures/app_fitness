import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from '@react-native-vector-icons/fontawesome';
// import { Ionicons } from "@expo/vector-icons";
import Home from "../Screens/home";
import Search from "../Screens/search";
import Profile from "../Screens/profile";
import React from "react";
import Routine from "../Screens/routine";
import CameraPage from "../Screens/camera";
import HomeBottom from "../Screens/HomeBottom";
import ProfileBottom from "../Screens/ProfileBottom";

import { View } from "react-native";
const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () =>{
    return(
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#8518FF', // Color when tab is active
                tabBarInactiveTintColor: 'gray', // Color when tab is inactive
                tabBarHideOnKeyboard: true,
                tabBarShowLabel:false
                
            }}
        >
            <BottomTab.Screen
                name = "Home"
                component = {HomeBottom}
                options={{
                    headerShown: false,
                    // tabBarIcon: ({color})=>(<Ionicons name="home" size={25} color={color}/>)
                }}
            />
             <BottomTab.Screen
                name = "CameraPage"
                component = {CameraPage}
                options={{
                    headerShown: false,
                    // tabBarIcon: ({color})=>(<Ionicons name="camera" size={25} color={color}/>)
                }}
            />
            <BottomTab.Screen 
                name="Search"
                component={Search}   
                options={{
                    headerShown: false,
                    tabBarIcon: ({color})=>(
                        <View style={{backgroundColor:'#8C66F3',bottom:20,padding:10,borderRadius:30}}>
                              {/* <Ionicons name="search" size={25} color={'white'}/> */}
                        </View>
                  
                )
                }}
            /> 

           <BottomTab.Screen
                name = "Routine"
                component = {Routine}
                options={{
                    // tabBarIcon: ({color})=>(<Ionicons name="list" size={25} color={color}/>)
                }}
            />
            
            <BottomTab.Screen
                name = "Profile"
                component = {ProfileBottom}
                options={{
                    headerShown: false,
                    // tabBarIcon: ({color})=>(<Ionicons name="person" size={25} color={color}/>)
                }}
            />

           

        </BottomTab.Navigator>
    )
}

export default BottomTabNavigation;