/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../screens/home/Home";
import Account from "../screens/account/Account";
import UpdatePassword from "../screens/account/UpdatePassword";
import { COLORS } from "../constants/theme";
import Feather from "@expo/vector-icons/Feather";
import Transaction from "../screens/transaction/Transaction";
import AllPlans from "../screens/home/AllPlans";
import PlanDetail from "../screens/home/PlanDetail";

const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name={"Home"}
      component={Home}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={"AllPlans"}
      component={AllPlans}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name={"PlanDetail"}
      component={PlanDetail}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);
const TransactionStack = createNativeStackNavigator();
const TransactionStackScreens = () => (
  <TransactionStack.Navigator>
    <TransactionStack.Screen
      name={"Transaction"}
      component={Transaction}
      options={{ headerShown: false }}
    />
  </TransactionStack.Navigator>
);

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreens = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name={"Account"}
      component={Account}
      options={{ headerShown: false }}
    />
    <ProfileStack.Screen
      name={"UpdatePassword"}
      component={UpdatePassword}
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
);

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === "UpdatePassword") {
    return "none";
  }

  return "flex";
}

const Tabs = createBottomTabNavigator();
export default () => {
  return (
    <Tabs.Navigator
      activeColor={COLORS.White}
      inactiveColor={COLORS.Primary}
      barStyle={{ backgroundColor: COLORS.Primary }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: getTabBarVisibility(route),
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.LightPrimary,
        tabBarInactiveTintColor: COLORS.Primary,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let IconComponent = Feather;
          switch (route.name) {
            case "HomeStack":
              iconName = "home";
              break;
            case "TransactionStack":
              iconName = "trending-up";
              break;
            case "ProfileStack":
              iconName = "user";
              break;
          }
          return (
            <IconComponent
              name={iconName}
              size={22}
              color={focused ? COLORS.LightPrimary : COLORS.Primary}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name={"HomeStack"}
        options={{ headerShown: false, tabBarLabel: "Home" }}
        component={HomeStackScreens}
      />
      <Tabs.Screen
        name={"TransactionStack"}
        options={{ headerShown: false, tabBarLabel: "Transaction" }}
        component={TransactionStackScreens}
      />
      <Tabs.Screen
        name={"ProfileStack"}
        options={{ headerShown: false, tabBarLabel: "Account" }}
        component={ProfileStackScreens}
      />
    </Tabs.Navigator>
  );
};
