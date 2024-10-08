import { View,Text,StyleSheet } from "react-native"
import { Colors } from "../constants/Colors";
type detail ={
    value:number,
    label:string,
    measure:string
}
const Detail =(props:detail)=>{
    const { value,label,measure} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{value}{measure}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}
export default Detail;

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        padding:10,
        marginTop:10,
        borderRadius:15,
        paddingHorizontal:25,
        elevation:8,
       
    },
    text:{
        fontWeight:'700',
        fontSize:18,
        color:Colors.measureColor
    },
    label:{
        color:'grey',
        fontSize:15,
    }
})