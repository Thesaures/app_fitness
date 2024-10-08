import { useEffect, useState } from "react";
import { View,Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import CalanderCard from "../components/CalanderCard";
import { FlashList } from "@shopify/flash-list";
import DateCard from "../components/DateCard";
// import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import React from "react";
import { updatingTask } from "../helper";
interface daraarray {
   index:number;
   header:string;
   minute:number;
   hour:number;
   day:number;
}
interface updated{
   time:number;
   tasks:daraarray[];
}
const Profile =()=>{
    const [updatedArray,setUpdatedArray] = useState<any>([]);
    const [newDataArray,setNewDataArray] = useState<updated[]>([])
    const dataArray=[
        {
            index:1,
            header:'Upperbody Workout',
            minute:50,
            hour:6 ,
            day:9  
        },
        {   
            index:2,
            header:'Lowerbody Workout',   
            minute:30,
            hour:8 ,
            day:9  
        },
        {
            index:3,
            header:'Fullbody Workout',
            minute:0,
            hour:9,
            day:8
        },
        {
         index:3,
         header:'Fullbody Workout',
         minute:30,
         hour:11,
         day:8
     },
        
    ]
    const[arrayData,setArrayData] = useState<any>(dataArray)
    const timeData=[
        {
           time:'12 am' 
        },
        {
            time:'01 am' 
         },
         {
            time:'02 am' 
         },
         {
            time:'03 am' 
         },
         {
            time:'04 am' 
         },
         {
            time:'05 am' 
         },
         {
            time:'06 am' 
         },
         {
             time:'07 am' 
          },
          {
             time:'08 am' 
          },
          {
             time:'09 am' 
          },
          {
             time:'10 am' 
          },
          {
            time:'11 am' 
         },
         {
            time:'12 pm' 
         },
         {
            time:'01 pm' 
         },
         {
            time:'02 pm' 
         },
         {
            time:'03 pm' 
         },
         {
            time:'04 pm' 
         },
         {
            time:'05 pm' 
         },
         {
            time:'06 pm' 
         },
         {
             time:'07 pm' 
          },
          {
             time:'08 pm' 
          },
          {
             time:'09 pm' 
          },
          {
             time:'10 pm' 
          },
          {
            time:'11 pm' 
         },
    ]
    const now = new Date();
    const [currntTime,setCurrentTime] = useState(new Date())
    const day = currntTime.getDate();
    const [positionY, setPositionY] = useState<number>(0);
    const [todayData,setTodayData] = useState(day);
    const [task,setTask] = useState('');
    const [hours,setHours] = useState('');
    const [minutes,SetMinutes] = useState('');
    const [presentDay,setDay] = useState ('');
    const [modal,setModal] = useState(false);
    const addNewTask =()=>{
      const id = dataArray.length +1
      if(task && hours && minutes && presentDay){  
      //    setArrayData((preState:any)=>(
      //       [...preState,{
      //             index:id,
      //             header:task,
      //             minute:Number(minutes),
      //             hour:Number(hours) ,
      //             day:Number(presentDay)               
      //       }]
      //   ))
      const newTask = {
         index: arrayData.length + 1,
         header: task,
         minute: Number(minutes),
         hour: Number(hours),
         day: Number(presentDay),
       };
       
       setArrayData(prevState => {
         const newArray = [...prevState,newTask];
         console.log('New Array Data:', newArray)
         return newArray;
       });
         setModal(false)       
      }          
    }  
    const calculatePosition = (hour: number, minute: number) => {
      const value = hour * 60 + minute;
      return value; 
    };
    const updateTime = async () => {
      const now = new Date();
      setPositionY(calculatePosition(now.getHours(),now.getMinutes()));
    };
    const updateTask =()=>{
      setUpdatedArray(()=>{
                 const newArray = arrayData.filter((item:any) =>item.day == todayData);
               const groupedArray = newArray.reduce((acc, task) => {
                  const existingEntry = acc.find(
                     item => item.time === task.hour && item.minute === task.minute
                  );
                  if (existingEntry) {
                    existingEntry.tasks.push(task);
                  } else {
                    acc.push({
                      time: task.hour,
                      minute:task.minute,
                      tasks: [task]
                    });
                  }
                  return acc;
                }, []);
                setNewDataArray(groupedArray);
               return newArray;               
      })   
    }  
    useEffect(()=>{
      updateTask();
    },
    [todayData,arrayData]
   )
   useEffect(() => {
      updateTime(); 
      const intervalId = setInterval(() => {
        updateTime(); 
      }, 60*1000); 
      return () => clearInterval(intervalId); 
    }, []);  
    return(
        <>
        <GestureHandlerRootView>
            <View style={{position:'relative',flex:1}}>
           {/* this is modal */}
            <View>
               <Modal isVisible={modal}>
               <View style={{ 
                  flex: 1,
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor:'white',
                  padding:18
                   }}>
                  <View style={styles.input}>
                  <Text>Task         : </Text>
                  <TextInput placeholder="task name" style={{flex:1}} onChangeText={setTask}></TextInput>
                  </View>
                  <View style={styles.input}>
                  <Text>Hours       : </Text>
                  <TextInput placeholder="hours" style={{flex:1}}  onChangeText={setHours}></TextInput>
                  </View>
                  <View style={styles.input}> 
                  <Text>Minutes  : </Text>
                  <TextInput placeholder="minutes" style={{flex:1}} onChangeText={SetMinutes}></TextInput>
                  </View>
                  <View style={styles.input}> 
                  <Text>Day         : </Text>
                  <TextInput placeholder="day" style={{flex:1}} onChangeText={setDay}></TextInput>
                  </View>                  
                  <TouchableOpacity style={styles.save} onPress={addNewTask}>
                  <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
               </View>
              
               </Modal>
            </View>
               <View style={styles.top}>
               <DateCard updateTask={setTodayData} /> 
               </View>
            <ScrollView>      
         {timeData.map((item:any)=>(           
              <View style={{flexDirection:'row',marginVertical:19}}>
              <Text style={{marginLeft:10}}>{item.time}</Text>
              <View style={{borderColor:'black',borderWidth:1,width:'100%',margin:10,}}></View>
              </View>
             ))}
        <View style={{
                borderColor:'red',
                borderWidth:1,
                width:'100%',
                margin:10,
                position:'absolute',
                top:19+positionY,
                zIndex:2
                }}/>
               {newDataArray.map((item:any,index:number)=>(
                  <CalanderCard 
                  key={index} 
                  head={item.tasks} 
                  hour={item.time} 
                  minute={item.minute}

                  /> 
                  ))}  
      </ScrollView>      
        <TouchableOpacity 
        style={{ 
         padding:10,
         backgroundColor:'#9C6FF1',
         borderRadius:50,
         position:'absolute',
         zIndex:4,
         top:680,
         left:350
         }} 
         onPress={()=>setModal(true)}>   
         {/* <Ionicons name="add-outline" size={30} color={'white'}/> */}
       </TouchableOpacity>
      </View>
        </GestureHandlerRootView>
        </> 
    )
}
export default Profile;
const styles = StyleSheet.create({
   top:{
      // marginTop:35,
      alignItems:'center',      
   },
   save:{
      backgroundColor:'#D174F0',
      padding:10,
      borderRadius:10
   },
   saveText:{
      fontSize:15,
      fontWeight:'500'
   },
   input:{
      borderColor:'grey',
      borderWidth:3,
      flexDirection:'row',
      alignItems:'center',
      padding:7,
      borderRadius:10,
      marginVertical:10
   }
})