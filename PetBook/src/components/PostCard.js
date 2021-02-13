import React, {useState} from "react";
import { View,TouchableOpacity, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign,MaterialIcons } from "@expo/vector-icons";


const PostCard = (props) => {
  return (
    <Card containerStyle={styles.cardStyle}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          icon={{ name: "user", type: "font-awesome", color: "black" }}
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
      <Card.Divider />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          type="outline"
          titleStyle={{color: "#ff6e40"}}
          buttonStyle={styles.clearButtonStyle}
          title="  Like (17)"
          icon={<AntDesign name="like2" size={24} color="#ff6e40" />}
        />
  
        <Button 
        type="solid" 
        title=" Comment (10)"
        titleStyle={{color: "#FFF5DE"}}
        buttonStyle={styles.solidButtonStyle}
        icon={<MaterialIcons name="add-comment" size={24} color="#FFF5DE" />} 
        onPress={function () {
          console.log("Comment Button is clicked!")
        }}/>
        
      </View>
    </Card>
  );
};

export default PostCard;

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
          justifyContent: "center",
          flex: 1
      },
      cardStyle: {
          backgroundColor: "#FFF5DE",
          borderColor: "#ffc13b",
          borderRadius: 3,
          borderWidth: 2
      }
  }
)