import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign, EvilIcons, Entypo, Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану
export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Коментарі</Text>
        <AntDesign
          style={styles.arrowLeft}
          name="arrowleft"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentImage}></View>
      </View>
      <View style={styles.coments}>
        <TextInput style={styles.comentsText} placeholder="коментувати..." />
        <TouchableOpacity style={styles.arrowup}>
          <AntDesign
            style={styles.arrowupIcon}
            name="arrowup"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomWidth: 1,
    width: windowWidth,
    borderColor: "rgba(232, 232, 232, 1)",
  },
  headerText: {
    color: "#212121",
    fontSize: 17,
    fontWeight: "500",
  },
  arrowLeft: {
    position: "absolute",
    left: 10,
    bottom: 12,
  },
  iconsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 93,
    paddingBottom: 42,
    paddingTop: 9,
  },
  buttonAdd: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  content: {
    paddingHorizontal: 16,
  },
  contentImage: {
    backgroundColor: "#F6F6F6",
    height: 240,
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  coments: {
    backgroundColor: " #F6F6F6",
    borderWidth: 1,
    borderRadius: 100,
  },
  comentsText: {
    position: "relative",
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    // fontFamily: 'Inter',

    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  arrowup: {
    backgroundColor: "#FF6C00",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 100,
    position: "absolute",
    right: 8,
    top: 8,
  },
  //   arrowupIcon: {
  // textAlign: "center",
  //   }
});
