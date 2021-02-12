import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Button} from "react-native-elements"
import * as firebase from "firebase"

import {AuthContext} from "../providers/AuthProvider"

const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth)=>(
                <View>
                    <Text style={styles.textStyle}> Welcome to Home Screen</Text>
                    <Button
                    title="Log Out"
                    type="solid"
                    onPress={function () {
                        console.log("Log Out Button is clicked!")
                        firebase.auth().signOut().then(() => {
                            auth.setIsLoggedIn(false)
                            auth.setCurrentUser({})
                          }).catch((error) => {
                            alert(error)
                          });
                    }}
                />
                </View>
            )}
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 20,
            margin: 10
        }
    }
)

export default HomeScreen;