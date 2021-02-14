import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/AppHeader"
import VetDetailsCard from "../../components/VetDetailsCard"

const VetDetailsScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <AppHeader/>
            <VetDetailsCard
                name={props.name}
                specialization = {props.specialization}
                address = {props.address}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 20,
            margin: 10
        },
        viewStyle:
        {
            backgroundColor: "#fff7e6",
            flex:1
        }
    }
)

export default VetDetailsScreen;