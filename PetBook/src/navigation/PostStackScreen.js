import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import PostDetailsScreen from "../screens/PostDetailsScreen"
import UserProfileScreen from "../screens/ProfileScreens/UserProfileScreen"

const PostStack = createStackNavigator();

const PostStackScreen = () => {
    return (
        <PostStack.Navigator initialRouteName="Home">
            <PostStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <PostStack.Screen name="Post Details" component={PostDetailsScreen} options={{ headerShown: false }}/>
            <PostStack.Screen name="User Profile" component={UserProfileScreen} options={{ headerShown: false }}/>
        </PostStack.Navigator>
    )
}

export default PostStackScreen;