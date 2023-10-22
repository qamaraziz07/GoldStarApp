import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { COLORS } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import Counter from "../../components/Counter";

const PlanDetail = ({ route }) => {
  const { plan } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 20, flex: 1 }}>
        <Header title="Plan Details" backIcon />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image source={plan.planImage} style={styles.image} />
            <View style={styles.footer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.planName}>{plan.planName}</Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Feather name={"clock"} size={16} color={COLORS.Primary} />
                  <Text style={{ fontWeight: "600" }}>300 days</Text>
                </View>
              </View>
              <Text style={styles.investAmount}>
                Rs {plan.investAmount}
                <Text
                  style={{
                    color: COLORS.Gray,
                    fontSize: 12,
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  / invest Amount
                </Text>
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.perHour}>
                  Rs {plan.perDayEarn}
                  <Text
                    style={{
                      color: COLORS.Gray,
                      fontSize: 12,
                      fontWeight: "normal",
                    }}
                  >
                    {" "}
                    / Hourly
                  </Text>
                </Text>
                <Text style={styles.perDayEarn}>
                  Rs {plan.perDayEarn}
                  <Text
                    style={{
                      color: COLORS.Gray,
                      fontSize: 12,
                      fontWeight: "normal",
                    }}
                  >
                    {" "}
                    / Day
                  </Text>
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.totalIncome}>
                  Rs {plan.investAmount}
                  <Text
                    style={{
                      color: COLORS.Gray,
                      fontSize: 12,
                      fontWeight: "normal",
                    }}
                  >
                    {" "}
                    / Total Income
                  </Text>
                </Text>
                <Text style={styles.investQuantity}>
                  0
                  <Text
                    style={{
                      color: COLORS.Gray,
                      fontSize: 12,
                      fontWeight: "normal",
                    }}
                  >
                    {" "}
                    / Invest Quantity
                  </Text>
                </Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text
                  style={{
                    fontStyle: "italic",
                    fontWeight: "300",
                    color: COLORS.Gray,
                  }}
                >
                  Our unique ability to maximize returns for leisure investment
                  owners stems from our unique access to institutional,
                  international and private capital. While some owners may think
                  they get more from a sale without the support of a
                  professional broker, our process is proven to produce multiple
                  competitive offers, putting more money into our clients'
                  pockets and Close deals in less time.
                </Text>
              </View>
              <View style={{ marginVertical: 15 }}>
                <Counter />
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: COLORS.Primary,
                  marginVertical: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                }}
                onPress={() => {}}
              >
                <Text
                  style={{
                    color: COLORS.White,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Confirm to Invest
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PlanDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 500,
    height: 300,
    resizeMode: "cover",
  },
  planName: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: COLORS.Primary,
  },
  investAmount: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    color: COLORS.LightSecondary,
  },
  perDayEarn: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "600",
    marginLeft: 50,
  },
  investQuantity: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "600",
    marginLeft: 20,
  },
  perHour: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "600",
  },
  totalIncome: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "600",
  },
  footer: {
    height: "70%",
    width: "100%",
    backgroundColor: COLORS.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
});
