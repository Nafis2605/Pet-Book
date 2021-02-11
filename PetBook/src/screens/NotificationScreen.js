import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}> Welcome to Notification Screen</Text>
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

export default NotificationScreen;