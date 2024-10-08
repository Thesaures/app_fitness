import { View,Text, StyleSheet } from "react-native";
import Fire from '../../assets/images/fire.svg'
import { singleData } from "../types/types";
const Carousal =(props:singleData)=>{
    const {data} = props;
    return(
      
        <View style={{
            alignItems:'center',
            flex:1,
            }}>
            <View style={Styles.container}>
                <Fire height={30} width={30}/>
                <Text style={{fontSize:30}}>{data}</Text>
            </View>
            <View style={{borderBottomWidth:2,
                width:200,
                height:10
                }}/>
        </View>
    )
}
export default Carousal;

const Styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        flex:1,
        marginBottom:40
    }
})