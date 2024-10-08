import { Text, TouchableOpacity, StyleSheet } from "react-native"
// import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';
type button={
    title:string
}
const Button =(props:button)=>{
    const {title} = props;
    return(
    
          <LinearGradient
                colors={['#EEA4CE', '#C150F6']}
                start={{ x: 0, y: 0 }}  
                end={{ x: 1, y: 0 }}  
                style={Styles.button}
            >
                <TouchableOpacity>
                <Text style={Styles.buttonLabel}>{title}</Text>
                </TouchableOpacity>
            </LinearGradient>
    )
}
export default Button;

const Styles =StyleSheet.create({
    button: {
        position: 'absolute',
        zIndex: 3,
        bottom: 30,
        padding: 20,
        borderRadius: 30,
        width:"100%",
        alignItems:'center'
      },
      buttonLabel: {
        fontSize: 18,
        fontWeight: '600',
        color:'white'
      },
})