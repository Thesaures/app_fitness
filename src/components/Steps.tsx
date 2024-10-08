import { View,Text, StyleSheet } from "react-native";
import Point from "./Point";
import Line from '../../assets/images/line.svg'
import { Colors } from "../constants/Colors";
import { step } from "../types/types";
const Steps =(props:step)=>{
    const {id,heading,discription} = props;
    return(
        <View style={Style.container}>
                <Text style={Style.id}>{id}</Text>
                <View style={Style.svg}>
                    <Point/>
                    <Line width={30} height={90}/>
                </View>
                <View style={{width:'85%'}}>
                <Text style={Style.head}>{heading}</Text>
                <Text style={Style.disc}>{discription}</Text>
                </View>
                
        </View>
    )
}
export default Steps;
const Style = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        marginVertical:10
    },
    id:{
        color:Colors.pointColor,
        fontSize:18
    },
    head:{
        fontWeight:'500',
        fontSize:18
    },
    disc:{
        marginTop:10,
        fontSize:15
    },
    svg:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10
    }
})