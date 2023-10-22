import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const PlanCards = ({ planName, profit, backgroundImage }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.card}>
      <View style={styles.mainView}>
        <View>
          <Text style={styles.cardTitle}>{planName}</Text>
          <Text style={styles.profitText}>{profit}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PlanCards;

const styles = StyleSheet.create({
  mainView: { flex: 1, justifyContent: "space-between", padding: 10 },
  cardTitle: { fontSize: 22, color: COLORS.White, fontStyle: "italic" },
  profitText: {
    fontSize: 18,
    color: COLORS.LightGray,
    fontStyle: "italic",
  },
  card: {
    width: 130,
    height: 150,
    marginLeft: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
