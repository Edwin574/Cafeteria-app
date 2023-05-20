import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";

import FoodItems from "../Data/FoodItems";
import NavigationView from "../components/draweritems";

const Home = ({ navigation }) => {
  const [cartValue, setCartValue] = useState(0);

  const drawerPosition = "right";
  const drawer = useRef(null);

  const showCategory = ({ item }) => {
    const categoryTitle = Object.keys(item)[0];
    const foods = item[categoryTitle];

    return (
      <View style={styles.categoryView}>
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        <View style={styles.foodContainer}>
          {foods.map((food, index) => (
            <View key={index} style={styles.foodItem}>
              <Text>{food.name}</Text>
              <Text>Price: ${food.price}</Text>
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
          ))}
        </View>
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

        <View style={styles.container}>
          <FlatList
            data={FoodItems}
            renderItem={showCategory}
            keyExtractor={(item, index) => index.toString()}
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
  foodItem: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginVertical: 5,
    // marginHorizontal: 5,
    borderRadius: 10,
    width: 100,
    height: 60,
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
    paddingHorizontal: 10,
    backgroundColor: COLORS.primaryGreen,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    padding: 15,
    backgroundColor:COLORS.red,
  },
  foodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Home;
