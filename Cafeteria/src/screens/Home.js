import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  SectionList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import FoodItems from "../Data/FoodItems";
const Home = () => {
  const foodItem = ({ item }) => (
    <View style={styles.fooditem}>
      <Text>{item.name}</Text>
      <Text>{`KSH.${item.price}`}</Text>
    </View>
  );
  const sectionTitle = ({ section }) => (
    <View style={{ backgroundColor: COLORS.primaryGreen, padding: 10 }}>
      <Text>{section.title}</Text>
    </View>
  );
  const sections = [
    { title: "Beakfast", data: FoodItems[0].breakfast },
    { title: "General Meals", data: FoodItems[1].General },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
  
        <View style={styles.navbar}>
          <MaterialCommunityIcons
            name="home"
            size={40}
            color={COLORS.primaryGreen}
          />
          <MaterialCommunityIcons
            name="menu"
            size={40}
            color={COLORS.primaryGreen}
          />
      </View>
      
      <View style={{ flex: 1 }}>
        
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.name + index}
            renderItem={foodItem}
            renderSectionHeader={sectionTitle}
          />
        </View>
     </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navbar: {
    // flex:1,
    paddingTop: 50,
    paddingHorizontal:20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
  },
  fooditem: {
    padding:15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.red,
    borderBottomWidth: 1,
    borderBottomColor:COLORS.black,
  }
});
export default Home;
