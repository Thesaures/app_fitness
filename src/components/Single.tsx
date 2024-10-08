// import { Ionicons } from "@expo/vector-icons";
import { View,Text, StyleSheet } from "react-native"
type single ={
    name:string;
    iconOne:any;
}
const Single =(props:single)=>{
    const {name,iconOne} =props;
    return(
        <View style={styles.container}>
            {/* <Ionicons name={iconOne} size={20} color={'green'}/> */}
            <Text style={styles.text}>{name}</Text>
            {/* <Ionicons name="chevron-forward" size={20} color={'gray'}/> */}
        </View>
    )
}
export default Single;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:15,
        padding:10,
        flexDirection:'row',
        width:'100%'
    },
    text:{
        flex:1,
        marginLeft:25
    }
})