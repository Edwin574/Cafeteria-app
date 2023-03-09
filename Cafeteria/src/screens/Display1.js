import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";

const logo = require("../../assets/JKUAT.png")

const Display1 = ({navigation}) => {
  const goToLandingPage=() => {
    navigation.navigate('welcome')
  }
  return (
    <View style={styles.container}>
      <View>
      <Image source={logo} style={{width: 200, height: 200}}/>
      </View>
      <Text style={styles.text}>WELCOME TO JKUAT CAFETERIA</Text>
      <TouchableOpacity style={styles.button} onPress={goToLandingPage}>
      <Text style={styles.buttontext}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Display1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: 'rgb(33, 188, 16)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap:50,
    
  },
  text: {
    color:'#ffffff',
    textAlign: "center",
    fontSize: 45,
    // marginTop:100,
  
  },
  button: {
    width:200,
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderRadius: 100,
    padding: 20,
    alignItems:'center',
  },
  buttontext: {
    color: 'rgb(33, 188, 16)',
    fontSize:20,
  }

});
