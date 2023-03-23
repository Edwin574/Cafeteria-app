import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Loader from "../components/Loader";
import COLORS from "../utility/Colors";

const Register = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: "",
    regNo: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.fullname) {
      handleError("Please input full name", "fullname");
      isValid = false;
    }
    if (!inputs.regNo) {
      handleError("Please input registration number", "regNo");
      isValid = false;
    } else if (!inputs.regNo.match(/^SCM\d{3}-\d{4}\/\d{4}$/)) {
      handleError("please input valid registration number", "regNo");
      isValid = false;
    }
    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }
    if (isValid) {
      registerUser();
    }
  };
  const registerUser = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("login");
      } catch (error) {
        Alert.alert("ERROR", "something went wrong");
      }
    }, 2500);
  };
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
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
            onChangeText={(text) => {
              handleOnChange(text, "fullname");
            }}
            label="Full Name"
            IconName="account"
            placeholder="Enter your full name"
            error={errors.fullname}
            onFocus={() => handleError(null, "fullname")}
          />
          <CustomInput
            onChangeText={(text) => {
              handleOnChange(text, "regNo");
            }}
            label="Registration Number"
            IconName="lead-pencil"
            placeholder="Enter your reg number"
            error={errors.regNo}
            onFocus={() => handleError(null, "regNo")}
          />
          <CustomInput
            onChangeText={(text) => {
              handleOnChange(text, "phone");
            }}
            label="Phone Number"
            IconName="phone"
            placeholder="Enter your contact"
            error={errors.phone}
            onFocus={() => handleError(null, "phone")}
          />
          <CustomInput
            onChangeText={(text) => {
              handleOnChange(text, "password");
            }}
            label="Password"
            IconName="lock-outline"
            placeholder="Enter your password"
            error={errors.password}
            onFocus={() => handleError(null, "password")}
            password
          />
        </View>
        <CustomButton title="Register" onPress={validate} />
        
        <Text onPress={() => navigation.navigate("login")} style={styles.text1}>
          Already have an account? Login
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  registerText: {
    color: COLORS.primaryGreen,
    fontSize: 40,
    fontWeight: "bold",
  },
  text1: {
    color: COLORS.black,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 15,
  },
});
