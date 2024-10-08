import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Pedometer } from 'expo-sensors';
// import { Ionicons } from '@expo/vector-icons';
import Water from "../../assets/images/water.svg";
import Boot from '../../assets/images/boots.svg'
import ActivityCard from '../components/ActivityCard';
import CalanderCard from '../components/CalanderCard';
import Header from '../components/Header';
import HomePageHeader from '../components/HomePageHeader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [permission, setPermission] = useState('checking');
  const [perm, setPerm] = useState('');
  const [target,setTarget] = useState(165);

  const dispatch = useDispatch();
    const auth = useSelector((state:{isAuth: boolean;}) => state.isAuth);
    const clickFunction =async()=>{
        console.log('logged in :',auth)
        // await AsyncStorage.setItem('my-key', 'false');
        dispatch(logout())
    }
  // const subscribe = async () => {
  //   const permissionResult = await Pedometer.getPermissionsAsync();
  //   setPermission(permissionResult.granted ? 'granted' : 'denied');
  //   const isAvailable = await Pedometer.isAvailableAsync();
  //   setIsPedometerAvailable(isAvailable ? 'yes' : 'no');

  //   if (isAvailable) {
  //     const end = new Date();
  //     const start = new Date();
  //     start.setHours(0, 0, 0, 0); 
  //     const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
  //     setPastStepCount(pastStepCountResult.steps);
  //     const subscription = Pedometer.watchStepCount(result => {
  //       setCurrentStepCount(result.steps);
  //     });
  //     return subscription;
  //   }
  // };
  useEffect(() => {
    let subscription;
    (async () => {
      // subscription = await subscribe();
    })();
  }, [currentStepCount]);

  return (
    <>
    <HomePageHeader />
    <View style={styles.container}>
      <View style={styles.activity}>
        <View style={styles.headView}>
        <Text style={styles.head}>Today Target</Text>
        <View style={styles.add}>
          {/* <Ionicons name='add-outline' size={20} color={'white'} svg={styles.svg}/> */}
        </View>
        </View>
        
        <View style={styles.measure}>
        <View style={styles.water}>
          <Water height={35} width={30} style={styles.svg}/>
          <View>
            <Text style={styles.text}>8L</Text>
          <Text style={styles.text}>Water Intake</Text>
          </View>
         
        </View>
        <View style={[styles.water,{marginLeft:20}]}>
          <Boot height={35} width={30} style={styles.svg}/>
          <View>
          <Text style={styles.text}>{pastStepCount}</Text>
          <Text style={styles.text}>Foot Steps</Text>
          </View>
         
        </View>
        </View>
        
      </View>
      <ActivityCard/>
      <TouchableOpacity style={{padding:10,backgroundColor:'grey'}} onPress={clickFunction}>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
   
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  activity:{
    backgroundColor:'#F4DBF9',
    padding:20,
    borderRadius:20,
  },
  head:{
    flex:1,
    fontSize:15,
    fontWeight:'600'
  },
  add:{
    padding:3,
    backgroundColor:'#8863F3',
    borderRadius:10
  },
  headView:{
    flexDirection:'row',
    alignItems:'center'
  },
  measure:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:10
  },
  water:{
    backgroundColor:'white',
    flexDirection:'row',
    padding:13,
    borderRadius:20
  },
  svg:{
      marginRight:10
  },
  text:{
    fontSize:16
}
});
