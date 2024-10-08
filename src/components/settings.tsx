
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
const Setting = ()=>{
    const navigation: NativeStackNavigationProp<any>  = useNavigation();
    const navigateTo =()=>{
        navigation.navigate('settings');
    }
    return(
        <Icon name="settings" size={30} onPress={navigateTo}/>
    )
}

export default Setting;