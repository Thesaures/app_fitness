import { View,Text, StyleSheet } from "react-native"
import Single from "./Single";
const Other =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Other</Text>
            <Single name={"Contact Us"} iconOne={'person-outline'}/>
            <Single name={"Privacy Policy"} iconOne={'list'}/>
            <Single name={"Settings"} iconOne={'pie-chart-outline'}/>
        </View>
    )
}
export default Other;

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
    }
})