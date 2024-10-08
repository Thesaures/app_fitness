
import { StyleSheet, View ,Text, FlatList} from "react-native";
import Header from "../components/Header";
import MessageCard from "../components/Message";
import React from "react";
import Pancake from '../../assets/images/pancakes.svg'
import { SvgProps } from "react-native-svg";
type notify ={
    id:string,
    header:string;
    time:string;
    Svg:React.FC<SvgProps>;
}
const arrayNoti =[
    {   
        id:'1',
        header:'hello one',
        time:'haii one',
        Svg:Pancake
    },
    {   
        id:'2',
        header:'hello two',
        time:'haii two',
        Svg:Pancake
    },

]
const Noification=()=>{
    const renderItem = ({item}:{item:notify}) => (
        <MessageCard  key={item.id} header={item.header} time={item.time} Svg={item.Svg} />
    );
    return(
        <>
        
        <View style={styles.container}>
        <Header title={"Notification"} />
            <View>
            <FlatList
                    data={arrayNoti}
                    renderItem={renderItem}
                    keyExtractor={(item) =>item.id}  
                />
            </View>
                

        </View>
        </>
        
    )
}
export default Noification;
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'white',
        padding:20,
        paddingTop:90
    }
})