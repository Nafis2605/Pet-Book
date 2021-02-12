import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import NotificationScreen from "../screens/NotificationScreen"
import PostDetailsScreen from "../screens/PostDetailsScreen"

const NotificationStack = createStackNavigator();

const NotificationStackScreen = () => {
    return (
        <NotificationStack.Navigator initialRouteName="Notifications">
            <NotificationStack.Screen name="Notifications" component={NotificationScreen} />
            <NotificationStack.Screen name="Post Details" component={PostDetailsScreen} />
        </NotificationStack.Navigator>
    )
}

export default NotificationStackScreen;

