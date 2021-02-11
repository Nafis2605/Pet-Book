import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import MyProfileScreen from "../screens/ProfileScreens/MyProfileScreen"
import EditProfileScreen from "../screens/ProfileScreens/EditProfileScreen"


const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator initialRouteName="My Profile">
            <ProfileStack.Screen name="My Profile" component={MyProfileScreen} />
            <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen} />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;