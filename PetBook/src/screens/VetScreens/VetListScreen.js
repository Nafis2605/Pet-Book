import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SearchBar} from "react-native";
import VetCard from "../../components/VetCard";
import AppHeader from "../../components/AppHeader" 
import VetDetailsCard from "../../components/VetDetailsCard"
import getVets from "./../../API/getVets";
import VetAPI from "./../../API/VetAPI";
const VetListScreen = (props) => {
   
    return (
        <View style={styles.viewStyle}>
            <AppHeader/>

            <FlatList
                data={VetAPI}
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