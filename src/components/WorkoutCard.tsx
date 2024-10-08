import { View,Text, StyleSheet } from "react-native"
import { SvgProps } from "react-native-svg";
type card ={
    header:string;
    number:number;
    time:number;
    Svg:React.FC<SvgProps>;
}
const Workout =(prop:card)=>{
    const {header,number,time,Svg} = prop;
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
            <Text style={styles.header}>{header}</Text>
            <View style={styles.timeNumber}>
                <Text style={styles.time}>{number}</Text>
                <Text style={styles.time}>Exercises</Text>
                <View style={styles.line}></View>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.time}>mins</Text>
            </View>
              <View style={styles.button}>
                <Text style={{color:'#E09EF2'}}>View more</Text>
              </View>
            </View>


            <View style={{alignItems:'flex-end',justifyContent:'center'}}>
                <View style={{backgroundColor:'white',padding:40,marginLeft:40,borderRadius:50}}/>
                <Svg height={120}width={80}style={{position:'absolute'}}/>
            </View>
           
        </View>
    )
}
export default Workout;
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        padding:20,
        borderRadius:20,
        backgroundColor:'#F6E2FA',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header:{
        fontSize:18,
        fontWeight:'500'
    },
    timeNumber:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    line:{
        height:15,
        borderWidth:1,
        borderColor:'grey',
        margin:10
    },
    time:{
       fontSize:17,
       color:'grey'
    },
    button:{
        backgroundColor:'white',
        padding:10,
        borderRadius:20
     }
})