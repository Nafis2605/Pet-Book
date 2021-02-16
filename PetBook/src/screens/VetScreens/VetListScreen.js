import React, { Component } from "react";
import { View, Text, FlatList, Button,SafeAreaView, TouchableOpacity } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import VetCard from "../../components/VetCard";
import VetList from "../../API/VetList.json";
 
class VetListScreen extends Component {
 
  constructor(props) {
    super(props); 
  
    this.state = { 
      loading: false,   
      data: [],
      temp: [],
      error: null,
      search: null
    };
  }
  
  componentDidMount() {
    this.getData();
  }
 
   getData = async ()  => {
   
   const json = VetList;
    this.setState({ loading: true });
  
     try {
        this.setResult(json);
     } catch (e) {
     console.log(e);
        this.setState({ error:"error" +e , loading: false });
     }
  };
 
  setResult = (res) => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.temp, ...res],
      error: res.error || null,
      loading: false
    });
  }
 
  renderHeader = () => {
      return <SearchBar placeholder="Search Here..."
          lightTheme round editable={true}
          value={this.state.search}
          onChangeText={this.updateSearch} />; 
  }; 
 
  updateSearch = search => {
        this.setState({ search }, () => {
            if ('' == search) {
                this.setState({
                    data: [...this.state.temp]
                });
                return;
            }
             
            this.state.data = this.state.temp.filter(function(item){
                return item.name.includes(search) || item.specialization.includes(search) || item.address.includes(search)  ;
              }).map(function({id, name, specialization, address}){
                return {id, name, specialization , address};
            });
        });
  };
 
  render() {
    return (
      this.state.error != null ?
        <SafeAreaView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.state.error}</Text>
          <Button onPress={
            () => {
              this.getData();
            }
          } title="Reload Page" />
        </SafeAreaView> :

        <FlatList
            ListHeaderComponent={this.renderHeader}
            data={this.state.data}
            keyExtractor={item => item.specialization}
            renderItem={({ item }) => (

              <VetCard
              name={item.name}
              specialization = {item.specialization}
              address = {item.address}
          />

        )}
      />
    );
  }
}
 
export default VetListScreen;