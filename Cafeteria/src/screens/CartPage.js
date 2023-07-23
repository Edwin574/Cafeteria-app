import React, { useRef } from "react";
import { View, Text, DrawerLayoutAndroid, SafeAreaView } from "react-native";
import COLORS from "../utility/Colors";
import NavigationView from "../components/draweritems";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
// import { useNavigation } from "@react-navigation/native";

const CartPage = () => {
  // const navigation = useNavigation();
  const cartitems = useSelector((state) => state.cart.cart);
  const drawer = useRef(null);
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={() => <NavigationView drawer={drawer} />}
      >
        <Navbar drawer={drawer} />

        <View style={{ flex: 1, paddingTop: 10 }}>
          <CartItems/>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

export default CartPage;
