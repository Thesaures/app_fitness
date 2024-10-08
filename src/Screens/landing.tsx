import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Starting = () => {
  const navigation: NativeStackNavigationProp<any> = useNavigation();
  const navigator = () => {
    navigation.navigate('OnePage');
  };
  return (
    <LinearGradient
      colors={['#EEA4CE', '#C150F6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.6,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.name}>
            <Text style={styles.firstname}>DIDPOOL</Text>
            <Text style={styles.secondtname}>Fit</Text>
          </View>

          <Text style={styles.line}>Everybody Can Train</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity style={styles.button} onPress={navigator}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
export default Starting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flexDirection: 'row',
  },
  firstname: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  },
  secondtname: {
    color: 'black',
    fontSize: 35,
    fontWeight: '700',
  },
  line: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    backgroundColor: Colors.button,
    padding: 25,
    paddingHorizontal: wp('35%'),
    borderRadius: 40,
    marginBottom: hp('1'),
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: hp('2.5%'),
  },
});
