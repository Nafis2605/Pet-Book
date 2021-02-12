import React from "react";
import { View, Text, StyleSheet } from "react-native";
import VetCard from "../components/vetCard";
const VetListScreen = (props) => {
    return (
        <View>
            <VetCard> title = "Dr ABC "</VetCard>
            <VetCard> title = "Dr 123 "</VetCard>
            <VetCard> title = "Dr qwe "</VetCard>
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

export default VetListScreen;