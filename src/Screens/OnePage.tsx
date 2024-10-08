import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import Picture from '../../assets/images/imageone.svg'
import { Colors } from "../constants/Colors";
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from "react-native-svg";
// import { Link } from "expo-router";
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/MaterialIcons";
const OnePage=()=>{
    const { width, height } = Dimensions.get('window');
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigator = () => {
      navigation.navigate('TwoPage');
    };
    return(
        <View style={styles.container}>
            <View style={styles.upper}>
            <Picture width={wp('100%')} height={hp('90%')} />
            </View>
            <View style={styles.lower}>
                {/* <View style={{flex:.3,backgroundColor:'red'}}></View>  */}
                <View style={styles.section}>
                <Text style={styles.header}>Track Your Goals</Text>
                <Text style={styles.paragraph}>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</Text>
                </View>

                <View style={{alignItems:'flex-end',marginBottom:30}}>
               
                <TouchableOpacity onPress={navigator}>
                <AnimatedCircularProgress
                    size={wp('15%')}
                    width={wp('1%')}
                    rotation={0}
                    fill={25}
                    tintColor="#8762F3"
                    backgroundColor="#FFFFFF"
                   children={()=>{
                    return(
                         <View style={styles.inner}>
                            <Icon name="chevron-right" size={20} color={'white'}/>
                        </View>    
                    )
                   }
                }
                    />
                </TouchableOpacity>    
                </View>  
                           
            </View>
        </View>
    )
}
export default OnePage;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg

    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lower:{
        flex:1,
        marginHorizontal:30,
        justifyContent:'space-between'
    },
    header:{
        fontSize:hp('3%'),
        fontWeight:'600'
    },
    paragraph:{
        fontSize:hp('2%'),
        marginTop:10
    },
    section:{
        marginTop:50
    },
    inner:{
        backgroundColor:'#8762F3',
        padding:wp('2%'),
        borderRadius:50,
        borderColor:'#FFFFFF',
        borderWidth:wp('1%')
    },
})