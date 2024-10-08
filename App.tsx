// import { View,Text, Button, Alert } from "react-native"
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { useEffect } from "react";
// import auth from '@react-native-firebase/auth';
// const App =()=>{

//   useEffect(()=>{
//     GoogleSignin.configure({
//       webClientId: '211694041760-6blhmr6gmc0fe0ghkbqc0155pdf38brp.apps.googleusercontent.com',
//     });
//   },[]);

//   async function onGoogleButtonPress() {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const idToken = await GoogleSignin.signIn();
//     console.log('token : ',idToken);
//     Alert.alert('login succses');
//     // Create a Google credential with the token
//     // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
//     // Sign-in the user with the credential
//     // return auth().signInWithCredential(googleCredential);
//   }
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//       <Text>
//         hello this is login 
//       </Text>
//       <Button title="google" onPress={onGoogleButtonPress}/>
   
//     </View>
//   )
// }
// export default App;



/* eslint-disable react/react-in-jsx-scope */


import Navigation from './src/Navigations';
import {store,persistor} from './src/Store/Index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View } from 'react-native';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex:1}}>
           <Navigation/>
        </View>          
       </PersistGate>
     </Provider>
  );
}






