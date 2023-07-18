import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React from "react";
import BreakFast from "../Data/BreakfastData";
import MainCourses from "../Data/LunchfastData";
import COLORS from "../utility/Colors";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const FoodItems = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // console.log(cart);
  const handlePress = () => {
    Alert.alert("Food Item alert", "Added to cart", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View style={{ padding: 10, backgroundColor: "#BA0021" }}>
      <View>
        <Text style={styles.headText}>BreakFast</Text>
      </View>
      <View style={styles.container}>
        {BreakFast.map((item, index) => {
          return (
            <Pressable
              style={styles.fooditem}
              onPress={() => {
                handlePress;
                dispatch(addToCart(item));
              }}
              key={index}
            >
              <View>
                <Text style={styles.itemHeader}>{item.name}</Text>
                <Text style={styles.priceText}>Ksh.{item.price}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
      <View>
        <Text style={styles.headText}>Main Course Dishes</Text>
      </View>
      <View style={styles.container}>
        {MainCourses.map((item, i) => {
          return (
            <Pressable
              style={styles.fooditem}
              key={i}
              onPress={() => {
                handlePress;
                dispatch(addToCart(item));
              }}
            >
              <View>
                <Text style={styles.itemHeader}>{item.name}</Text>
                <Text style={styles.priceText}>Ksh.{item.price}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default FoodItems;

const styles = StyleSheet.create({
  headText: {
    textTransform: "uppercase",
    fontSize: 30,
    color: COLORS.white,
    fontWeight: "bold",
    alignSelf: "center",
  },
  fooditem: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 5,
    borderRadius: 15,
    width: 120,
    height: 80,
    elevation: 8,
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  priceText: {
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 2,
    textTransform: "uppercase",
  },
  itemHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primaryGreen,
    textTransform: "uppercase",
  },
  addButton: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderColor: COLORS.mediumGreen,
    borderWidth: 2,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
