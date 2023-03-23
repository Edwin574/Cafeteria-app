import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import COLORS from "../utility/Colors";

const LandingPage = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("login");
  };
  const goToSignUP = () => {
    navigation.navigate("register");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>ORDER FOOD AT YOUR OWN COMFORT</Text>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttontext}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>Don't have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={goToSignUP}>
        <Text style={styles.buttontext}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('home') 
      }}>
        <Text style={styles.buttontext}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryGreen,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: COLORS.white,
  },
  text2: {
    color: COLORS.white,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    height: 55,
    width: "90%",
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttontext: {
    color: COLORS.primaryGreen,
    fontSize: 20,
    fontWeight: "bold",
  },
});
