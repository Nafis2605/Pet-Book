import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../components/AppHeader"

const PostDetailsScreen = (props) => {
    return (
        <View>
            <AppHeader/>
            <Text style={styles.textStyle}> Welcome to Post Details Screen</Text>
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

export default PostDetailsScreen;