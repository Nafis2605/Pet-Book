import React from "react";
import { Header } from "react-native-elements";
import * as firebase from "firebase";
import { AuthContext } from "../providers/AuthProvider";
const AppHeader = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Header
			containerStyle={{
				backgroundColor: '#1e3d59',
				
		  	}}
			  barStyle="dark-content"
            centerComponent={{ text: "Pet Book", style: { color: "#FFF5DE" } }}
            rightComponent={{
            icon: "lock-outline",
            color: "#FFF5DE",
            onPress: function () {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  auth.setIsLoggedIn(false);
                  auth.setCurrentUser({});
                })
                .catch((error) => {
                  alert(error);
                });
            },
          }}
        />
      )}
    </AuthContext.Consumer>
  );
};

export default AppHeader;