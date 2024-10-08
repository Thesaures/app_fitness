import { View,Text, StyleSheet} from "react-native"
import { waterMeasure } from "../types/types";
const WaterMeasure =(props:waterMeasure)=>{
    const {start,end,measure} =props;
    return(
        <View style={styles.container}>
            <View style={styles.dot}>
            </View>
            <View>
            <Text>{start}- {end}</Text>
            <Text>{measure}ml</Text>
            </View>  
        </View>
    )
}
export default WaterMeasure;
const styles =StyleSheet.create({
    container:{
        alignItems:'flex-start',
        justifyContent:'center',
        flexDirection:'row',
        marginVertical:8
    },
    dot:{
        height:12,
        width:12,
        backgroundColor:'#DA83F1',
        borderRadius:50,
        margin:10
    }
})