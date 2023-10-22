import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../src/constants/theme";
import Header from "../../components/Header";
import InvestCard from "../../components/InvestCard";
import GoldCard from "../../../assets/images/GoldCard.png";
import StandardCard from "../../../assets/images/Card1.jpg";
import SilverCard from "../../../assets/images/silver.webp";
import platinumCard from "../../../assets/images/platinum.png";

const AllPlans = ({ navigation }) => {
  const InvestPlans = [
    {
      id: "1",
      planName: "STANDARD",
      investAmount: "2000",
      perDayEarn: "200",
      planImage: StandardCard,
    },
    {
      id: "2",
      planName: "GOLD",
      investAmount: "3000",
      perDayEarn: "300",
      planImage: GoldCard,
    },
    {
      id: "3",
      planName: "SILVER",
      investAmount: "4000",
      perDayEarn: "400",
      planImage: SilverCard,
    },
    {
      id: "4",
      planName: "PLATINUM",
      investAmount: "5000",
      perDayEarn: "500",
      planImage: platinumCard,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 20, flex: 1 }}>
        <Header title="All Plans" backIcon />
        <StatusBar backgroundColor={COLORS.Primary} barStyle={"dark-content"} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FlatList
            data={InvestPlans}
            vertical
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <InvestCard
                planName={item.planName}
                planImage={item.planImage}
                investAmount={item.investAmount}
                perDayEarn={item.perDayEarn}
                onPress={() =>
                  navigation.navigate("PlanDetail", { plan: item })
                }
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllPlans;

const styles = StyleSheet.create({});
