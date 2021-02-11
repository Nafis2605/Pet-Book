import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostDetailsScreen = (props) => {
    return (
        <View>
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