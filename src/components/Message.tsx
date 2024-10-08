// import { Ionicons } from "@expo/vector-icons";
import { View,Text, StyleSheet } from "react-native"
import Pancake from '../../assets/images/pancakes.svg'
import { SvgProps } from "react-native-svg";
type notify ={
    header:string;
    time:string;
    Svg:React.FC<SvgProps>;
}
const MessageCard = (props:notify)=>{
    const {header,time,Svg} = props;
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
            <View style={styles.pic}>
            <Pancake height={30} width={44}/>
            </View>
            <View style={styles.header}>
                <Text style={styles.textOne}>{header}</Text>
                <Text  style={styles.textTwo}>{time}</Text>
            </View>
            </View>
            {/* <Ionicons name="ellipsis-vertical-outline" size={20}/> */}
        </View>
    )
}
export default MessageCard;
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    pic:{
       backgroundColor:'#A3FBE2',
       padding:6,
       borderRadius:50
    },
    textOne:{
        fontSize:17,
        fontWeight:'500'
     },
     textTwo:{
        fontSize:15,
        fontWeight:'300'
     },
     header:{
        marginLeft:10,
        flex:.9
    }
})