import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { Searchbar } from 'react-native-paper';
import VetCard from "../../components/VetCard";
import AppHeader from "../../components/AppHeader" 
import VetDetailsCard from "../../components/VetDetailsCard"
import VetList from "../../API/VetList";


const VetListScreen = (props) => {
   
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.viewStyle}>
        <AppHeader/>
       
        <Searchbar
            placeholder="Search for Vets"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
            <FlatList
                data={VetList}
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