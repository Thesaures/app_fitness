import { View,Text, StyleSheet } from "react-native";
import { equip } from "../types/types";
const EquipmentCard =(props:equip)=>{
    const {name,Svg} = props;
    return(
        <View style={Styles.single}>
            <View style={Styles.component}>
                <Svg height={70} width={70}/>
            </View>
            <Text>{name}</Text>
        </View>
    )
}

export default EquipmentCard;
const Styles = StyleSheet.create({
    component:{
        backgroundColor:'#F7F8F8',
        padding:20,
        borderRadius:20
    },
    single:{
        marginRight:10,
        marginVertical:10,
       
    }
})