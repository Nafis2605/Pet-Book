import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import MyProfileScreen from "../screens/ProfileScreens/MyProfileScreen"
import EditProfileScreen from "../screens/ProfileScreens/EditProfileScreen"


const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator initialRouteName="My Profile">
            <ProfileStack.Screen name="My Profile" component={MyProfileScreen} options={{ headerShown: false }} />
            <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;