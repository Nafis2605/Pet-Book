import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserProfileScreen = (props) => {
    return (
        <View>
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