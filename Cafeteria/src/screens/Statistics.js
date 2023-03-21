import React, { useRef } from "react";
import { View, Text, DrawerLayoutAndroid, SafeAreaView } from "react-native";
import COLORS from "../utility/Colors";
import NavigationView from "../components/draweritems";

const Statistics = ({ navigation }) => {
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
        <View style={{ flex: 1, paddingTop: 50 }}>
          <Text>You can view your Statistics</Text>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

export default Statistics;
