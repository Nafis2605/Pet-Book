import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Button} from "react-native-elements"
import firebase from "firebase"
import "firebase/firestore"

import {AuthContext} from "../providers/AuthProvider"
import AppHeader from "../components/AppHeader"

const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth)=>(
                <View>
                    <AppHeader/>
                    <Text style={styles.textStyle}> Welcome to Home Screen</Text>
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