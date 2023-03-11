import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Loader from "../components/Loader";

import COLORS from "../utility/Colors";

const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({ regNo: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isvalid = true;
    if (!inputs.regNo) {
      handleError("please input registration number", "regNo");
      isvalid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isvalid = false;
    }
    if (isvalid) {
      loginUser();
    }
  };
  const loginUser = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.regNo == userData.regNo &&
          inputs.password == userData.password
        ) {
          navigation.navigate("home");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid details");
        }
      } else {
        Alert.alert("Error", "User Does not Exist");
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
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
        <Text
          style={{
            color: COLORS.mediumGreen,
            fontSize: 18,
            marginVertical: 10,
          }}
        >
          Login into your account
        </Text>
        <View style={{ marginVertical: 20 }}>
          <CustomInput
            onChangeText={(text) => {
              handleOnChange(text, "regNo");
            }}
            label="Registration Number"
            IconName="lead-pencil"
            placeholder="Enter your reg number"
            error={errors.regNo}
            onFocus={() => {
              handleError(null, "regNo");
            }}
          />
          <CustomInput
            onChangeText={text=>handleOnChange(text,'password')}
            label="Password"
            IconName="lock-outline"
            placeholder="Enter your password"
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
          />
        </View>
        <CustomButton title="LOGIN" onPress={validate} />
        <Text
          style={styles.text1}
          onPress={() => {
            navigation.navigate("register");
          }}
        >
          Dont have an account? Register
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loginText: {
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
