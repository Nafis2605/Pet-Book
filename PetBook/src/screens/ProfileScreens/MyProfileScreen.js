import React  from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/AppHeader"
import profileCard from "./../../components/profileCard";
const MyProfileScreen = (props) => {
    return (
        <View>
            <AppHeader/>
            <Text style={styles.textStyle}> Welcome to My Profile Screen</Text>
            <profileCard title = "Me"/>
            <PostCard />
            <PostCard />
            <PostCard />
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

export default MyProfileScreen;