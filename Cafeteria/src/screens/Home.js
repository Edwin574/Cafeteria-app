import React, {useRef } from "react";
import {
 
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  ScrollView,
} from "react-native";
import COLORS from "../utility/Colors";

import NavigationView from "../components/draweritems";
import Navbar from "../components/Navbar";
import FoodItems from "../components/foodItems";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
const navigation=useNavigation()
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
        <Navbar drawer={drawer}/>
        <ScrollView>
        <FoodItems/>
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};
export default Home;
