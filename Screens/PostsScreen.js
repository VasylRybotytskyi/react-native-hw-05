import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану

export const PostsScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  logout: {
    position: "absolute",
    right: 10,
    bottom: 12,
  },
});
