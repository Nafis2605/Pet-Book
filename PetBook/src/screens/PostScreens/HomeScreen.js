import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, FlatList, Alert, ActivityIndicator } from "react-native";
import { Card, Button, Text, Avatar, Input, Header } from "react-native-elements";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../providers/AuthProvider";
import PostComponent from "../../components/Post";
import { storeDataJSON, getDataJSON, removeData } from "../../functions/AsyncStorageFunctions";
import * as firebase from "firebase";
import "firebase/firestore";
import Loading from '../../components/Loading';
import { TouchableOpacity } from "react-native-gesture-handler";
import AppHeader from "../../components/AppHeader";
import CreatePostCard from "../../components/CreatePostCard";

const HomeScreen = (props) => {
  const [postText, setPostText] = useState("");
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true);

    firebase
      .firestore()
      .collection("posts")
      .orderBy("created_at", "desc")
      .onSnapshot((querySnapshot) => {
        setLoading(false);
        let temp_posts = [];
        querySnapshot.forEach((doc) => {
          temp_posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setPostList(temp_posts);

      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <View style={styles.viewStyle}>
            
            <AppHeader/>
            <ScrollView>

            
            <CreatePostCard/>
            
            <FlatList
              data={postList}
              renderItem={({ item }) => {

                return (

                  <TouchableOpacity
                    onLongPress={
                      () => {
                        Alert.alert("Delete Post?", "Press OK to Delete",
                          [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancelled"),
                              style: "cancel"

                            },
                            {
                              text: "OK", onPress: () => {
                                if (auth.currentUser.uid == item.data.userId) {
                                  firebase
                                    .firestore()
                                    .collection("posts").doc(item.id).delete()
                                }
                                else {
                                  alert("You're not the author of this post")
                                }
                              }
                            }
                          ],
                          { cancelable: false }
                        );
                      }}
                  >

                    <PostComponent
                      name={item.data.author}
                      email={item.id}
                      post={item.data.body}
                      date={item.data.created_at.toDate().toString()}
                      authorID={item.data.userId}
                      postID={item.id}
                      userID={auth.currentUser.uid}
                    />
                  </TouchableOpacity>
                );
              }}
            />
            </ScrollView>
          </View>
        )}
      </AuthContext.Consumer>
    );
  }
};

const styles = StyleSheet.create({
    textStyle:
    {
        fontSize: 20,
        margin: 10
    },
    solidButtonStyle: {
        backgroundColor: "#ff6e40",
        fontSize: 18,
        borderColor:"#ff6e40",
        borderWidth:2
    },
    clearButtonStyle: {
        color: "#ff6e40",
        fontSize: 18,
        borderColor:"#ff6e40",
        borderWidth:2
    },
    viewStyle: {
        backgroundColor: "#fff7e6",
        //justifyContent: "center",
        flex: 1
    },
    //cardStyle: {
      //  backgroundColor: "#FFF5DE",
        //borderColor: "#ffc13b",
       // borderRadius: 3,
       // borderWidth: 2
    //}
});

export default HomeScreen;