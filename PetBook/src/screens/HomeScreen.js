import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Button} from "react-native-elements"
import firebase from "firebase"
import "firebase/firestore"

import {AuthContext} from "../providers/AuthProvider"
import AppHeader from "../components/AppHeader"
import CreatePostCard from "../components/CreatePostCard"

const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth)=>(
                <View style={styles.viewStyle}>
                    <AppHeader/>
                    <CreatePostCard/>
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
        },
        viewStyle:
        {
            backgroundColor: "#fff7e6",
            flex:1
        }

    }
)

export default HomeScreen;