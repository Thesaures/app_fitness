import { View,Text, StyleSheet } from "react-native"
import Single from "./Single";
const Account =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Account</Text>
            <Single name={"Personal Data"} iconOne={'person-outline'}/>
            <Single name={"Achivement"} iconOne={'list'}/>
            <Single name={"Activity History"} iconOne={'pie-chart-outline'}/>
            <Single name={"Workout Progress"} iconOne={'bar-chart-outline'}/>
        </View>
    )
}
export default Account;

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