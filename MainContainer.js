import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import Navigator from "./src/navigation/Navigator";

SplashScreen.preventAutoHideAsync();

const MainContainer = () => {
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        {/* <AuthNavigator /> */}
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default MainContainer;
