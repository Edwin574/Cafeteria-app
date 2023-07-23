import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart items", cart);
  return (
    <View>
      <Text>Welcome to your cart</Text>
      <Text>You have {cart.length} Items</Text>
      {cart.map((item, index) => {
        return (
          <View key={index} style={styles.cartitem}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center',alignItems:"center",gap:5}}>
              <Pressable>
                <Text>-</Text>
              </Pressable>
              <Text>{item.quantity}</Text>
              <Pressable>
                <Text>+</Text>
              </Pressable>
            </View>
            <Pressable>
              <AntDesign name="delete" size={24} color={COLORS.primaryGreen} />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  cartitem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent:'center',
    paddingVertical: 10,
    margin:2,
    // backgroundColor:COLORS.light,
    elevation: 3,
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});
