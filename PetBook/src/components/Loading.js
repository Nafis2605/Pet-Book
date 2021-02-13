import React from "react";
import { View, ActivityIndicator,StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.viewStyle}>
      <ActivityIndicator size="large" color="#ff6e40" animating={true} />
    </View>
  );
};


export default Loading;

const styles = StyleSheet.create(
    {
        viewStyle:{
            backgroundColor: "#1e3d59",
            justifyContent: "center",
            flex:1
        }
    }
)