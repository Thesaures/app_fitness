// import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';
import { View,Text, Dimensions, StyleSheet } from "react-native"
import Six from '../assets/images/six.svg'
import { SvgProps } from "react-native-svg";
type card ={
    Svg:React.FC<SvgProps>;
    head:String;
    textOne:String;
    textTwo:String;
    textThree:String;
}
const Intro = (props:card)=>{
    const { width, height } = Dimensions.get('window');
    const{Svg,head,textOne,textTwo,textThree}=props;
    return(
        <View>
            <LinearGradient
                        colors={['#EEA4CE','#C150F6']}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 1, y: 0 }}  
                        style={styles.viewBottom}
                        >
                        <Svg width={width*0.6} height={height * 0.5}/>
                        <Text style={styles.header}>{head}</Text>
                        <View style={styles.line}/>
                        <Text style={styles.para}>
                        {textOne}
                        </Text>
                        <Text style={styles.para}>
                        {textTwo}
                        </Text>
                        <Text style={styles.para}>
                        {textThree}
                        </Text>
            </LinearGradient>
           

        </View>
    )
}
export default Intro;
const styles = StyleSheet.create({
    viewBottom:{
        padding:20,
        paddingHorizontal:30,
        borderRadius:20,
        alignItems:'center'
    },
    header:{
        color:'white',
        fontSize:20,
        fontWeight:'500'
    },
    line:{
        borderColor:'white',
        borderWidth:.8,
        width:60,
        marginVertical:10
    },
    para:{
        color:'white',
        fontSize:15,
        // marginHorizontal:20
    }
})