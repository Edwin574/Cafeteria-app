import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({ drawer }) => {
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <MaterialCommunityIcons
        name="home"
        size={40}
        color={COLORS.primaryGreen}
        onPress={() => navigation.navigate("home")}
      />
      <View style={{ position: "relative" }}>
        <MaterialCommunityIcons
          name="cart"
          size={24}
          color={COLORS.primaryGreen}
          onPress={() => navigation.navigate("cart")}
        />
        <Text style={styles.cartValue}>{cart.length}</Text>
      </View>

      <MaterialCommunityIcons
        name="menu"
        size={40}
        color={COLORS.primaryGreen}
        onPress={() => drawer.current.openDrawer()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    paddingTop: 40,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
  },
  cartValue: {
    position: "absolute",
    color: "red",
    right: -3,
    top: -7,
    fontWeight: "500",
    fontSize: 15,
  },
});
export default Navbar;
