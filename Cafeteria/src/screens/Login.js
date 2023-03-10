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
        <Text style={styles.registerText}>LOGIN</Text>
        <Text
          style={{
            color: COLORS.mediumGreen,
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          Dont have an account? register
        </Text>
        <View style={{ marginVertical: 20 }}>
          
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
            label="Password"
            IconName="lock-outline"
            placeholder="Enter your password"
            error=""
            onFocus={() => {}}
          />
        </View>
        <Text> Already have an account</Text>
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

