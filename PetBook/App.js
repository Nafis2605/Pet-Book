import React from 'react';
import { NavigationContainer } from "@react-navigation/native"

import HomeStackScreen from "./src/navigation/HomeStackScreen"

function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  )
}

export default App;