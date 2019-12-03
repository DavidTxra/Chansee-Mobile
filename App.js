import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from "@expo/vector-icons";

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import PostScreen from './screens/PostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

import * as firebase from 'firebase';

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

// const AppStack = createStackNavigator({
//   Home: HomeScreen
// });

const AppTabNavigator = createBottomTabNavigator(
   {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor} />
        }
      },
      Message: {
        screen: MessageScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
        }
      },
      Post: {
        screen: PostScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons 
            name="ios-add-circle" 
            size={52} 
            color="#E9446A" 
            style={{
              shadowColor: "#E9446A", 
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 10, 
              shadowOpacity: 0.3 
            }}/>
        }
      },
      Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor} />
        }
      }
   },
   {
        tabBarOptions: {
          activeTinitColor: "#161F3D",
          invativeTintColor: "#B8BBC4",
          showLabel: false
        }
   }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);