import React, { useState, useEffect } from "react";
import { View, StyleSheet, AsyncStorage, FlatList } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { AuthContext } from "../../providers/AuthProvider";
import { storeDataJSON, getDataJSON, removeData } from "../../functions/AsyncStorageFunctions";
import NotificationComponent from "../../components/Notification";
import * as firebase from "firebase";
import "firebase/firestore";
import AppHeader from "../../components/AppHeader";

const NotificationScreen = (props) => {
  //console.log(props);
  const [notificationList, setNotificationList] = useState([]);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState("");

const loadNotificationData = async () => {

  setIsLoading(true);
  firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection("notifications")
      .onSnapshot((querySnapShot) => {
          setIsLoading(false);
          let temp = [];
          querySnapShot.forEach((doc) => {
              temp.push(
                  {
                      id: doc.id,
                      data: doc.data(),
                  }
              );

          });

          setNotificationList(temp);
      })
      .catch((error) => {
          setIsLoading(false);
          alert(error);
      })
}



const getEmailData = async () => {
  await getDataJSON("mail").then((data) => {
    if (data == null) {
      setEmail("");
    } else setEmail(data);
  });
};

useEffect(() => {
    getEmailData();

}, [])

useEffect(() => {
  loadNotificationData();

}, [email])
 

  console.log(email);
  console.log(notificationList);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          
          <AppHeader/>

          <Card containerStyle={styles.cardStyle}>
            <FlatList
              data={notificationList}
              renderItem={notificationItem => (
                <View style={{ alignItems: "center" }}>
                  <NotificationComponent
                    name={notificationItem.item.data.name}
                    date={notificationItem.item.data.posting_date}
                    post={notificationItem.item.data.post}
                    postID={notificationItem.item.data.postID}
                    authorID={notificationItem.item.data.authorID}
                    notificationFrom={notificationItem.item.data.notification_from}
                    type={notificationItem.item.data.type}
                  />
                  <Card.Divider />
                </View>
              )}
            />
          </Card>


        </View>
      )}
    </AuthContext.Consumer>
  );
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
        backgroundColor: "#1e3d59",
        //justifyContent: "center",
        flex: 1
    },
    cardStyle: {
        backgroundColor: "#FFF5DE",
        borderColor: "#ffc13b",
        borderRadius: 3,
        borderWidth: 2
    }

  }
);

export default NotificationScreen;