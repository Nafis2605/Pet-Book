import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";

import { AntDesign,FontAwesome5, Entypo } from "@expo/vector-icons";

const ProfileCard = (props) => {
  return (
    
    <Card containerStyle={styles.cardStyle}>
      <View style={{ alignItems: "center"}}>
      <Text style={{fontSize:24}}>User Profile</Text>
        <Avatar
          containerStyle={{ backgroundColor: "#ff6e40" }}
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          icon={{ name: "user", type: "font-awesome", color: "#FFF5DE" }}

          activeOpacity={1}
        />
        <Text h3Style={{ padding: 10 }} h3>
          {props.name}
        </Text>
      </View>
      <Text h4style={{padding: 20}} h4>
      {<Entypo name="mobile" size={24} color="black" color="#ff6e40" />} {props.contactNo}
      </Text>
      <Text h4style={{padding: 20}} h4>
      {<Entypo name="mail-with-circle" size={24} color="#ff6e40" />} {props.email}
      </Text>
      
    </Card>
  );
};

export default ProfileCard;

const styles = StyleSheet.create(
  {
      textStyle:
      {
          fontSize: 20,
          margin: 10
      },
      solidButtonStyle: {
          backgroundColor: "#ff6e40",
          fontSize: 18,
          borderColor:"#ff6e40",
          borderWidth:2
      },
      clearButtonStyle: {
          color: "#ff6e40",
          fontSize: 18,
          borderColor:"#ff6e40",
          borderWidth:2
      },
      viewStyle: {
          backgroundColor: "#1e3d59",
          justifyContent:"center",
          flex:1
      },
      cardStyle: {
          backgroundColor: "#FFF5DE",
          borderColor: "#ffc13b",
          borderRadius: 3,
          borderWidth: 2,
      }
  }
)
