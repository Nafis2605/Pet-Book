import React from 'react';
import { NavigationContainer } from "@react-navigation/native"

import AuthStackScreen from "./src/navigation/AuthStackScreen"
import HomeTabScreen from "./src/navigation/HomeTabScreen"
import {AuthContext, AuthProvider} from "./src/providers/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth)=>(
          <NavigationContainer>
            {auth.isLoggedIn ?<HomeTabScreen/>:<AuthStackScreen/>}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

export default App;