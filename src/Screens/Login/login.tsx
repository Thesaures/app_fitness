import { Colors } from "../../constants/Colors";
// import { Ionicons } from "@expo/vector-icons";
// import { Link } from "expo-router";
import { View,Text, StyleSheet, TouchableOpacity, Button, Image } from "react-native"
import { GestureHandlerRootView, ScrollView, TextInput } from "react-native-gesture-handler";
import Facebook from "../../../assets/images/Facebook.svg";
import Google from '../../../assets/images/google.svg'
import { useState } from "react";
import { checkLoginFields } from "../../helper";
import React from "react";
const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fields,setField] = useState('');
    const [message,setMessage] = useState('');
    const [eye,setEye] = useState(true);
    const changeEye = ()=>{
        setEye(!eye)
    }
    const checkfields =()=>{
        const {message,field} = checkLoginFields({email,password})
        setField(field);
        setMessage(message);
    }
    return(
        
        <GestureHandlerRootView>
            <ScrollView>
            <View style = {styles.container}>
             <Text style={styles.firstLine}>Hey there, </Text>
             <Text style={styles.secondLine}>Welcome Back</Text>


             <View style = {[styles.name,{borderColor:fields == 'email'?"red":'transparent',borderWidth:3}]}>
                {/* <Ionicons name="mail-outline" size={18}/> */}
                <TextInput 
                style = {styles.textIput} 
                placeholder="Email" 
                placeholderTextColor={'grey'}
                onChangeText={setEmail}
                value={email}/>
             </View>
             {fields == 'email' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}
             <View style = {[styles.name,{borderColor:fields == 'password'?"red":'transparent',borderWidth:3}]}>
                {/* <Ionicons name="lock-closed-outline" size={18}/> */}
                <TextInput 
                style = {styles.textIput} 
                placeholder="Password" 
                placeholderTextColor={'grey'}
                onChangeText={setPassword}
                textContentType='password'
                secureTextEntry={eye}
                value={password}
                
                />
                {/* <TouchableOpacity onPress={changeEye}>
                {!eye ? 
                    <Ionicons name="eye-outline" size={18}/>:
                    <Ionicons name="eye-off-outline" size={18}/>}
                </TouchableOpacity>    */}
             </View>
             {fields == 'password' && <>
                    <Text style={{color:'red',fontWeight:'500',padding:0,fontSize:10}}>{message}</Text>
                </>}


             <View style = {styles.checkLine}>
                <Text style={styles.checkText}>Forgot your password ?</Text>
             </View>
             <TouchableOpacity style = {styles.button} onPress={checkfields}>
                {/* <Ionicons name="log-in" size={35} color={'white'}/> */}
                <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
             <View style={styles.textUnder}>
                <View  style={styles.line}></View>
                <View style={styles.or}> 
                    <Text style={styles.o}>O</Text><Text style={styles.r}>r</Text>
                </View>
               
                <View  style={styles.line}></View>
             </View>
             <View style={styles.media}>
                <View style={styles.singleMedia}><Google width={25} height={30}/></View>
                <View style={styles.singleMedia}><Facebook width={25} height={30}/></View>
             </View>
             <View style={styles.login}>
                <Text> Don't have an account?</Text>
                {/* <Link href={"/about"}> */}
                <Text style={styles.loginText}>Register</Text>
                {/* </Link> */}
                
               
             </View>
        </View>
            </ScrollView>
            
        </GestureHandlerRootView>
        
    )
}
export default Login;
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.bg,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:30,
        marginTop:50
    },
    firstLine:{
        fontSize:20
    },
    secondLine:{
        fontSize:23,
        fontWeight:'600',
        marginBottom:20
    },
    name:{
        flexDirection:'row',
        backgroundColor:Colors.inputbg,
        borderRadius:10,
        padding:15,
        alignItems:'center',
        marginTop:10,
        marginBottom:20
    },
    textIput:{
        flex:1,
        marginLeft:10
    },
    check:{
        height:13,
        width:13,
        borderWidth:1
    },
    checkLine:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:Colors.button,
        padding:25,
        paddingHorizontal:135,
        borderRadius:40,
        marginTop:100,
        flexDirection:'row',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20
        },
    textUnder:{
       flexDirection:'row',
       alignItems:'center',
       marginVertical:14
    },
    line:{
        flex:1,
        borderWidth:.5,
        height:0
    },
    or:{
        flexDirection:'row',
       alignItems:'center',
        marginHorizontal:10
    },
    o:{
        fontSize:20
    },
    r:{
        fontSize:18
    },
    media:{
        flexDirection:'row',
        marginVertical:8
    },
    singleMedia:{
        borderWidth:.4,
        marginHorizontal:20,
        padding:10,
        borderRadius:10
    },
    login:{
       flexDirection:'row',
       marginVertical:8
    },
    loginText:{
        color:'#C456F3'
    },
    checkText:{
        marginLeft:10,
        color:'grey',
        marginTop:20
    }
})