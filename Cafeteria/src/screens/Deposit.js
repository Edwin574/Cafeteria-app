import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  DrawerLayoutAndroid,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { DataTable } from "react-native-paper";
import COLORS from "../utility/Colors";
import NavigationView from "../components/draweritems";
import Navbar from "../components/Navbar";
const pageOptions = [2, 3, 4];
const Deposit = ({ navigation }) => {
  drawer = useRef(null);
  const [page, setPage] = useState(0);
  const [perPageItems, setPerPageItems] = useState(pageOptions[0]);
  useEffect(() => {
    setPage(0);
  }, [perPageItems]);
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="right"
        renderNavigationView={() => (
          <NavigationView drawer={drawer} navigation={navigation} />
        )}
      >
        <Navbar drawer={drawer} navigation={navigation} />
        <View style={{ flex: 1, paddingTop: 50 }}>
          <View style={styles.mypriofile}>
            <View>
              <Text style={styles.text}>Account</Text>
              <Text style={styles.text2}>Balance</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Ksh.
              </Text>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                393.00
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal:15}}>
            <Text>Your recent transactions</Text>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>NO</DataTable.Title>
                <DataTable.Title>Type</DataTable.Title>
                <DataTable.Title>Amount</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>1</DataTable.Cell>
                <DataTable.Cell>order</DataTable.Cell>
                <DataTable.Cell>-46</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>2</DataTable.Cell>
                <DataTable.Cell>order</DataTable.Cell>
                <DataTable.Cell>-46</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>3</DataTable.Cell>
                <DataTable.Cell>order</DataTable.Cell>
                <DataTable.Cell>-46</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>4</DataTable.Cell>
                <DataTable.Cell>deposit</DataTable.Cell>
                <DataTable.Cell>+</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>5</DataTable.Cell>
                <DataTable.Cell>order</DataTable.Cell>
                <DataTable.Cell>-50</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>7</DataTable.Cell>
                <DataTable.Cell>order</DataTable.Cell>
                <DataTable.Cell>-66</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>8</DataTable.Cell>
                <DataTable.Cell>deposit</DataTable.Cell>
                <DataTable.Cell>+160</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Pagination
                page={page}
                numberOfPages={3}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={pageOptions}
                itemsPerPage={perPageItems}
                setItemsPerPage={setPerPageItems}
                showFastPagination
                optionsLabel={"Rows per page"}
              />
            </DataTable>
          </View>
          <Text>You can deposit cash</Text>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mypriofile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primaryGreen,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: COLORS.white,
    fontSize: 30,
  },
  text2: {
    color: COLORS.white,
    fontSize: 50,
  },
});
export default Deposit;
