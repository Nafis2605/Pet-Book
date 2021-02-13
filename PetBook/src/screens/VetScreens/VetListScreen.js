import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/AppHeader";

const VetListScreen = (props) => {
    return (
        <View>
            <AppHeader/>
            <Text style={styles.textStyle}> Welcome to Vet List Screen</Text>
        </View>
    );
} ; 

const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 20,
            margin: 10,
            color: "blue",
        },
    }
);
export default VetListScreen;