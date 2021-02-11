import React from 'react';
import { NavigationContainer } from "@react-navigation/native"

import HomeStackScreen from "./src/navigation/HomeStackScreen"
import AuthStackScreen from "./src/navigation/AuthStackScreen"

function App() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  )
}

export default App;