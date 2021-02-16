import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";

import { AntDesign,FontAwesome5, Entypo } from "@expo/vector-icons";

const ProfileCard = (props) => {
  return (
    
    <Card containerStyle={styles.cardStyle}>
      <View style={{ alignItems: "center"}}>

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
      <Text h4style={{padding:20}} h4>
      {<Entypo name="location" size={24} color="#ff6e40" />}  Put the address here
      </Text>
      <Text h4style={{padding: 20}} h4>
      {<Entypo name="mobile" size={24} color="black" color="#ff6e40" />}  {props.contactNo}
      </Text>
      <Text h4style={{padding: 20}} h4>
      {<Entypo name="mail-with-circle" size={24} color="#ff6e40" />} {props.email}
      </Text>
      <Card.Divider/>
        <Button
          type="outline"
          titleStyle={{color: "#ff6e40"}}
          buttonStyle={styles.clearButtonStyle}
          title=" Upload Picture"
          icon={<FontAwesome5 name="image" size={24} color="#ff6e40" />}
          onPress={
            function () {
                console.log("Upload Picture Button is clicked")
            }
          }
        />
        <Card.Divider/>
        <Button 
        type="solid" 
        title=" Edit Profile"
        titleStyle={{color: "#FFF5DE"}}
        buttonStyle={styles.solidButtonStyle}
        icon={<AntDesign name="profile" size={24} color="#FFF5DE" />} 
        onPress={function () {
          console.log("Edit Profile Button is clicked!")
        }}/>
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