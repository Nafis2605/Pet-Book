import React from "react";
import { View } from "react-native";
import { Card, Button, Text, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const VetCard = () => {
  return 
  (
        <View> 
             <Text style={{ fontStyle: "italic" }}> {props.title}</Text>
             
        </View>
  );
};

export default VetCard;