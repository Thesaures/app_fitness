import { View,Text, StyleSheet } from "react-native"
import WaterMeasure from "./WaterMeasure";
import { waterMeasure } from "../types/types";
import { useState } from "react";
const array:waterMeasure[] = [
    {
        start:'6am',
        end:'8am',
        measure:2000
    },
    {
        start:'8am',
        end:'10am',
        measure:1000
    },
]
const WaterIntake=()=>{
    const [target,setTarget] = useState<number>(4);
   
    const findGraphHeight =()=>{
        let targetMesure = target*1000;
        const sum =array.reduce((acc,item)=>(acc+item.measure),0);
        const percentage = (sum/targetMesure)*100;
        const height =3*percentage;
        return height;
    }
    const height = findGraphHeight();
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={[styles.in,{height:height}]}></View>
            </View>
            <View style={styles.right}>
                <Text style={styles.head}>Water Intake</Text>
                <Text style={styles.measure}>4 Liters</Text>
                <Text>Real Time Updates</Text>
                {array.map((item)=>(
                    <WaterMeasure start={item.start} end={item.end} measure={item.measure}/>
                    ))}
            
            </View>
        </View>
    )
}
export default WaterIntake;
const styles =StyleSheet.create({
    container:{
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:'#F6E8FD',
        flexDirection:'row',
        padding:10,
        marginVertical:10,
        borderRadius:10,
    },
    left:{
        height:300,
        width:20,
        backgroundColor:'red',
        position:'relative',
        borderRadius:20,
        marginRight:10
    },
    in:{
        width:20,
        backgroundColor:'blue',
        position:'absolute',
        bottom:0,
        borderRadius:20
    },
    head:{
        fontSize:18,
        fontWeight:'500'
    },
    measure:{
         fontSize:15,
         fontWeight:'500',
         marginVertical:5
    },
    right:{

    }
})