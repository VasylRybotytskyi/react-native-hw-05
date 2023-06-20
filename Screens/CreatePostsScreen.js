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
const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Entypo
            style={styles.contentImageCamera}
            name="camera"
            size={24}
            color="rgba(189, 189, 189, 1)"
          />
        </View>
        <Text style={styles.text}>Завантажте фото</Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.inputName} placeholder="Назва..." />
          <TextInput style={styles.input} placeholder="Місцевість..." />
          <Feather
            style={styles.iconMap}
            name="map-pin"
            size={18}
            color="rgba(232, 232, 232, 1)"
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
            <Text style={styles.button}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.buttonAdd}>
          <EvilIcons name="trash" size={24} color="rgba(189, 189, 189, 1)" />
        </View>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF", // Задній фон білий
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 32,
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
  contentImageCamera: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    // backgroundColor: "#F6F6F6",
  },
  button: {
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    borderRadius: 100,
    paddingVertical: 16,
    textAlign: "center",
  },
  formContainer: {
    gap: 32,
  },
  input: {
    position: "relative",
    borderBottomWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    paddingVertical: 15,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 32,
  },
  inputName: {
    borderBottomWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    paddingVertical: 15,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 48,
  },
  iconMap: {
    position: "absolute",
    top: 110,
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
});
