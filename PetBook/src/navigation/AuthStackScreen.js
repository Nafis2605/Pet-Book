import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import SigninScreen from "../screens/AuthScreens/SignInScreen"


const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="Sign In">
      <AuthStack.Screen name="Sign In" component={SigninScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

export default AuthStackScreen;