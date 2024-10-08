import { View,Text, StyleSheet, ScrollView } from "react-native"
import HomePageHeader from "../components/HomePageHeader";
import Bmi from "../components/Bmi_Componet";
import { Colors } from "../constants/Colors";
import HeartRate from "../components/HeartRate";
import TodayTarget from "../components/TodayTarget";
import WaterIntake from "../components/WaterIntake";
const HomeBottom =()=>{
    return (
        <View style={styles.container}>
            <HomePageHeader/>
            <View style={{paddingHorizontal:40,paddingTop:50}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Bmi/>
                    <TodayTarget/>
                    <Text style={styles.head}>Activity Status</Text>
                    <HeartRate/>
                    <View style={styles.sub}>
                    <WaterIntake/>
                    </View>
                </ScrollView>
                
              
            </View>
        </View>
    )
}
export default HomeBottom;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'flex-start',
        flex:1,
        backgroundColor:Colors.pagebg,    
    },
    head:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:10,
        marginLeft:10
    },
    sub:{
        flexDirection:'row'
    }
})