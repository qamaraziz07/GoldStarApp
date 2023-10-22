import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
const OptionList = ({ Icon, iconName, text, onPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.IconContainer}>
          <View style={styles.iconStyle}>
            <Icon
              name={iconName}
              size={26}
              color={COLORS.Primary}
              style={styles.Icon}
            />
          </View>
          <Text style={styles.listText}>{text}</Text>
        </View>
        <View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={14}
            color={COLORS.DarkGrey}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default OptionList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.White,
    height: 60,
    marginVertical: 5,
  },
  IconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listText: {
    marginLeft: 8,
    color: COLORS.DarkGrey,
  },
  iconStyle: {
    backgroundColor: COLORS.SecondaryWhite,
    height: 40,
    width: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
