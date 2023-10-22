import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LogBox,
  Alert,
  ActivityIndicator,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import Feather from "@expo/vector-icons/Feather";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
LogBox.ignoreAllLogs();

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.Primary} barStyle={"dark-content"} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Welcome SignIn</Text>
          <Text style={styles.subHeaderTitle}>
            Invest and double you Income now !
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  color: COLORS.Primary,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginVertical: 10,
                  justifyContent: "center",
                  paddingHorizontal: 4,
                }}
              >
                Mobile Number
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  height: 50,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: COLORS.Primary,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <TextInput
                  style={{ flex: 1 }}
                  maxLength={11}
                  value={phoneNumber}
                  inputMode="numeric"
                  onChangeText={(val) => {
                    setPhoneNumber(val);
                  }}
                  fontSize={20}
                />
                <Feather name="smartphone" size={20} color={COLORS.Gray} />
              </View>
              <Text
                style={{
                  color: COLORS.Primary,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginVertical: 10,
                }}
              >
                Password
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  height: 50,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: COLORS.Primary,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <TextInput
                  style={{ flex: 1 }}
                  value={password}
                  inputMode={"text"}
                  fontSize={24}
                  onChangeText={(val) => {
                    setPassword(val);
                  }}
                  secureTextEntry={!showPass}
                />
                <TouchableOpacity onPress={() => setShowPass((p) => !p)}>
                  <Feather
                    name={showPass ? "eye" : "eye-off"}
                    size={20}
                    color={COLORS.Gray}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: COLORS.Primary,
                  marginVertical: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                }}
                onPress={() => {
                  if (phoneNumber == "" || password == "") {
                    Alert.alert("Hi Gold Star, user", "Please fill all fields");
                  } else {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      // navigation.navigate("home");
                    }, 1000);
                    // Api.login(email, password).then((res) => {
                    //   setLoading(false);
                    //   console.log(res, "login");
                    //   if (res.response == 101) {
                    //     AsyncStorage.setItem(
                    //       "userInfo",
                    //       JSON.stringify(res.data)
                    //     ).then(() => {
                    //       dispatch({
                    //         type: "setUserInfo",
                    //         payload: { userInfo: res.data },
                    //       });
                    //       dispatch({
                    //         type: "setActiveStack",
                    //         payload: { activeStack: 3 },
                    //       });
                    //     });
                    //   } else {
                    //     Alert.alert("GladConnect", "Invalid credentials");
                    //     setPassword("");
                    //   }
                    // });
                  }
                }}
              >
                <Text
                  style={{
                    color: COLORS.White,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Login{" "}
                </Text>
                {loading && <ActivityIndicator color={COLORS.White} />}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: COLORS.Black,
                  marginVertical: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                }}
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text
                  style={{
                    color: COLORS.White,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Go to Register
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </Animatable.View>
      </SafeAreaView>
    </>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Primary,
  },
  locationBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.DarkerOpacity,
  },
  icon: {
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: COLORS.LightestGray,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.Black,
    fontStyle: "italic",
  },
  subHeaderTitle: {
    ...FONTS.body4,
    color: COLORS.Black,
    marginVertical: SIZES.padding,
    textAlign: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
});
