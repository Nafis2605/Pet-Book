import React from "react";
import { View , StyleSheet } from "react-native";
import { Card, Text} from "react-native-elements";
//import { AntDesign } from "@expo/vector-icons";

const VetCard = (props) => {
  console.log(props);
  return (
        <Card>
           <View>
           <Text>{props.title} </Text>
           </View>
         
        </Card>
             
  )
};

const styles = StyleSheet.create(
  {
      textStyle:
      {
          fontSize: 20,
          margin: 10,
          color: "blue",
      },
  } );

export default VetCard;