import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/photoBg.png")}
          style={styles.imageBackground}
        >
          <View style={styles.contentContainer}>
            <View style={styles.image}>
              <AntDesign style={styles.add} name="pluscircleo" size={25} />
            </View>
            <Text style={styles.title}>Name</Text>
            <Ionicons
              style={styles.logout}
              name="exit-outline"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
            <View>
              <Text>View</Text>
            </View>
          </View>
          {/* <View style={styles.iconsContainer}>
            <View style={styles.tool}>
              <Feather name="grid" size={24} color="black" />
            </View>
            <View style={styles.buttonAdd}>
              <Feather name="user" size={24} color="white" />
            </View>
            <View style={styles.user}>
              <Ionicons name="ios-add-outline" size={24} color="black" />
            </View>
          </View> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  contentContainer: {
    display: "flex",
    gap: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 92,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: windowWidth,
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  image: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  add: {
    position: "absolute",
    bottom: 20,
    right: -12,
    color: "rgba(255, 108, 0, 1)",
  },
  logout: {
    position: "absolute",
    right: 16,
    top: 15,
  },
  // iconsContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 93,
  //   paddingBottom: 42,
  //   paddingTop: 9,
  //   borderTopWidth: 1,
  //   backgroundColor: "#FFFFFF",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   width: windowWidth,
  // },
  // buttonAdd: {
  //   color: "#FFFFFF",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FF6C00",
  //   borderRadius: 20,
  //   width: 70,
  //   height: 40,
  // },
  // tool: {
  //   height: 40,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // user: {
  //   height: 40,
  //   alignItems: "center",
  //   justifyContent: "center",
});
