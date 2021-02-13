import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/AppHeader"

const VetDetailsScreen = (props) => {
    return (
        <View>
            <AppHeader/>
            <Text style={styles.textStyle}> Welcome to Vet Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 20,
            margin: 10
        }
    }
)

export default VetDetailsScreen;