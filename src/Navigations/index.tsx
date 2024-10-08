/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react"
import { SafeAreaView } from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context'
import AuthNavigation from "./Authentication"
import { useSelector } from "react-redux";
import UserNavigation from "./UserNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
// import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const Navigation =()=>{
    // const dispatch = useDispatch();
    const auth = useSelector((state:{value:boolean}) =>state.auth.isAuth);
    console.log('this is auth : ',auth);
    // const getValue =async()=>{
    //     const value = await AsyncStorage.getItem('my-key');
    //     console.log('value : ',value)
    //     if(value){
    //         dispatch(authAction.login())
    //     }
    // }
    // getValue();
    return(
        <GestureHandlerRootView style={{flex:1}}>
             <NavigationContainer >
               <SafeAreaView style={{flex:1}}>
                <>
                {auth ? <UserNavigation/> : <AuthNavigation/>}
                </>
                </SafeAreaView>
             </NavigationContainer>
       </GestureHandlerRootView>
    )
}
export default Navigation;