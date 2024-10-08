// import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';
import { View,Text, StyleSheet } from "react-native"

const ActivityCard = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.barName}>
            <View style={styles.bar}>
            <LinearGradient
                        colors={['#00FF66','#00F0FF']}
                        style={{backgroundColor:'red',width:25,height:100,borderRadius:20}}
                        />
            </View>
            <Text>Sun</Text>
            </View>
            <View style={styles.barName}>
            <View style={styles.bar}>
            <LinearGradient
                        colors={['#C150F6','#EEA4CE']}
                        style={{backgroundColor:'red',width:25,height:100,borderRadius:20}}
                        />
            </View>
            <Text>Mon</Text>
            </View>
            <View style={styles.barName}>
            <View style={styles.bar}>
            <LinearGradient
                         colors={['#00FF66','#00F0FF']}
                        style={{backgroundColor:'red',width:25,height:100,borderRadius:20}}
                        />
            </View>
            <Text>Tus</Text>
            </View>
            <View style={styles.barName}>
            <View style={styles.bar}>
            <LinearGradient
                        colors={['#C150F6','#EEA4CE']}
                        style={{backgroundColor:'red',width:25,height:100,borderRadius:20}}
                        />
            </View>
            <Text>Wen</Text>
            </View>
            <View style={styles.barName}>
            <View style={styles.bar}>
            <LinearGradient
                         colors={['#00FF66','#00F0FF']}
                        style={{backgroundColor:'red',width:25,height:100,borderRadius:20}}
                        />
            </View>
            <Text>Thu</Text>
            </View>
            <View style={styles.barName}>
            <View style={styles.bar}>
            <LinearGradient
                        colors={['#C150F6','#EEA4CE']}
                        style={{backgroundColor:'red',width:25,height:40,borderRadius:20}}
                        />
            </View>
            <Text>Fri</Text>
            </View>
            <View style={styles.barName}> 
            <View style={styles.bar}>
            <LinearGradient
                         colors={['#00FF66','#00F0FF']} 
                        style={{backgroundColor:'red',width:25,height:150,borderRadius:20}}
                        />
            </View>
            <Text>Sat</Text>
            </View>
        </View>
    )
}
export default ActivityCard;
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:20,
        padding:20,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor:'grey',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 9, 
        elevation: 5, 
        
    },
    bar:{
       backgroundColor:'grey',
       height:190,
       width:25,
       borderRadius:20,
       marginHorizontal:10,
       alignItems:'flex-end',
       justifyContent:'flex-end'
    },
    barName:{
        alignItems:'center'
    }
})