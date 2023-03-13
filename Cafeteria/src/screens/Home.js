import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  SectionList,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";

import FoodItems from "../Data/FoodItems";

const Home = ({ navigation }) => {
  const [cartValue, setCartValue] = useState(0);
  const foodItem = ({ item }) => (
    <View style={styles.fooditem}>
      <Text>{item.name}</Text>
      <Text>{`KSH.${item.price}`}</Text>
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
  );
  const sectionTitle = ({ section }) => (
    <View style={{ backgroundColor: COLORS.primaryGreen, padding: 10 }}>
      <Text>{section.title}</Text>
    </View>
  );
  const sections = [
    { title: "Beakfast", data: FoodItems[0].breakfast },
    { title: "General Meals", data: FoodItems[1].General },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
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
          onPress={() => {
            Alert.alert("home button pressed");
          }}
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
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.red,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
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
});
export default Home;
