import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants/theme";

const Header = (props) => {
  const { goBack } = useNavigation();
  const { title, backIcon, icon, iconFamily, parentCallback } = props;

  const Icon = () => {
    let IconComponent = iconFamily;
    return <IconComponent name={icon} size={24} />;
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={COLORS.White} />
      <View style={styles.iconView}>
        {backIcon && (
          <TouchableOpacity
            onPress={() => goBack()}
            style={[{ marginRight: 20 }]}
          >
            <Ionicons name={"chevron-back"} size={20} color={COLORS.Primary} />
          </TouchableOpacity>
        )}
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      {icon && iconFamily && (
        <TouchableOpacity onPress={() => parentCallback()}>
          <Icon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: COLORS.LightGray,
    backgroundColor: COLORS.White,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 50,
  },
  iconView: { flexDirection: "row", alignItems: "center" },
  titleStyle: { fontSize: 18, color: COLORS.Black, fontWeight: "600" },
});
