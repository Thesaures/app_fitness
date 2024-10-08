import { Colors } from "../constants/Colors";
import { View ,Text, Dimensions, Image, StyleSheet, TouchableOpacity} from "react-native"
import Carousel from "react-native-reanimated-carousel";
import Intro from "../components/Intro";
import Six from '../../assets/images/six.svg'
import Seven from '../../assets/images/seven.svg'
import Eight from '../../assets/images/eight.svg'
import { SvgProps } from "react-native-svg";
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";
type card ={
    svg:React.FC<SvgProps>;
    head:String;
    textOne:String;
    textTwo:String;
    textThree:String;
}
const Slider =()=>{
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigator = () => {
      navigation.navigate('BottomTabNavigation');
    };
    const colors = [
        {
            svg:Six,
            head:'Improve Shape',
            textOne:'I have a low amount of body fat ',
            textTwo:'and need / want to build more ',
            textThree:'muscle',

        },
        {
            svg:Seven,
            head:'Lean & Tone',
            textOne:'I’m “skinny fat”. look thin but have ',
            textTwo:'no shape. I want to add learn',
            textThree:'and need / want to build more ',

        },
        {
            svg:Eight,
            head:'Lose a Fat',
            textOne:'I have over 20 lbs to  ',
            textTwo:'lose. I want to drop all this fat and  ',
            textThree:'gain muscle mass',

        },
      ];
      const { width, height } = Dimensions.get('window');
    return(
        <View style={styles.container}>
            
            <Text style={styles.header}>What is your goal</Text>
            <Text style={styles.line}>It will help us to choose a </Text>
            <Text style={styles.line}>best program for you</Text>
            
           
           {/* <Carousel
                loop
                style={styles.carousel}
                height={height*.7}
                width={width}
                mode="parallax"
                modeConfig={{
                parallaxScrollingScale: 1,
                parallaxScrollingOffset: 2,
                }}
                data={colors}
                renderItem={
                    ({ index,item }:{index:number;item:card}) =>  
                    <View style={styles.carouselItem}>
                     <Intro Svg={item.svg} head={item.head} textOne={item.textOne} textTwo={item.textTwo} textThree={item.textThree}/>
                  </View>
                    }
      /> */}
      
                <TouchableOpacity style = {styles.button} onPress={navigator}>
                <Text style = {styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
     
          
        </View>
    )
}
export default Slider;
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:35,
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
         fontSize:30,
         fontWeight:'600'
    },
    line:{
        fontSize:15
    },
    button:{
        backgroundColor:Colors.button,
        padding:25,
        paddingHorizontal:'33%',
        borderRadius:40,
        marginBottom:'3%'
        
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20
    },
    carousel: {
        borderRadius: 10,
      },
      carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
      },
      image: {
        width: '100%', 
       
        resizeMode: 'contain',
      }
})