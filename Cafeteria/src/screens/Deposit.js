import React, { useRef } from "react";
import { View, Text, DrawerLayoutAndroid, SafeAreaView } from "react-native";
import COLORS from "../utility/Colors";
import NavigationView from "../components/draweritems";
import Navbar from "../components/Navbar";
const Deposit = ({ navigation }) => {
  drawer = useRef(null);
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={() => (
          <NavigationView drawer={drawer} navigation={navigation} />
        )}
      >
        <Navbar drawer={drawer} navigation={navigation} />
        <View style={{ flex: 1, paddingTop: 50 }}>
          <Text>You can deposit cash</Text>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

export default Deposit;
