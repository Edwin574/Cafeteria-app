import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  DrawerLayoutAndroid,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationView from "../components/draweritems";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import Navbar from "../components/Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import CustomButton from "../components/CustomButton";

const Profile = ({ navigation }) => {
  const drawerPosition = "right";
  const drawer = useRef(null);
  const [profile, setProfile] = useState({
    fullname: "Loading...",
    regNo: "Loading...",
    phone: "Loading..",
  });
  const UserProfile = () => {
    useEffect(() => {
      AsyncStorage.getItem("userData")
        .then((response) => {
          const data = JSON.parse(response);
          setProfile(data);
        })
        .catch((error) => {
          console.error(`Error retrieving profile data: ${error}`);
        });
    }, []);

    return (
      <View style={styles.profile_container}>
        <Text style={styles.info}>Name: {profile.fullname}</Text>
        <Text style={styles.info}>Registration No: {profile.regNo}</Text>
        <Text style={styles.info}>Phone: {profile.phone}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F8F8FF", flex: 1 }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={() => (
          <NavigationView drawer={drawer} navigation={navigation} />
        )}
      >
        <Navbar drawer={drawer} navigation={navigation} />
        <View style={{ flex: 1, paddingTop: 20 }}>
          <View style={styles.mypriofile}>
            <View>
              <Text style={styles.text}>My</Text>
              <Text style={styles.text2}>Profile</Text>
            </View>
            <MaterialIcons name="person" size={100} color="black" />
          </View>
          <UserProfile />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Edit details</Text>
          </TouchableOpacity>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mypriofile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primaryGreen,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: COLORS.white,
    fontSize: 30,
  },
  text2: {
    color: COLORS.white,
    fontSize: 50,
  },
  profile_container: {
    flex: 1,
    padding: 10,
    margin: 20,
    flexDirection: "column",
    gap: 1,
  },
  info: {
    // borderWidth: 2,
    padding: 10,
    elevation: 8,
    fontSize: 18,
    backgroundColor: COLORS.white,
    marginVertical: 10,
  },
  button: {
    height: 55,
    width: "100",
    backgroundColor: COLORS.primaryGreen,
    borderWidth: 0,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttontext: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default Profile;
