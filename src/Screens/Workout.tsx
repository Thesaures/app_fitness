// import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";
import EquipmentCard from "../components/EquipmaentCard";
import { data } from "../constants/Constants";
import SetCard from "../components/Sets";
import { sets } from "../constants/Constants";
import LinearGradient from 'react-native-linear-gradient';

import Jump from '../../assets/images/jumping.svg'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

const Workout = () => {
  function clamp(val: number) {
    'worklet';
    return Math.min(Math.max(val, -350), 0);
  }
  const prevTranslationY = useSharedValue(0);
  const offset = useSharedValue<number>(0);
  const pan = Gesture.Pan()
    .onBegin((event) => {
      prevTranslationY.value = offset.value;
    })
    .activateAfterLongPress(1000)
    .onChange((event) => {
        console.log('Initial position : ', prevTranslationY.value);
        console.log('event position : ',event.translationY);
        offset.value = clamp(prevTranslationY.value + event.translationY);
    })

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: offset.value },
    ],
  }));

  return (
    <LinearGradient
        colors={['#EEA4CE', '#C150F6']}
        start={{ x: 0, y: 0 }}  
        end={{ x: 1, y: 0 }}  
        style={Styles.container}
       >
    <View style={Styles.container}>
      <View style={Styles.circle}>
         <Jump height={380} width={300}/>
      </View>
      <GestureDetector gesture={pan}>
        <Animated.View style={[Styles.subContainer, animatedStyles]}>
          <View style={Styles.topView} />
          <View style={Styles.innerContainer}>
            <Text style={Styles.header}>FullBody Workout</Text>
            <Text style={Styles.subHead}>11 Exercises | 32mins | 320 Calories Burn</Text>
            <View style={Styles.time}>
              {/* <Ionicons name="calendar-outline" size={28} /> */}
              <Text style={Styles.text}>Schedule Workout</Text>
              <Text style={Styles.text}>5/27 09:00 AM</Text>
              {/* <Ionicons name="chevron-forward-outline" size={28} /> */}
            </View>
            <View style={Styles.level}>
              {/* <Ionicons name="arrow-down-outline" size={28} /> */}
              <Text style={Styles.text}>Difficulty</Text>
              <Text style={Styles.text}>Beginner</Text>
              {/* <Ionicons name="chevron-forward-outline" size={28} /> */}
            </View>
            <View style={Styles.list}>
              <Text style={Styles.header}>You will need</Text>
              <Text>5 items</Text>
            </View>
            <FlashList 
              data={data}
              renderItem={({ item }) => <EquipmentCard name={item.name} Svg={item.Svg} />}
              estimatedItemSize={100}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />  
            <View style={Styles.list}>
              <Text style={Styles.header}>Exercise</Text>
              <Text>3 sets</Text>
            </View>
            <View style={{ width: '100%', height: 400 }}>
              <FlashList 
                data={sets}
                renderItem={({ item }) => <SetCard id={item.id} set={item.set} />}
                estimatedItemSize={100}
                showsVerticalScrollIndicator={false}
              />  
            </View>    
          </View>
        </Animated.View>
      </GestureDetector>

      <LinearGradient
        colors={['#EEA4CE', '#C150F6']}
        start={{ x: 0, y: 0 }}  
        end={{ x: 1, y: 0 }}  
        style={Styles.button}
      >
        <TouchableOpacity>
          <Text style={Styles.buttonLabel}>Start Workout</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
    </LinearGradient>
  );
};

export default Workout;

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
    zIndex: 1
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopWidth: 2,
    borderBottomWidth: 0,
    position: 'absolute',
    zIndex: 2,
    top: 380,
    backgroundColor:'white'
  },
  topView: {
    backgroundColor: 'grey',
    width: 65,
    height: 8,
    borderRadius: 10,
    marginVertical: 10
  },
  innerContainer: {
    width: '100%'
  },
  header: {
    fontSize: 18,
    fontWeight: '700'
  },
  subHead: {
    color: 'grey'
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#CCFEEB',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10
  },
  level: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8EBFC',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 15
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  component: {
    backgroundColor: '#F7F8F8',
    padding: 20
  },
  single: {
    marginRight: 10,
    marginVertical: 10,
  },
  button: {
    position: 'absolute',
    zIndex: 3,
    bottom: 30,
    padding: 20,
    borderRadius: 30,
    paddingHorizontal: 120
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600'
  },
  circle:{
    height:300,
    width:300,
    backgroundColor:'#E4AAF3',
    marginBottom:380,
    borderRadius:140,
    alignItems:'center'
  }
});
