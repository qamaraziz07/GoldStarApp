import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const Transaction = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainViewContainer}>
        <View style={styles.headerView}>
          <Text style={styles.titleStyle}>Create Transaction</Text>
          <View style={styles.iconStyle}>
            <TouchableOpacity>
              <Feather
                name={"book"}
                size={24}
                color={COLORS.Primary}
                style={{ marginRight: 4 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name={"bell"}
                size={24}
                color={COLORS.Primary}
                style={{ marginRight: 4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tileCardContainer}>
          <TouchableOpacity style={styles.leftCard}>
            <MaterialIcons
              name={"account-balance"}
              size={48}
              color={COLORS.White}
              style={{ marginRight: 4 }}
            />
            <Text
              style={{ fontSize: 14, fontWeight: "800", fontStyle: "italic" }}
            >
              Bank Account
              <Feather
                name={"arrow-up-right"}
                size={36}
                color={COLORS.White}
                style={{ marginRight: 4 }}
              />
            </Text>
          </TouchableOpacity>
          <View style={styles.columnCard}>
            <TouchableOpacity style={styles.rightCard1}>
              <Feather
                name={"arrow-down-left"}
                size={36}
                color={COLORS.White}
                style={{ marginRight: 4 }}
              />
              <Text
                style={{ fontSize: 14, fontWeight: "800", fontStyle: "italic" }}
              >
                Recharge Money
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightCard2}>
              <Feather
                name={"arrow-up-right"}
                size={36}
                color={COLORS.White}
                style={{ marginRight: 4 }}
              />
              <Text
                style={{ fontSize: 14, fontWeight: "800", fontStyle: "italic" }}
              >
                Withdraw Money
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainViewContainer: {
    marginTop: 20,
  },
  headerView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 10,
  },
  iconStyle: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  tileCardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftCard: {
    width: 150,
    height: 210,
    backgroundColor: COLORS.Primary,
    borderRadius: 10,
    marginHorizontal: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  columnCard: {
    flexDirection: "column",
    gap: 4,
  },
  rightCard1: {
    height: 105,
    width: 160,
    backgroundColor: COLORS.LightPrimary,

    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  rightCard2: {
    height: 105,
    width: 160,
    backgroundColor: COLORS.LightSecondary,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
});
