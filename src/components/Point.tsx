import { View,Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const Point=()=>{
    return( 
        <View style={Styles.container}>
            <View style={Styles.inner}></View>
        </View>
    )
}
export default Point;

const Styles = StyleSheet.create({
    container:{
        height:20,
        width:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:Colors.pointColor,
        marginBottom:10
    },
    inner:{
        backgroundColor:Colors.pointColor,
        height:10,
        width:10,
        borderRadius:20,
    }
})