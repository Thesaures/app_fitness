// import { Ionicons } from "@expo/vector-icons";
import { View,Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native";
interface head {
    title:string;
}
const Header= ( props:head)=>{
    const navigation =useNavigation();
    const {title} = props;
    return(
        <>
        <View style={styles.container}>
        {/* <Ionicons name="chevron-back" size={24} color="black" onPress={()=>navigation.goBack()}/> */}
        <Text style={styles.text}>{title}</Text>
        <View/>
        </View>
        </>
    )
}
export default Header;
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        position:'absolute',
        top:0,
        width:'100%',
        zIndex:2,
        flexDirection:'row',
        paddingHorizontal:10
    },
    text:{
        fontWeight:'700',
        fontSize:20,
        marginTop:15,
        marginBottom:10
    }
})