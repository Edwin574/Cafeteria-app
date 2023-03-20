import React from "react";

import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import COLORS from "../utility/Colors";

const Loader = ({ visible = false }) => {
  const { width, height } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.container,{height,width}]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.mediumGreen} />
          <Text style={{marginLeft:10,fontSize:16}}>Loading...</Text>
        </View>
      </View>
    )``
  );
};
const styles = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
});
export default Loader;
