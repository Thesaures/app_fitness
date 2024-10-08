/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
import { Colors } from "../constants/Colors";
// import { Ionicons } from "@expo/vector-icons";
import { View,Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from "react-native"
// import { LinearGradient } from "expo-linear-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Five from '../../assets/images/imageFive.svg';
import React from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Setting from "../components/settings";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get('window');
const Intro =()=>{    
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    const navigater =()=>{
        navigation.navigate('Slider');
    }
    const {t} = useTranslation();
    return(
        <ScrollView>
             <View style={styles.container}>     
                <View style={styles.headSettings}>
                      <Setting/>
                    </View>       
            <View style={styles.upper}>
              <Five width={width*0.9} height={height * 0.33}/>
            </View>
            
            <View style={styles.lower}>
            <Text style={styles.head}> {t('great')}</Text>
            <Text>{t( "name")}</Text>
            <View style = {styles.name}>
                {/* <Ionicons name="people-outline" size={18}/> */}
                <TextInput style = {styles.textIput} placeholder={t("gender")} placeholderTextColor={'grey'}></TextInput>
             </View>
             <View style = {styles.name}>
                {/* <Ionicons name="calendar-outline" size={18}/> */}
                <TextInput style = {styles.textIput} placeholder={t("dob")} placeholderTextColor={'grey'}></TextInput>
             </View>
             <View style={styles.bottom}>
                    <View style = {styles.name}>
                        {/* <Ionicons name="barbell-outline" size={18}/> */}
                    <TextInput style = {styles.textIput} placeholder={t("weight")} placeholderTextColor={'grey'}></TextInput>
                    </View>
                    <LinearGradient
                        colors={['#EEA4CE','#C150F6']}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 1, y: 0 }}  
                        style={styles.viewBottom}
                        >
                        <Text style={styles.bottomText}>KG</Text>
                    </LinearGradient>                   
             </View>
             <View style={styles.bottom}>
                    <View style = {styles.name}>
                        {/* <Ionicons name="arrow-up-outline" size={18}/> */}
                        <TextInput style = {styles.textIput} placeholder={t("height")} placeholderTextColor={'grey'}></TextInput>
                    </View>
                    <LinearGradient
                        colors={['#EEA4CE','#C150F6']}
                        start={{ x: 0, y: 0 }}  
                        end={{ x: 1, y: 0 }}  
                        style={styles.viewBottom}
                        >
                        <Text style={styles.bottomText}>CM</Text>
                    </LinearGradient>                  
             </View>
            <TouchableOpacity style = {styles.button} onPress={navigater}>
                <Text style = {styles.buttonText}>{t('next')}</Text>
                {/* <Ionicons name="chevron-forward" size={20} color={'white'}/> */}
            </TouchableOpacity>            
            </View>
              </View>
        </ScrollView>
       
    )
}
export default Intro;
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    upper:{
        alignItems:'center',
        justifyContent:'center',
        flex:0.4,
    },
    lower:{
        flex:0.6,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20,
        marginTop:40
    },
    head:{
       fontSize:25,
       fontWeight:'800'
    },
    name:{
        flexDirection:'row',
        flex:1,
        backgroundColor:Colors.inputbg,
        borderRadius:10,
        padding:7,
        alignItems:'center',
        marginTop:10,
        // marginBottom:5
    },
    textIput:{
        flex:1,
        marginLeft:10
    },
    button:{
        backgroundColor:Colors.button,
        padding:25,
        paddingHorizontal:135,
        borderRadius:40,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:20
    },
    bottom:{
        flexDirection:'row',
        alignItems:'center',
    },
    viewBottom:{
         marginLeft:10,
         padding:15,
         borderRadius:10
    },
    bottomText:{
        color:'white'
    },
    headSettings:{
        width:'90%',
        alignItems:'flex-end',
        marginTop:10
    }
    
})