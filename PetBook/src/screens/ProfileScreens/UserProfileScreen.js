import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/AppHeader"
import PostCard from "./../../components/PostCard"; 
const UserProfileScreen = (props) => {
    return (
        <View>
            <AppHeader/>
            <Text style={styles.textStyle}> Welcome to User Profile Screen</Text>

        </View>
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

export default UserProfileScreen;