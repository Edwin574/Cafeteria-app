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
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Loader from "../components/Loader";
import COLORS from "../utility/Colors";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    first_name: "",
    second_name:"",
    email: "",
    phone: "",
    password: "",
    re_password:"",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.first_name) {
      handleError("Please input first name", "first_name");
      isValid = false;
    }
    if (!inputs.second_name) {
      handleError("Please input Second name", "second_name");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("Please input your Student Email", "email");
      // isValid = false;
    } else if (!inputs.email.match(/^[a-zA-Z0-9._%+-]+@students\.jkuat\.ac\.ke$/
      )) {
      handleError("Please input valid student Email", "email");
      isValid = false;
    }
    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }if(!inputs.re_password){
      handleError("Please Retype Your password","re_password")
    }
    // else if(inputs.password==inputs.re_password){
    //   handleError("Passwords don't match","re_password")
    //   isValid=false
    // }
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap:15,
            }}
          >
            <View style={{flex:1}}>
              <CustomInput
                onChangeText={(text) => {
                  handleOnChange(text, "first_name");
                }}
                label="First Name"
                IconName="account"
                placeholder="Enter your first name"
                error={errors.first_name}
                onFocus={() => handleError(null, "first_name")}
              />
            </View>
            <View style={{flex:1}}>
              <CustomInput
                onChangeText={(text) => {
                  handleOnChange(text, "second_name");
                }}
                label="Second Name"
                IconName="account"
                placeholder="Enter your surname"
                error={errors.second_name}
                onFocus={() => handleError(null, "second_name")}
              />
            </View>
          </View>

          <CustomInput
            onChangeText={(text) => {
              handleOnChange(text, "email");
            }}
            label="Email"
            IconName="email"
            placeholder="Student Email"
            error={errors.email}
            onFocus={() => handleError(null, "email")}
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
          <CustomInput
            onChangeText={(text) => {
              handleOnChange(text, "re_password");
            }}
            label="Confirm Password"
            IconName="lock-outline"
            placeholder="Confirm your Password"
            error={errors.re_password}
            onFocus={() => handleError(null, "re_password")}
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
