import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import COLORS from "../utility/Colors";

const CustomButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
  },
  buttontext: {
    color: COLORS.primaryGreen,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default CustomButton;
