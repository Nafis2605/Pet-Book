import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../components/AppHeader"
import PostCard from "../components/PostCard"

const PostDetailsScreen = (props) => {
    return (
        <View>
            <AppHeader/>
            <PostCard/>
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