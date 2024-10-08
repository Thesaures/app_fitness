
import notifee from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView,} from "react-native-gesture-handler";
import { useDispatch,} from "react-redux";
import Facebook from '../../../assets/images/Facebook.svg';
import Google from '../../../assets/images/google.svg';
import styles from "./styles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useForm} from 'react-hook-form';
import InputFields from '../../components/InputFields';
import { login } from '../../features/auth/authSlice';

const HomePage = ()=>{
    const [fields,setField] = useState('');
    const [message,setMessage] = useState('');
    const [eye,setEye] = useState(true);
    const [checkBox,setCheckBox] = useState(false);
    const dispatch = useDispatch();
    const {control,handleSubmit,formState:{errors}} = useForm();

      useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '211694041760-6blhmr6gmc0fe0ghkbqc0155pdf38brp.apps.googleusercontent.com',
    });
  },[]);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const idToken = await GoogleSignin.signIn();
    console.log('token : ',idToken);
    console.log('name : ',idToken.data?.user.name);
    // Alert.alert('login succses');
    dispatch(login());

    // navigateToPage();
    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
  }
    // const auth = useSelector((state:{value:boolean}) => state.auth.isAuth);
    const navigation: NativeStackNavigationProp<any> = useNavigation();
    // console.log("this is redux var : ",auth);
    const onCheck =()=>{
        setCheckBox(!checkBox)
    }
    const changeEye = ()=>{
        setEye(!eye)
    }
    const navigateToPage =async(data)=>{
      console.log('data : ',data)
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
        
            // const { success, createUserResp } = await createUser({
            //     username: name,
            //     email: email,
            //     password: password,
            //     role:'Manager',
            //   });         
          console.log('HELLO ENTERED TO NOTIFICATION')
          await notifee.displayNotification({
            title: `Welcome ${data.username}`,
            body: 'Start your fitness now',
            android: {
              channelId,
              pressAction: {
                id: 'default',
              },
            },
          });
          dispatch(login());
   }
   const navigateTo =()=>{
        navigation.navigate('Login');
   }
   const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   const PASS_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   const NAME_REGEX = /^[a-zA-Z0-9._-]{3,16}$/
   const PHONE_REGEX = /^(?:\+91[-.\s]?)?[789]\d{9}$/
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.firstLine}>Hey there, </Text>
            <Text style={styles.secondLine}>Create an Account</Text>
            <InputFields
              icon={'person-outline'}
              name={'username'}
              placeHolder={'Full Name'}
              control={control} 
              rules={{
                required :'name is required',
                pattern:{
                  value:NAME_REGEX,
                  message:'Enter valid username'}
              }}            
              />
            <InputFields
              icon={'phone'}
              name={'phone'}
              placeHolder={'Phone number'}
              control={control} 
              rules={{
                required :'number is required',
                pattern:{
                  value:PHONE_REGEX,
                  message:'Enter valid number'}
              }}            
              />
            <InputFields
              icon={'mail-outline'}
              name={'mail'}
              placeHolder={'E-mail'}
              control={control}
               rules={{
                required :'e-mail is required',
                pattern:{
                  value:EMAIL_REGEX,
                  message:'Enter valid email'}
              }}            
               />
            
            <InputFields
              icon={'lock-outline'}
              name={'password'}
              placeHolder={'Password'}
              control={control}
              password={true} 
              rules={{
                required :'password is required',
                pattern:{
                  value:PASS_REGEX,
                  message:'Enter valid password'}
              }}            
              />
            <View style={styles.checkLine}>
              <TouchableOpacity onPress={onCheck}>
                <View
                  style={[
                    styles.check,
                    {backgroundColor: checkBox ? 'green' : 'transparent'},
                  ]}></View>
              </TouchableOpacity>
              <Text
                style={[
                  styles.checkText,
                  {fontWeight: fields == 'check' ? '900' : '200'},
                ]}>
                By continuing you accept our Privacy Policy and Terms of Use
              </Text>
            </View>
            {fields == 'check' || fields == 'all' ? (
              <>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: '500',
                    padding: 0,
                    fontSize: 10,
                  }}>
                  {message}
                </Text>
              </>
            ) : (
              <></>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(navigateToPage)}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.textUnder}>
              <View style={styles.line}></View>
              <View style={styles.or}>
                <Text style={styles.o}>O</Text>
                <Text style={styles.r}>r</Text>
              </View>

              <View style={styles.line}></View>
            </View>
            <View style={styles.media}>
              <View style={styles.singleMedia}>
                <TouchableOpacity onPress={onGoogleButtonPress}>
                <Google width={25} height={30} />
                </TouchableOpacity>
                
              </View>
              <View style={styles.singleMedia}>
                <Facebook width={25} height={30} />
              </View>
            </View>
            <View style={styles.login}>
              <Text> Already have an account?</Text>
              <TouchableOpacity onPress={navigateTo}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    );
}
export default HomePage;
