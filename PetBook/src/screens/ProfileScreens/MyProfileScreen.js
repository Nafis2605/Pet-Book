import React, {useEffect,useState}  from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase"
import "firebase/firestore"

import {AuthContext} from "../../providers/AuthProvider"
import ProfileCard from "../../components/ProfileCard"
import AppHeader from "../../components/AppHeader"
const MyProfileScreen = (props) => {

    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(false);

    return(
        <AuthContext.Consumer>
            {(auth)=>(

                <View style={styles.viewStyle}>
                    <AppHeader/>
                <View style={{justifyContent:"center", flex:1}}>
                    <ProfileCard/>
                </View>
                </View>
            
            )
            }
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
        viewStyle: {
          backgroundColor: "#fff7e6",
          flex:1,
      },
    }
)

export default MyProfileScreen;
