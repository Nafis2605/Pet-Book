import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView } from "react-native";
import {Button} from "react-native-elements"
import firebase from "firebase"
import "firebase/firestore"

import {AuthContext} from "../providers/AuthProvider"
import AppHeader from "../components/AppHeader"
import CreatePostCard from "../components/CreatePostCard"
import PostCard from "../components/PostCard"

const HomeScreen = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadPosts = async () => {
        setLoading(true);
        firebase
        .firestore()
        .collection("posts")
        .orderBy("created_at", "desc")
        .onSnapshot((querySnapshot) => {
            let temp_posts = [];
            querySnapshot.forEach((doc) => {
            temp_posts.push({
                id: doc.id,
                data: doc.data(),
            });
            });
            setPosts(temp_posts);
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
            alert(error);
        });
    };


    useEffect(() => {
        loadPosts();
      }, []);

    return (
        <AuthContext.Consumer>
            {(auth)=>(
                <View style={styles.viewStyle}>
                    <AppHeader/>
                    <ScrollView >
                        <CreatePostCard/>
                        <ActivityIndicator size="large" color="#ff6e40" animating={loading} />
                        <FlatList
                            data={posts}
                            renderItem={({item}) => {
                            return (
                                <PostCard
                                    author={item.data.author}
                                    title={item.id}
                                    body={item.data.body}
                                />
                            );
                        }}
                    />
                    </ScrollView>
                </View>
            )}
        </AuthContext.Consumer>
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

export default HomeScreen;