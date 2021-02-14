import React from "react";
import { View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";

const profileCard = (props) => {
  return (
    <Card>  
        <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
        >
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          icon={{ name: props.title, type: "font-awesome", color: "black" }}
          activeOpacity={1}
        />

        <Text h4Style={{ padding: 10 }} h4>
          {props.author}
        </Text>
      </View>
      <Text style={{ fontStyle: "italic" }}> {props.title}</Text>
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        {props.body}
      </Text>
        </Card>
  );
};

export default profileCard;