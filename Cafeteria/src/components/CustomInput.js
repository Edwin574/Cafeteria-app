import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import COLORS from "../utility/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomInput = ({
  label,
  IconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.light
              : COLORS.mediumGreen,
            alignItems: "center",
          },
        ]}
      >
        <MaterialCommunityIcons
          name={IconName}
          size={24}
          color={COLORS.black}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          secureTextEntry={hidePassword}
          style={{ color: COLORS.mediumGreen, flex: 1 }}
          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: COLORS.black, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.mediumGreen,
  },
  inputContainer: {
    height: 60,
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderBottomWidth: 2.5,
    borderBottomColor: COLORS.primaryGreen,
    alignItems: "center",
    display: "flex",
    gap: 5,
  },
});
export default CustomInput;
