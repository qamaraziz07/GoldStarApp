import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import OptionList from "../../components/OptionList";
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import Header from "../../components/Header";

const Account = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around" }}>
      <Header title={"Account Detail"} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: COLORS.LightPrimary,
          height: "10%",
          width: "80%",
          marginHorizontal: 5,
          borderRadius: 20,
          elevation: 2,
          shadowColor: COLORS.Black,
          shadowOffset: {
            width: 0,
          },
          shadowOpacity: 0.14,
          shadowRadius: 5.27,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <MaterialCommunityIcons
          name={"account-outline"}
          size={36}
          color={COLORS.Primary}
          style={styles.Icon}
        />
        <View>
          <Text
            style={{ fontSize: 18, fontWeight: "800", fontStyle: "italic" }}
          >
            03008600418
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              fontStyle: "italic",
              marginVertical: 5,
            }}
          >
            87654876
          </Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.OptionsContainer}>
          <OptionList
            text={"Payment History"}
            Icon={Ionicons}
            iconName={"bar-chart-outline"}
            onPress={() => console.log("Level Pressed")}
          />

          <View style={styles.optionSeparator} />
          <OptionList
            text={"Contact us"}
            Icon={MaterialCommunityIcons}
            iconName={"account-outline"}
            onPress={() => console.log("Profile Pressed")}
          />
          <View style={styles.optionSeparator} />
          <OptionList
            text={"Update Password"}
            Icon={Ionicons}
            iconName={"settings-outline"}
            onPress={() => navigation.navigate("UpdatePassword")}
          />
          <View style={styles.optionSeparator} />
          <OptionList
            text={"Download App"}
            Icon={MaterialCommunityIcons}
            iconName={"cloud-download"}
            onPress={() => console.log("Guide Pressed")}
          />
          <View style={styles.optionSeparator} />
          <OptionList
            text={"Logout"}
            Icon={Feather}
            iconName={"log-out"}
            onPress={() => console.log("logout")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    backgroundColor: COLORS.White,
    height: "60%",
    width: "80%",
    marginHorizontal: 5,
    borderRadius: 20,
    elevation: 2,
    shadowColor: COLORS.Black,
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 5.27,
  },
  OptionsContainer: {
    width: "80%",
    marginVertical: 2,
    alignSelf: "center",
  },
  Icon: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
