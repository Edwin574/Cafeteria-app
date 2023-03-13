import React from "react";
import { View, Text, StyleSheet } from "react-native";
const humbergerModal = () => {
  return (
    <View style={styles.parent}>
      <View>
        <Text>Profile</Text>
      </View>
      <View>
        <Text> My orders</Text>
      </View>
      <View>
        <Text>Deposit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    flexDirection: "column",
  },
});
export default humbergerModal;
