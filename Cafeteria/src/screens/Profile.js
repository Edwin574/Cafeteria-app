import React, { useRef, useState } from "react";
import { View, Text, DrawerLayoutAndroid, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationView from "../components/draweritems";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import Navbar from "../components/Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const drawerPosition = "right";
  const drawer = useRef(null);
  const [profile, setProfile] = useState(null);
  const UserProfile = () => {
    AsyncStorage.getItem("userData")
      .then((response) => {
        const data = JSON.parse(response);
        setProfile(data);
        console.log(`profile:${profile}`);
      })
      .catch((error) => {
        console.error(`Error retrieving profile data: ${error}`);
      });
    // JSON.parse(profileData);
    // console.log(`profile:${profileData}`);
    // setProfile(JSON.parse(profileData));
    return (
      <View>
        <Text>Name: {profile.fullname}</Text>
        <Text>reg: {profile.regNo}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
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
          <Text>Welcome to your profile</Text>
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
});
export default Profile;
