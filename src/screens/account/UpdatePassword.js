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

const UpdatePassword = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.Primary} barStyle={"dark-content"} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Update password</Text>
          <Text style={styles.subHeaderTitle}>
            change your password and login again
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
                Current Password
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
                  value={currentPassword}
                  inputMode="text"
                  onChangeText={(val) => {
                    setCurrentPassword(val);
                  }}
                  fontSize={20}
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
              <Text
                style={{
                  color: COLORS.Primary,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginVertical: 10,
                }}
              >
                Confirm Password
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
                  value={confirmPassword}
                  inputMode={"text"}
                  fontSize={24}
                  onChangeText={(val) => {
                    setConfirmPassword(val);
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
                  backgroundColor: COLORS.Black,
                  marginVertical: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                }}
                onPress={() => {
                  if (
                    currentPassword == "" ||
                    password == "" ||
                    confirmPassword == ""
                  ) {
                    Alert.alert("Hi Gold Star, user", "Please fill all fields");
                  } else {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      // navigation.navigate("Login");
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
                  Update{" "}
                </Text>
                {loading && <ActivityIndicator color={COLORS.White} />}
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </Animatable.View>
      </SafeAreaView>
    </>
  );
};
export default UpdatePassword;

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
