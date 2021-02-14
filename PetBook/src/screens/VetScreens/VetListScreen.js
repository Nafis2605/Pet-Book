import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import VetCard from "./../../components/VetCard";
import AppHeader from "../../components/AppHeader" 
import VetDetailsCard from "../../components/VetDetailsCard"
const VetListScreen = (props) => {
    const vets = [
        {
          id: "V1",
          name:"Dr Mehedy Hasan",
          specialization:"Cat Specialist",
          address: "Wari, Dhaka"
        },
        {
            id: "V2",
            name:"Dr Mohammad Mithun",
            specialization:"Dog Specialist",
            address: "Mirpur, Dhaka"
        },
        {
          id: "V3",
          name:"Dr Nazmul Hasan Shanto",
          specialization:"Cow Specialist",
          address: "Amtoli, Rajshahi"
        },
        {
            id: "V4",
            name:"Dr Mominul Haque",
            specialization:"Fish Specialist",
            address: "Himchori, Cox's Bazar"
        },
        {
            id: "V5",
            name:"Dr Tamim Iqbal",
            specialization:"Goat Specialist",
            address: "Bahadarhat, Chittagong"
        },
      ];
    return (
        <View style={styles.viewStyle}>
            <AppHeader/>
            <FlatList
                data={vets}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                            onPress={
                                function (item) {
                                    return(
                                        props.navigation.navigate("Vet Details")
                                    )
                                }
                            }
                            >
                            <VetCard
                                name={item.name}
                                specialization = {item.specialization}
                                address = {item.address}
                            />
                            </TouchableOpacity>
                        );
                    }
                }
            />
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
        viewStyle:
        {
            backgroundColor: "#fff7e6",
            flex:1
        }
    }
);
export default VetListScreen;