import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements"
import { Entypo, FontAwesome5, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from "firebase"
import "firebase/firestore";

const SignUpScreen = (props) => {
    const [Name,setName]= useState("")
    const [Email, setEmail] = useState("")
    const [ContactNo, setContactNo] =useState("")
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    return (
        <View style={styles.viewStyle}>
            <Card containerStyle={styles.cardStyle}><Card.Title style={styles.textStyle}> Free Sign Up in PetBook</Card.Title>
                <Card.Divider />
                <Input
                    placeholder='Name'
                    leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
                    onChangeText={function (currentInput) {
                        setName(currentInput);
                      }}
                />
                <Input
                    placeholder="Email Address"
                    leftIcon={<Entypo name="mail-with-circle" size={24} color="black" />}
                    onChangeText={function (currentInput) {
                        setEmail(currentInput);
                      }}
                />
                <Input
                    placeholder='Contact No'
                    leftIcon={<Entypo name="mobile" size={24} color="black" />}
                    onChangeText={function (currentInput) {
                        setContactNo(currentInput);
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
                <Input
                    placeholder='Confirm Password'
                    leftIcon={<FontAwesome5 name="lock" size={24} color="black" />}
                    secureTextEntry={true}
                    onChangeText={function (currentInput) {
                        setConfirmPassword(currentInput);
                      }}
                />
                <Button
                    title=' Sign Up!'
                    icon={<MaterialCommunityIcons name="location-enter" size={24} color="white" />}
                    type='solid'
                    buttonStyle={styles.solidButtonStyle}
                    onPress={function () {
                        if(!(Name && Email && ContactNo && Password && ConfirmPassword)){
                            alert("Please fill up all the fields")
                        }
                        else if (Password !== ConfirmPassword){
                            alert("Passwords does not match")
                        }
                        else{
                            firebase.auth().createUserWithEmailAndPassword(Email,Password)
                            .then((userCredential) => {
                                userCredential.user.updateProfile({displayName: Name})
                                firebase
                                .firestore()
                                .collection("users")
                                .doc(userCredential.user.uid)
                                .set(
                                    {
                                        Name: Name,
                                        Email:Email,
                                        ContactNo:ContactNo
                                    }
                                ).then(()=>{
                                    alert("You have successfully created an account.")
                                    console.log(userCredential.user)
                                    props.navigation.navigate("Sign In")
                                })
                                .catch((error)=>{
                                    alert(error.message)
                                }
                                )
                              })
                              .catch((error) => {
                                  alert(error.message)
                              });
                            }
                        console.log("Sign Up Button is clicked!")
                    }}
                />
                <Card.Divider />
                <Button
                    title=" Already have an account? Sign In!"
                    icon={<Octicons name="person" size={24} color="#1e3d59" />}
                    titleStyle={styles.clearButtonStyle}
                    type="clear"
                    onPress={function () {
                        console.log("Return to Sign In Button is clicked!")
                        props.navigation.navigate("Sign In")
                    }}
                />

            </Card>
        </View>
    )
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

export default SignUpScreen;