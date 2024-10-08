import { View,Text,StyleSheet } from "react-native"
import { exercises } from "../types/types";
import SingleSetCard from "./SingleSetCard";
import { FlashList } from "@shopify/flash-list";
const Sets =(props:exercises)=>{
    const {id,set} = props;
    return(
        <View>
            <Text style={Styles.head}>Set {id}</Text>
            <FlashList 
                data={set}
                renderItem={({ item }) => <SingleSetCard Svg={item.Svg} name={item.name} set={item.set}/> }
                estimatedItemSize={100}
                showsHorizontalScrollIndicator={false}
                />      
        </View>
    )
}
export default Sets;
const Styles = StyleSheet.create({
   head:{
     fontSize:15,
     fontWeight:'600'
   }
})