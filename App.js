import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBm8Ip1gjY_6BvyBy59PtwXCvKCpTFVwRo",
  authDomain: "chansee-43c82.firebaseapp.com",
  databaseURL: "https://chansee-43c82.firebaseio.com",
  projectId: "chansee-43c82",
  storageBucket: "chansee-43c82.appspot.com",
  messagingSenderId: "2094531129",
  appId: "1:2094531129:web:65ce818e7a6e8223dac3e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);