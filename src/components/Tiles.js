import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TileCard = ({
  title,
  icon,
  backgroundColor,
  titleStyle,
  iconStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      <View style={[styles.iconContainer, iconStyle]}>{icon}</View>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default TileCard;
