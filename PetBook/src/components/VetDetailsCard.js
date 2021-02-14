import React, {useState} from "react";
import { View,TouchableOpacity, StyleSheet } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign,MaterialIcons } from "@expo/vector-icons";


const VetDetailsCard = (props) => {
  return (
    <Card containerStyle={styles.cardStyle}>
      <View>
        <Avatar
          containerStyle={{ backgroundColor: "#ffab91" }}
          rounded
          icon={{ name: "user", type: "font-awesome", color: "black" }}
          activeOpacity={1}
          style={{
            alignItems: "center",
          }}
        />
        <Text h4Style={{ padding: 10 }} h4>
          {props.name}
        </Text>
      </View>
      <Text style={{ fontStyle: "italic" , fontSize:18}}>{props.specialization}</Text>
      <Text
        style={{
          paddingVertical: 10,
        }}
      >{props.address}
      </Text>
    </Card>
  );
};

export default VetDetailsCard;

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