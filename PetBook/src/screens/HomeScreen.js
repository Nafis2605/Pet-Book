import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}> Welcome to Home Screen</Text>
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

export default HomeScreen;