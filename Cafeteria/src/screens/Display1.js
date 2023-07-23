import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../utility/Colors";

const logo = require("../../assets/JKUAT.png");

const Display1 = () => {
  const navigation = useNavigation();
  const goToLandingPage = () => {
    navigation.navigate("welcome");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={{ width: 200, height: 200 }} />
      </View>
      <Text style={styles.text}>WELCOME TO JKUAT CAFETERIA</Text>
      <TouchableOpacity style={styles.button} onPress={goToLandingPage}>
        <Text style={styles.buttontext}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Display1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: COLORS.primaryGreen,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  text: {
    color: COLORS.white,
    textAlign: "center",
    fontSize: 45,
    // marginTop:100,
  },
  button: {
    width: 200,
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderRadius: 100,
    padding: 20,
    alignItems: "center",
  },
  buttontext: {
    color: COLORS.primaryGreen,
    fontSize: 20,
  },
});
