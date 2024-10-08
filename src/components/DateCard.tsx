// import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
const dataArray=[
    {
      week:'Mon',
      day:6
    },
    {
      week:'Tus',
      day:7
    },
    {
      week:'Wen',
      day:8
    },
    {
      week:'Thu',
      day:9
    },
    {
      week:'Fri',
      day:10
    },
    {
      week:'Sat',
      day:11
    },
    {
      week:'Sun',
      day:12
    },
]
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

interface card {
    week:string;
    day:number;
    index:number;
    cardNo:number;
    cardFunc:React.Dispatch<React.SetStateAction<number>>;
    updateTask:React.Dispatch<React.SetStateAction<number>>;
}
interface Day {
    week: string;
    day: number;
}
interface Func {
    updateTask:React.Dispatch<React.SetStateAction<number>>;
}

interface MonthData {
    month: string;
    days: Day[];
}
const DateCard =(props:card)=>{
    const {week,day,index,cardFunc,cardNo,updateTask} = props;
    const clickFunction =(value:number)=>{
        cardFunc(value);
        updateTask(day);
    }
     return(
        <TouchableOpacity onPress={()=>clickFunction(index)}>
            <View   style={[styles.container,{backgroundColor:cardNo == index?'#DE9AF3':'white'}]}>
            <Text style={styles.text}>{week}</Text>
            <Text style={styles.text}>{day}</Text>
        </View>
        </TouchableOpacity>
        
     )
}


const AllDate =(prop:Func)=>{
    const{updateTask}= prop;
    const now = new Date();
    const yearInfo = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const [presentData,setPresentData] = useState(month);
    const [active,setActive] = useState(day-1);

    
    const updateData =(value:number)=>{
        setPresentData((prevData)=>(
                      prevData+value
        ))
    }
    const setDate =(year:number,arrayMonth:string[],)=>{
        let monthData:MonthData[]=[]
        for(let i=0;i<12;i++){
            const daysInMonth = new Date(year, i + 1, 0).getDate(); 
            monthData.push({
                month: arrayMonth[i],
                days: []
            });
            monthData.map((item)=>{
                if(item.month == arrayMonth[i]){
                            for (let day = 1; day <= daysInMonth; day++) {
                            const date = new Date(year, i, day);
                            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); 
                            item.days.push({
                                day: day,
                                week:dayName
                            });
                    }
                }
            })
        
    }
    return monthData;
}
const yearInformation = setDate(yearInfo,months);
const dateCardComponent =(item:any,index:number)=>{
             return(
                <DateCard 
                                 key={index}
                                 week={item.week} 
                                 day={item.day} 
                                 index={index} 
                                 cardNo={active}
                                 cardFunc={setActive}
                                 updateTask={updateTask}
                                 />
             )
}
    return(
        <>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>updateData(-1)}>
            {/* <Ionicons name="chevron-back-outline" size={25}/> */}
            </TouchableOpacity> 
            <Text style={{margin:10,fontSize:20}}>{yearInformation[presentData].month}</Text>
            <TouchableOpacity onPress={()=>updateData(1)}>
            {/* <Ionicons name="chevron-forward-outline" size={25}/> */}
            </TouchableOpacity> 
        </View>  
        <FlatList
                data={yearInformation[presentData].days}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item,index }) => dateCardComponent(item,index)}
                />       
        </>    
    )
    
}


export default AllDate;
const styles = StyleSheet.create({
    container:{
         justifyContent:'center',
         alignItems:'center',
         padding:10,
         borderRadius:10,
         marginHorizontal:10,
         width:80
    },
    text:{
        fontSize:11,
        fontWeight:'500'
    }
})