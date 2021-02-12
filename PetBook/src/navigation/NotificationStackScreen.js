import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import NotificationScreen from "../screens/NotificationScreen"
import PostDetailsScreen from "../screens/PostDetailsScreen"

const NotificationStack = createStackNavigator();

const NotificationStackScreen = () => {
    return (
        <NotificationStack.Navigator initialRouteName="Notifications">
            <NotificationStack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
            <NotificationStack.Screen name="Post Details" component={PostDetailsScreen} options={{ headerShown: false }} />
        </NotificationStack.Navigator>
    )
}

export default NotificationStackScreen;

