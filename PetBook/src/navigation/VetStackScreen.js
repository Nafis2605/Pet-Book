import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import VetListScreen from "../screens/VetScreens/VetListScreen"
import VetDetailsScreen from "../screens/VetScreens/VetDetaisScreen"

const VetStack = createStackNavigator();

const VetStackScreen = () => {
    return (
        <VetStack.Navigator initialRouteName="Vet List">
            <VetStack.Screen name="Vet List" component={VetListScreen} options={{ headerShown: false }}/>
            <VetStack.Screen name="Vet Details" component={VetDetailsScreen} options={{ headerShown: false }}/>
        </VetStack.Navigator>
    )
}

export default VetStackScreen;