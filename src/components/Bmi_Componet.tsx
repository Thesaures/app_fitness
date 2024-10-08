import { View,Text, StyleSheet, ImageBackground, Dimensions } from "react-native"
import { Colors } from "../constants/Colors";
import BackGroung from '../../assets/images/Banner.svg';
import PieChart from 'react-native-pie-chart';
const screenWidth = Dimensions.get("window").width;
const Bmi =()=>{
    const widthAndHeight = 100
    const series = [95,265]
    const sliceColor = ['#E6C4EE',"white"]
    return (
        <View style={styles.container}>
           
                  <BackGroung width={330} height={185}/>
                    <View style={styles.textContainer}>
                        <View style={styles.containerRight}>
                            <Text style={styles.text}>
                                BMI (Body Mass Index)
                            </Text>
                            <Text style={styles.text}>
                                You have normal weight
                            </Text>
                            <View style={styles.more}>
                                  <Text style={styles.text}>View more</Text>
                            </View>
                            
                        </View>
                        <View style={styles.containerLeft}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={series}
                                sliceColor={sliceColor}
                            />
                            <Text style={styles.measure}>
                                20,1
                            </Text>
                        </View>
                  
                    </View>  
                  
        </View>
    )
}
export default Bmi;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        position:'relative',
        zIndex:1,  
        width:screenWidth*0.8,
        marginTop:30
    },
    textContainer:{
        position:'absolute',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-evenly',
         margin:15,
         top:0
    },
    text:{
        color:'white',
        marginVertical:5
    },
    containerLeft:{
        marginLeft:30,
    },
    more:{
        backgroundColor:Colors.buttonMore,
        padding:5,
        borderRadius:25,
        marginTop:20,
        paddingHorizontal:18
    },
    containerRight:{
        alignItems:'flex-start',
    },
    measure:{
        color:'white',
        position:'absolute',
        left:60,
        top:20
    }
})