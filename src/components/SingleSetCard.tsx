import { View,Text,StyleSheet } from "react-native"
// import { Ionicons } from "@expo/vector-icons";
import { singleSet } from "../types/types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
const SingleSetCard =(props:singleSet)=>{
    const {Svg,name,set} = props;
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigateTo =()=>{
          navigation.navigate('SingleWorkout',{name:name})
    }
    return(
        <TouchableOpacity onPress={navigateTo}>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                    <Svg height={80} width={80}/>
                    <View style={Styles.centre}>
                    <Text style={Styles.text}>{name}</Text>
                    <Text style={Styles.text}>{set}</Text>
                    </View>
                </View>
           {/* <Ionicons name="chevron-forward-circle-outline" size={28}/> */}
        </View>
        </TouchableOpacity>
        
    )
}

export default SingleSetCard;

const Styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:10,
      alignItems:'center'
    },
    subContainer:{
        flexDirection:'row'
    },
    centre:{
        marginLeft:20
    },
    text:{
        fontSize:15
    }
 })