import React from "react";
import { View, Text, StyleSheet } from "react-native";
import VetCard from "./../../components/VetCard"; 

const VetListScreen = (props) => {
    return (
        <View>
            < VetCard title ="DR Meow   Address :Dhanmondi,   Number: 0123456789"/>
            < VetCard title ="DR Woof   Address :Board Bazar, Number: 0123456789"/>
            < VetCard title ="DR Rawr   Address :Cox Bazar,   Number: 0123456789"/>
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