import React from 'react';
import { NavigationContainer } from "@react-navigation/native"

import AuthStackScreen from "./src/navigation/AuthStackScreen"
import HomeTabScreen from "./src/navigation/HomeTabScreen"

function App() {
  return (
    <NavigationContainer>
      <HomeTabScreen />
    </NavigationContainer>
  )
}

export default App;