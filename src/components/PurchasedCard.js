import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const PurchasedCard = ({
  planCard,
  todayEarning,
  profit,
  perDayEarn,
  imageUrl,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageUrl} style={styles.imageStyle} resizeMode="cover" />
      <View style={styles.innerViewContent}>
        <View style={styles.cardTitle}>
          <Text style={styles.titleStyle}>{planCard}</Text>
          <Text>300days</Text>
        </View>
        <View style={styles.earningViewContent}>
          <Text style={styles.amountStyle}>
            Rs:{profit}
            <Text style={styles.commonText}> / Hourly</Text>
          </Text>
          <Text style={styles.amountStyle}>
            Rs:{perDayEarn}
            <Text style={styles.commonText}> / Day</Text>
          </Text>
        </View>
        <Text style={styles.amountStyle}>
          {todayEarning}
          <Text style={styles.commonText}> / Earned income</Text>
        </Text>
      </View>
    </View>
  );
};

export default PurchasedCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: COLORS.Primary,
    backgroundColor: COLORS.White,
    paddingHorizontal: 10,
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  imageStyle: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  innerViewContent: { flex: 1, marginLeft: 10 },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.Black,
    fontStyle: "italic",
  },
  earningViewContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountStyle: {
    fontSize: 10,
    color: COLORS.LightSecondary,
    marginVertical: 5,
    fontWeight: "bold",
  },
  commonText: { color: COLORS.Black, fontWeight: "normal" },
});
