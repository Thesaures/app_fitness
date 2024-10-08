import { View,Text, StyleSheet } from "react-native";

const Notification =()=>{
    return(
        <View style={Styles.container}>
        </View>
    )
}
export default Notification;

const Styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:10,
        width:10,
        borderRadius:50,
        position:'absolute',
        left:22,
        top:10
    }
})