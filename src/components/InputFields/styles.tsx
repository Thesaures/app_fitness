import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    name:{
        flexDirection:'row',
        backgroundColor:Colors.inputbg,
        borderRadius:10,
        padding:5,
        alignItems:'center',
        marginTop:4,
        marginBottom:4
    },
    textIput:{
        flex:1,
        marginLeft:10
    },
    error:{
        color:'red'
    }
})
export default styles;