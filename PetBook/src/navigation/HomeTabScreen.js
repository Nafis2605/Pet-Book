import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MaterialCommunityIcons,Fontisto,FontAwesome,Ionicons } from '@expo/vector-icons';

import PostStackScreen from '../navigation/PostStackScreen';
import VetStackScreen from "../navigation/VetStackScreen"
import NotificationStackScreen from "../navigation/NotificationStackScreen"
import ProfileStackScreen from "../navigation/ProfileStackScreen"

const HomeTab = createMaterialBottomTabNavigator();

const HomeTabScreen=()=> {
  return (
    <HomeTab.Navigator 
    initialRouteName="Post" 
    barStyle={{ backgroundColor: '#1e3d59' }}
    activeColor="#ff6e40"
    inactiveColor="#FFF5DE"
    >
      <HomeTab.Screen name="Post" component={PostStackScreen} 
      options={{
          tabBarLabel:"Posts",
          tabBarIcon:({focused}) =>
          focused ?(
            <MaterialCommunityIcons name="post-outline" size={26} color="#ff6e40" />
          ):(
            <MaterialCommunityIcons name="post-outline" size={20} color="#FFF5DE" />
          ),
    }}
      />
      <HomeTab.Screen name="Vet" component={VetStackScreen} 
      options={{
        tabBarLabel:"Veterinarian",
        tabBarIcon:({focused}) =>
        focused ?(
            <Fontisto name="doctor" size={26} color="#ff6e40" />
        ):(
            <Fontisto name="doctor" size={20} color="#FFF5DE" />
        ),
    }}
    />
      <HomeTab.Screen name="Notifications" component={NotificationStackScreen} 
      options={{
        tabBarLabel:"Notifications",
        tabBarIcon:({focused}) =>
        focused ?(
            <FontAwesome name="bell" size={26} color="#ff6e40" />
        ):(
            <FontAwesome name="bell" size={20} color="#FFF5DE" />
        ),
    }}
      />
      <HomeTab.Screen name="Profile" component={ProfileStackScreen} 
      options={{
        tabBarLabel:"Profile",
        tabBarIcon:({focused}) =>
        focused ?(
            <Ionicons name="ios-person-sharp" size={26} color="#ff6e40" />
        ):(
            <Ionicons name="ios-person-sharp" size={20} color="#FFF5DE" />
        ),
    }}
      />
    </HomeTab.Navigator>
  );
}

export default HomeTabScreen;