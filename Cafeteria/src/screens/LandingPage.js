import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>ORDER FOOD AT YOUR OWN COMFORT</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(33, 188, 16)",
  },
  text1: {
    color: "#ffffff",
  },
  button: {
    width: 200,
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderRadius: 100,
    padding: 20,
    alignItems: "center",
  },
  buttontext: {
    color: "rgb(33, 188, 16)",
    fontSize: 20,
  },
});
