import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  DrawerLayoutAndroid,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";

import FoodItems from "../Data/FoodItems";
import NavigationView from "../components/draweritems";
// import HumbergerModal from "../components/humbergerModal";

const Home = ({ navigation }) => {
  const [cartValue, setCartValue] = useState(0);

  const drawerPosition = "right";
  const drawer = useRef(null);

  const foodItem = ({ item }) => (
    <View style={{ backgroundColor: COLORS.red }}>
      <View style={styles.fooditem}>
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontWeight: "bold" }}>{`KSH.${item.price}`}</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="cart-minus"
            size={20}
            color={COLORS.primaryGreen}
            style={styles.cart}
            onPress={() => {
              setCartValue(cartValue - 1);
            }}
          />
          <MaterialIcons
            name="add-shopping-cart"
            size={20}
            color={COLORS.primaryGreen}
            style={styles.cart}
            onPress={() => {
              setCartValue(cartValue + 1);
            }}
          />
        </View>
      </View>
    </View>
  );
  const sectionTitle = ({ section }) => (
    <View style={{ backgroundColor: COLORS.primaryGreen, padding: 10 }}>
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 25,
        }}
      >
        {section.title}
      </Text>
    </View>
  );
  const sections = [
    { title: "Beakfast", data: FoodItems[0].breakfast },
    { title: "General Meals", data: FoodItems[1].General },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={() => <NavigationView drawer={drawer} />}
      >
        <View style={styles.navbar}>
          <MaterialCommunityIcons
            name="home"
            size={40}
            color={COLORS.primaryGreen}
          />
          <View style={{ position: "relative" }}>
            <MaterialCommunityIcons
              name="cart"
              size={24}
              color={COLORS.primaryGreen}
              onPress={() => navigation.navigate("cart")}
            />
            <Text style={styles.cartValue}>{cartValue}</Text>
          </View>

          <MaterialCommunityIcons
            name="menu"
            size={40}
            color={COLORS.primaryGreen}
            onPress={() => drawer.current.openDrawer()}
          />
        </View>

        <View style={{ flex: 1 }}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.name + index}
            renderItem={foodItem}
            renderSectionHeader={sectionTitle}
          />
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navbar: {
    paddingTop: 50,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
  },
  fooditem: {
    // position: "relative",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    // borderBottomWidth: 1,
    // borderBottomColor: COLORS.black,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  cart: {
    // position: "absolute",
    // top: 10,
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

    // alignItems: "center",
    // justifyContent: "center",
    // padding: 16,
  },
  navigationContainer: {
    backgroundColor: COLORS.red,
  },
  image: {
    flex: 1,
    // height:100,
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
    // backgroundColor: COLORS.white,
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
