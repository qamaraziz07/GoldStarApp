import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InvestCard = ({
  planName,
  perDayEarn,
  investAmount,
  onPress,
  planImage,
}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        {
          width: windowWidth * 0.9,
          height: windowHeight * 0.42,
          margin: windowWidth * 0.015,
        },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={planImage} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.bottomText}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{planName}</Text>
            <View style={styles.perDayEarningsContainer}>
              <Text style={styles.perDayEarn}>Rs:{perDayEarn} / Day</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Our unique ability to maximize returns for leisure investment owners
            stems from our unique access to institutional
          </Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.investAmount}>Rs:{investAmount}</Text>
            <TouchableOpacity style={styles.investButton} onPress={onPress}>
              <Text style={styles.investBtnText}>Invest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvestCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.White,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    shadowColor: COLORS.DarkGrey,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.44,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height: 160,
    width: 400,
    overflow: "hidden",
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
    color: COLORS.Primary,
  },

  description: {
    color: COLORS.muted,
    fontSize: 10,
    marginHorizontal: 10,
  },
  bottomText: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 2,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  perDayEarningsContainer: {
    backgroundColor: COLORS.LightPrimary,
    borderRadius: 5,
    padding: 5,
  },
  perDayEarn: {
    fontSize: 10,
    color: COLORS.White,
  },
  bottomContainer: { flexDirection: "row", justifyContent: "space-between" },
  investAmount: {
    marginVertical: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.LightSecondary,
    marginHorizontal: 5,
  },
  investButton: {
    backgroundColor: COLORS.Primary,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  investBtnText: {
    fontSize: 14,
    color: COLORS.White,
  },
});
