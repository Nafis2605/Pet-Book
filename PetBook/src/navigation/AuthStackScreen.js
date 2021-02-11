import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import SignInScreen from "../screens/AuthScreens/SignInScreen"
import SignUpScreen from "../screens/AuthScreens/SignUpScreen"


const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Sign In">
      <AuthStack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

export default AuthStackScreen;