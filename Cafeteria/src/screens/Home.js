import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  DrawerLayoutAndroid,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import BreakFast from "../Data/BreakfastData";

import NavigationView from "../components/draweritems";
import Navbar from "../components/Navbar";
import MainCourses from "../Data/LunchfastData";
// import HumbergerModal from "../components/humbergerModal";

const Home = ({ navigation }) => {
  const [cartValue, setCartValue] = useState(0);

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
        <Navbar />
        <ScrollView>
          <View style={{padding:10,backgroundColor:'#BA0021'}}>
            <View>
              <Text style={{textTransform:'uppercase'}}>BreakFast</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                
              }}
            >
              {BreakFast.map((item, index) => {
                return (
                  <Pressable style={styles.fooditem}>
                    <View key={index}>
                      <Text>{item.name}</Text>
                      <Text>Ksh.{item.price}</Text>
                      <Pressable>
                        <Text>Add</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                );
              })}
            </View>
            <View>
              <Text style={{textTransform:'uppercase'}}>Main Course Dishes</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {MainCourses.map((item, i) => {
                return (
                  <Pressable style={styles.fooditem}>
                    <View key={i}>
                      <Text>{item.name}</Text>
                      <Text>{item.price}</Text>
                    </View>
                    <Pressable>
                    <Text>Add</Text>
                    </Pressable>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <View></View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fooditem: {
    // position: "relative",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems:'center',
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    // flexGrow:1,
  },
  cart: {
    backgroundColor: "white",
    width: 50,
    textAlign: "center",
    borderRadius: 10,
  },
  cartValue: {
    position: "absolute",
    right: 0,
    top: -10,
    fontSize: 16,
    color: COLORS.red,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.primaryGreen,
  },
  navigationContainer: {
    backgroundColor: COLORS.red,
  },
  image: {
    flex: 1,
  },
  paragraph: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
    padding: 10,
    flexDirection: "row",
    gap: 20,
  },
  drawerText: {
    color: COLORS.white,
    fontSize: 20,
  },
  logout: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    gap: 10,
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 30,
    width: "50%",
    borderRadius: 100,
  },
});
export default Home;
