import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import "firebase/firestore" ;

import AuthStackScreen from "./src/navigation/AuthStackScreen";
import HomeTabScreen from "./src/navigation/HomeTabScreen";
import {AuthContext, AuthProvider} from "./src/providers/AuthProvider";

const firebaseConfig = {
  apiKey: "AIzaSyCUPX74KT7JpcHwZ9ZPy2LnjtCxlOMHM7E",
  authDomain: "pet-book-99eac.firebaseapp.com",
  projectId: "pet-book-99eac",
  storageBucket: "pet-book-99eac.appspot.com",
  messagingSenderId: "826660869461",
  appId: "1:826660869461:web:503db648f6948cb4314bdc"
};
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

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