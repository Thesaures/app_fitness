import { View,Text, Dimensions,StyleSheet, TouchableOpacity } from "react-native"
import {LineChart} from "react-native-chart-kit";
import { Colors } from "../constants/Colors";
import Modal from "react-native-modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
// import {LineChart} from "react-native-gifted-charts";
const screenWidth = Dimensions.get("window").width;
const HeartRate =()=>{
    const [modal,setModal] = useState(false);
    const navigation:NativeStackNavigationProp<any>  = useNavigation();
    const navigateTo =()=>{
        navigation.navigate('homefirst');
    }
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#1E2923",
        backgroundGradientToOpacity: 0,
        color: () => `black`,
        strokeWidth: 2,
        fillShadowGradientFrom:"#DBD9FD",
        fillShadowGradientFromOpacity:5,
        fillShadowGradientTo:'white',
        fillShadowGradientToOpacity:0
      };
    const data = {
        labels: [],
        datasets: [
          {
            data: [40, 45,43,50,46,50,40,50,38,42,49,48,50,47,50],
            color: () => '#D479E9',
          }
        ],
      };
    return (
        <TouchableOpacity onPress={navigateTo}>
                <View style={[styles.container,{width:screenWidth*0.8}]}>
                <Modal isVisible={modal}>
                    <View style={{ height:20,width:60,backgroundColor:'red' }}>
                    <Text>I am the modal content!</Text>
                    </View>
                </Modal>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={100}
                    chartConfig={chartConfig}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLabels={false}
                    withHorizontalLabels={false}
                    fromZero={true}
                    withDots={false}
                    onDataPointClick={(data)=>{
                        console.log('data',data)
                        setModal(!modal)}}
                    />
                <View style={styles.heartMeasure}>
                    <Text style={styles.textOne}>
                        Heart Rate
                    </Text>
                    <Text style={styles.textTwo}>
                        78 BPM
                    </Text>
                </View>
            
                </View>
        </TouchableOpacity>
       
    )
}
export default HeartRate;
const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:20,
        paddingRight:40,
        paddingTop:60,
        backgroundColor:'#F6E8FD',
        height:150,

    },
    heartMeasure:{
        position:'absolute',
        flex:1,
        left:30,
        top:10
    },
    textOne:{
        color:'black'
    },
    textTwo:{
        color:'#E6A8E8',
        fontSize:15,
        fontWeight:'500'
    }

})