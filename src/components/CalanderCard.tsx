import { useEffect, useRef, useState } from "react";
import { View ,Text, StyleSheet, Pressable,Animated} from "react-native";
// import { AnimatedText } from "react-native-reanimated/lib/typescript/reanimated2/component/Text";
interface daraarray {
    index:number;
    header:string;
    minute:number;
    hour:number;
    day:number;
 }
interface card {
    head:daraarray[];
    hour:number;
    minute:number;
}

const CalanderCard =(props:card)=>{
    const [positionY, setPositionY] = useState<number>(0);
    const [hover,setHover] = useState(false);
    const {hour,minute,head}= props;
    const calculatePosition = (hour: number, minute: number) => {
        const value = hour * 60 + minute + 18;
        return value; 
      };
      const updateTime = () => {
        setPositionY(calculatePosition(hour, minute));
      };
    
      useEffect(() => {
        updateTime();
      });
      const fontSize = useRef(new Animated.Value(12)).current;
      const zIndex = useRef(new Animated.Value(0)).current; // Start with a zIndex of 0

      // Function to animate fontSize and zIndex
      const animateProperties = (fontSizeValue, zIndexValue) => {
        Animated.parallel([
          Animated.timing(fontSize, {
            toValue: fontSizeValue, // Target font size
            duration: 300, // Duration of the animation
            useNativeDriver: false, // Layout properties need to be handled on the JS side
          }),
          Animated.timing(zIndex, {
            toValue: zIndexValue, // Target zIndex
            duration: 300, // Duration of the animation
            useNativeDriver: false, // Layout properties need to be handled on the JS side
          }),
        ]).start();
      };
      const handlePressIn = () => {
        animateProperties(20,4); // Increase font size
      };
    
      const handlePressOut = () => {
        animateProperties(12,3); // Return to original font size
      };
    return(
        <Animated.View style={[
            styles.container,
            {top:positionY,zIndex}
            ]}>
                {
                    head.map((item)=>(    
                        <Pressable
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        >
                                    <Animated.View style={[styles.sub]}>                                        
                                    <Animated.Text style={[styles.text,{fontSize}]}>{item.header}</Animated.Text>                                           
                                    </Animated.View> 
                        </Pressable>                                                                 
                    ))
                }      
        </Animated.View>
    )
}
export default CalanderCard;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginLeft:60,
        position:'absolute',
        zIndex:3,
        flexDirection:'row',
    },
    text:{
        fontWeight:'500'
    },
    sub:{
        marginHorizontal:10,
        backgroundColor:'#9D70F1',
        padding:3,
        borderRadius:10,
        elevation:10, 
    },
    hoversub:{
        fontSize:17,
        fontWeight:'500'
    }
})