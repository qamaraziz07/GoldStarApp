import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import PlanCards from "../../components/PlanCards";
import PurchasedCard from "../../components/PurchasedCard";
import GoldCard from "../../../assets/images/GoldCard.png";
import standard from "../../../assets/images/Card1.jpg";
import silver from "../../../assets/images/silver.webp";
import platinum from "../../../assets/images/platinum.png";

const Home = ({ navigation }) => {
  const CurrentPlans = [
    {
      id: "1",
      planName: "Standard",
      profit: "10",
      todayEarning: "2000",
      perDayEarn: "100",
      image: standard,
    },
    {
      id: "2",
      planName: "Gold",
      profit: "20",
      perDayEarn: "200",
      todayEarning: "2000",
      image: GoldCard,
    },
    {
      id: "3",
      planName: "Silver",
      profit: "20",
      perDayEarn: "200",
      todayEarning: "2000",
      image: silver,
    },
    // {
    //   id: "4",
    //   planName: "Platinum",
    //   profit: "20",
    //   perDayEarn: "200",
    //   todayEarning: "2000",
    //   iconName: "currency-gbp",
    //   backgroundColor: COLORS.platinum,
    // },
  ];
  const data = [
    {
      id: "1",
      planName: "Standard",
      profit: "30 % return",
      backgroundImage: standard,
    },
    {
      id: "2",
      planName: "Gold",
      profit: "30 % return",
      backgroundImage: GoldCard,
    },
    {
      id: "3",
      planName: "Silver",
      profit: "30 % return",
      backgroundImage: silver,
    },
    {
      id: "4",
      planName: "Platinum",
      profit: "30 % return",
      backgroundImage: platinum,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.Primary} barStyle={"dark-content"} />
      <View style={{ marginTop: 15 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Text style={styles.titleStyle}>Welcome, Qamar Aziz</Text>
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
          <View style={styles.paymentsView}>
            <Ionicons
              name={"wallet-outline"}
              size={40}
              color={COLORS.Black}
              style={{ marginBottom: 8 }}
            />
            <View style={styles.innerBalanceView}>
              <Text style={styles.balanceTitle}>Total Balance</Text>
              <Text style={styles.balance}>PKR: 5000</Text>
            </View>
          </View>
          <View>
            <View style={styles.bestPlanView}>
              <Text style={styles.bestPlan}>Best Plans</Text>
              <TouchableOpacity
                style={styles.SeeAllView}
                onPress={() => navigation.navigate("AllPlans")}
              >
                <Text style={styles.textStyle}>See All</Text>
                <Feather
                  name={"arrow-right"}
                  size={28}
                  color={COLORS.Primary}
                  style={{ marginRight: 4 }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data.map((item) => (
                <PlanCards
                  key={item.id}
                  planName={item.planName}
                  profit={item.profit}
                  backgroundImage={item.backgroundImage}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.currentPlansView}>
            <Text style={styles.currentPlansTitle}>Your Current Plans</Text>
            <View style={styles.currentPlanContainer}>
              <ScrollView>
                {CurrentPlans?.map((item) => (
                  <TouchableOpacity key={item.id}>
                    <PurchasedCard
                      planCard={item.planName}
                      imageUrl={item.image}
                      perDayEarn={item.perDayEarn}
                      profit={item.profit}
                      todayEarning={item.todayEarning}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  paymentsView: {
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: COLORS.Primary,
    backgroundColor: COLORS.Primary,
    paddingHorizontal: 10,
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  innerBalanceView: { flex: 1, marginLeft: 10 },
  balanceTitle: { fontWeight: "bold", fontSize: 18, color: COLORS.Black },
  balance: {
    fontSize: 14,
    color: COLORS.Black,
    marginVertical: 5,
  },
  bestPlanView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bestPlan: {
    fontSize: 18,
    fontStyle: "italic",
    color: COLORS.Black,
    fontWeight: "600",
  },
  SeeAllView: { flexDirection: "row", alignItems: "center" },
  textStyle: {
    fontSize: 16,
    color: COLORS.Primary,
    fontWeight: "400",
  },
  currentPlansView: {
    flexDirection: "column",
  },
  currentPlansTitle: {
    fontSize: 18,
    fontStyle: "italic",
    color: COLORS.Black,
    fontWeight: "600",
    padding: 10,
  },
  currentPlanContainer: {
    flex: 1,
    marginBottom: 10,
  },
});
