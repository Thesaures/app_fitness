
import { useRef, useState } from "react";
import { View,Text, StyleSheet,TouchableOpacity, ScrollView,Button } from "react-native"
// import { Video, ResizeMode } from 'expo-av';
// import Button from "../components/Button";
import Steps from "../components/Steps";
import { FlashList } from "@shopify/flash-list";
import { steps } from "../constants/Constants";
import Fire from '../../assets/images/fire.svg'
import Carousal from "../components/Carousal";
import { carousalData } from "../constants/Constants";
import Carousel from 'react-native-reanimated-carousel';
// import { Ionicons } from "@expo/vector-icons";
// import AntDesign from '@expo/vector-icons/AntDesign';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import Header from "../components/Header";
const SingleWorkout =()=>{
    const [status, setStatus] = useState({isPlaying:false});
    const video = useRef(null);
    const background = require('../../assets/Video/video.mp4');
    const route = useRoute();
    // const {name} = route.params;
    // const playPause =()=>{
    //     status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
    // }
    return(
       
        <View style={Styles.container}>
             <Header title={"heading"}/>
             <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                <View style={Styles.innerContainer}>
                    <View style={Styles.videoContainer}>
                    {/* <Video
                            ref={video}
                            style={Styles.backgroundVideo}
                            source={background}
                            // useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(()=>status)}
                            
                        />
                           <TouchableOpacity onPress={playPause} style={{position:'absolute'}}>
                            {status.isPlaying ?
                            <FontAwesome name="pause-circle-o" size={40} color="white" />: <AntDesign name="caretright" size={40} color="white" />} 
                           </TouchableOpacity> */}
                </View>   
                {/* <Text style={Styles.header}>{name}</Text> */}
                <Text>Easy | 390 Calories Burn</Text>
                <Text style={Styles.header}>Discriptions</Text>
                <Text>
                A jumping jack, also known as a star jump and called a side-straddle 
                hop in the US military, is a physical jumping exercise performed by 
                jumping to a position with the legs spread wide <Text style={Styles.link}>Read More...</Text>
                </Text>
                <View style={Styles.toDo}>
                    <Text style={Styles.header}>How To Do It</Text>
                    <Text >4 Steps</Text>
                </View>
                <View style={{ width: '100%', height: 500 }}>
                <FlashList
                    data={steps}
                    renderItem={({ item }) => <Steps id={item.id} heading={item.heading} discription={item.discription}/>}
                    estimatedItemSize={200}
                    showsVerticalScrollIndicator={false}
                    />
                    </View>
                    <Text style={Styles.header}>Custom Repetitions</Text>
                    <Carousel
                        loop
                        width={360}
                        height={148}
                        autoPlay={true}
                        data={carousalData}
                        mode='parallax'
                        vertical={true}
                        renderItem={({ item }) => <Carousal data={item.data}/>}
                    />
                </View>
             </ScrollView>
             {/* <Button title={"Save"}/> */}
        </View>
        

       
    )
}
export default SingleWorkout;
const Styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
       
    },
    backgroundVideo: {
        width:400,
        height:200,
        borderRadius:20,
        position:'relative'
      },
    videoContainer:{
        width:360,
        height:250,
        alignItems:'center',
        justifyContent:'center',
    },
    innerContainer:{
        width:'100%',
        paddingHorizontal:7,
        flex:1,
        marginTop:40
    },
    header: {
        fontSize: 18,
        fontWeight: '700',
        marginVertical:10
      },
    toDo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    link:{
         color:'green'
    }
    
})