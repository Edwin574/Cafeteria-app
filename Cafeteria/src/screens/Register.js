import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import COLORS from "../utility/Colors";

const Register = () => {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={styles.registerText}>REGISTER</Text>
        <Text
          style={{
            color: COLORS.mediumGreen,
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          Enter Your Details to Register
        </Text>
        <View style={{ marginVertical: 20 }}>
          <CustomInput
            onChangeText={() => {}}
            label="Full Name"
            IconName="account"
            placeholder="Enter your full name"
            error=""
            onFocus={() => {}}
          />
          <CustomInput
            onChangeText={() => {}}
            label="Registration Number"
            IconName="lead-pencil"
            placeholder="Enter your reg number"
            error=""
            onFocus={() => {}}
          />
          <CustomInput
            onChangeText={() => {}}
            label="Phone Number"
            IconName="phone"
            placeholder="Enter your contact"
            error=""
            onFocus={() => {}}
          />
          <CustomInput
            onChangeText={() => {}}
            label="Password"
            IconName="lock-outline"
            placeholder="Enter your password"
            error=""
            onFocus={() => {}}
          />
        </View>
        <Text> Already have an account? Login</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  registerText: {
    color: COLORS.primaryGreen,
    fontSize: 40,
    fontWeight: "bold",
  },
});
