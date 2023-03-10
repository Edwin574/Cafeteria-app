import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import COLORS from "../utility/Colors";

const LandingPage = ({navigation}) => {
    const goToLogin = () => {
        navigation.navigate('login')
    }
    const goToSignUP = () => {
        navigation.navigate('register')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>ORDER FOOD AT YOUR OWN COMFORT</Text>
      <CustomButton title='LOGIN' onPress={goToLogin}/>
      <Text style={styles.text1}>Don't have an account?</Text>
     <CustomButton title='REGISTER' onPress={goToSignUP}/>
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
    padding:10,
    gap: 20,
        justifyContent: "center",
    alignItems:"center"
  },
  text1: {
    color:COLORS.white,
  },
  text2: {
    color: COLORS.white,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
});
