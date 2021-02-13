import React, {useState}from "react";
import {View, StyleSheet} from "react-native"
import { Card, Button, Text, Avatar, Input } from "react-native-elements";
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import firebase from "firebase"
import "firebase/firestore";

import { AuthContext } from "../providers/AuthProvider";

const CreatePostCard=()=>{
    const [input, setInput] = useState("");
    return(
        <AuthContext.Consumer>
            {(auth)=>(
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <Input
                    placeholder="What's On Your Mind?"
                    multiline={true}
                    leftIcon={<FontAwesome name="pencil" size={24} color="black" />}
                    onChangeText={(currentText) => {
                        setInput(currentText);
                    }}
                    />

                    <Button
                        title=" Upload Picture"
                        icon={<FontAwesome5 name="image" size={24} color="#ff6e40" />}
                        titleStyle={{color:"#ff6e40"}}
                        buttonStyle={styles.clearButtonStyle}
                        type="outline"
                        onPress={function () {
                            console.log("Upload Picture Button is clicked!")
                        }}
                    />
                    <Card.Divider/>
                    <Button
                    title=" Share Your Post"
                    type="solid"
                    icon={<AntDesign name="sharealt" size={24} color="#FFF5DE" />}
                    buttonStyle={styles.solidButtonStyle}
                    onPress={function () {
                        //setLoading(true);
                        firebase
                        .firestore()
                        .collection("posts")
                        .add({
                            userId: auth.currentUser.uid,
                            body: input,
                            author: auth.currentUser.displayName,
                            created_at: firebase.firestore.Timestamp.now(),
                            likes: [],
                            comments: [],
                        })
                        .then(() => {
                            //setLoading(false);
                            alert("Post created Successfully!");
                            console.log("Post Share button is clicked")
                        })
                        .catch((error) => {
                            //setLoading(false);
                            alert(error);
                        });
                    }}
                    />
                </Card>
            </View>
            )}
          </AuthContext.Consumer>
    )
}

export default CreatePostCard;

const styles = StyleSheet.create(
    {
        solidButtonStyle: {
            backgroundColor: "#ff6e40",
            fontSize: 18
        },
        clearButtonStyle: {
            color: "#ff6e40",
            fontSize: 18,
            borderColor: "#ff6e40",
            borderWidth:3
        },
        cardStyle: {
            backgroundColor: "#fff0cc",
            borderColor: "#ffc13b",
            borderRadius: 5,
            borderWidth: 2
        }
    }
)