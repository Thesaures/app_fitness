import { View,Text, StyleSheet, Switch } from "react-native"
import Single from "./Single";
// import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from 'toggle-switch-react-native'
import { useState } from "react";

const Toggle =()=>{
    const [checked,setChecked] = useState<boolean>(false)
    const isChecked =()=>{
        setChecked(!checked);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Notification</Text>
            <View style={styles.subContainer}>
            {/* <Ionicons name='notifications-outline' size={20} color={'green'}/> */}
            <Text style={styles.textTwo}>Pop-up Notification</Text>
            <ToggleSwitch
                isOn={checked}
                onColor="green"
                offColor="grey"
                onToggle={isChecked}
                />
        </View>
        </View>
    )
}
export default Toggle;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        elevation:8,
        borderRadius:15,
        marginTop:15,
        padding:10,
        width:'100%'
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:13
    },
    subContainer:{
        backgroundColor:'white',
        marginTop:15,
        padding:10,
        flexDirection:'row',
        width:'100%'
    },
    textTwo:{
        flex:1,
        marginLeft:25
    }
})