import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput} from "react-native";
import VetCard from "../../components/VetCard";
import AppHeader from "../../components/AppHeader" 
import VetDetailsCard from "../../components/VetDetailsCard"
import VetList from "../../API/VetList";


const VetListScreen = (props) => {
    const [value, onChangeText] = React.useState('   Search for Vets here....');
    return (
        <View style={styles.viewStyle}>
        <AppHeader/>
       
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
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