import React, {useState, useEffect} from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./src/screens/signup_login/homepage";
import LoginPage from "./src/screens/signup_login/loginpage";
import SafetyFirst from "./src/screens/signup_login/safetyfirst";
import SafetySecond from "./src/screens/signup_login/safetysecond";
import PersonalStuff from "./src/screens/signup_login/personalstuff";
import PADProfile from "./src/screens/signup_login/padprofile";

import CreatePaD from "./src/screens/createPaD/createPaD";
import WelcomeBack from "./src/screens/PaDhome/PaDuserpage";
import UserPage from "./src/screens/PaDhome/PaDuserhome";
import GroupPage from "./src/screens/groupPaD/groupPage"

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AppAuthNavigator = props => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="OpenPage" component={HomePage} options={{headerShown: false}}/>
      <AppStack.Screen name="Login Page" component={LoginPage} options={{headerShown: false}}/>
      <AppStack.Screen name="Safety First" component={SafetyFirst} options={{headerShown: false}}/>
      <AppStack.Screen name="Safety Second" component={SafetySecond} options={{headerShown: false}}/>
      <AppStack.Screen name="Personal Stuff" component={PersonalStuff} options={{headerShown: false}}/>
      <AppStack.Screen name="PAD Profile" component={PADProfile} options={{headerShown: false}}/>
    </AppStack.Navigator>
  );
};

const AppNonAuthNavigator = props => {
  return(
    <AppStack.Navigator>
      <AppStack.Screen name="Create PaD" component={CreatePaD} options={{headerShown: false}}/>
      <AppStack.Screen name="Welcome Back" component={WelcomeBack} options={{headerShown: false}}/>
      <AppStack.Screen name="User Page" component={UserPage} options={{headerShown: false}}/>   
      <AppStack.Screen name="Group Page" component={GroupPage} options={{headerShown: false}}/> 
    </AppStack.Navigator>
  );
};

export default function App() {

    const [fontsloaded,setFontsloaded] = useState(false);
    const [loading,setloading] = useState(false);
    const [user,setuser] = useState(false);
    return(
        <NavigationContainer>
        { user ? (
        <AppNonAuthNavigator/>
        ):(
        <AppAuthNavigator/>
        )}
        </NavigationContainer>
        );
    };