import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements"
import firebase from "firebase"
import "firebase/firestore";


import { Entypo, FontAwesome5, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import {AuthContext} from "../../providers/AuthProvider"
import Loading from "../../components/Loading";

const SignInScreen = (props) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    if(isLoading){
        return <Loading/>
    }
    else{
        return (
            <AuthContext.Consumer>
                {(auth)=>(
                <View style={styles.viewStyle}>
                    <Card containerStyle={styles.cardStyle}>
                        <Card.Title style={styles.textStyle}> Welcome to PetBook</Card.Title>
                        <Card.Divider />
                        <Input
                            placeholder="Email Address"
                            leftIcon={<Entypo name="mail-with-circle" size={24} color="black" />}
                            onChangeText={function (currentInput) {
                                setEmail(currentInput);
                            }}
                        />

                        <Input
                            placeholder='Password'
                            leftIcon={<FontAwesome5 name="lock" size={24} color="black" />}
                            secureTextEntry={true}
                            onChangeText={function (currentInput) {
                                setPassword(currentInput);
                            }}
                        />
                        <Button
                            title=' Sign In!'
                            icon={<MaterialCommunityIcons name="location-enter" size={24} color="white" />}
                            type='solid'
                            buttonStyle={styles.solidButtonStyle}
                            onPress={function () {
                                setIsLoading(true)
                                firebase.auth().signInWithEmailAndPassword(Email,Password)
                                .then((userCredential) => {
                                    setIsLoading(false)
                                    auth.setIsLoggedIn(true);
                                    auth.setCurrentUser(userCredential.user)
                                })
                                .catch((error) => {
                                    alert(error.message)
                                });
                                console.log("Sign In Button is clicked!")
                            }}
                        />
                        <Button
                            title=" Don't have an account? Sign Up!"
                            icon={<Octicons name="person" size={24} color="#1e3d59" />}
                            titleStyle={styles.clearButtonStyle}
                            type="clear"
                            onPress={function () {
                                console.log("Return to Sign Up Button is clicked!")
                                props.navigation.navigate("Sign Up")
                            }}
                        />
                    </Card>
                </View >
                )}
            </AuthContext.Consumer>
        )}
}

const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 20,
            margin: 10
        },
        solidButtonStyle: {
            backgroundColor: "#ff6e40",
            fontSize: 18
        },
        clearButtonStyle: {
            color: "#1e3d59",
            fontSize: 18
        },
        viewStyle: {
            backgroundColor: "#1e3d59",
            justifyContent: "center",
            flex: 1
        },
        cardStyle: {
            backgroundColor: "#FFF5DE",
            borderColor: "#ffc13b",
            borderRadius: 12,
            borderWidth: 5
        }
    }
)

export default SignInScreen;