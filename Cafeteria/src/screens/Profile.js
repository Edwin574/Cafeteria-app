import React, { useRef } from "react";
import { View, Text, DrawerLayoutAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationView from "../components/draweritems";
import COLORS from "../utility/Colors";
const Profile = ({ navigation }) => {
  const drawerPosition = "right";
  const drawer = useRef(null);
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
        <View style={{ flex: 1, paddingTop: 50 }}>
          <Text>Welcome to your profile</Text>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

export default Profile;
