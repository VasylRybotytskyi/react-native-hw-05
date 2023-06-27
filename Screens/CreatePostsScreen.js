import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { EvilIcons, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as DocumentPicker from "expo-document-picker";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const [postImg, setPostImg] = useState("");
  const [postName, setPostName] = useState("");
  const [postAddress, setPostAddress] = useState("");
  const [postLocation, setPostLocation] = useState(null);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [currentFocused, setCurrentFocused] = useState("");

  useEffect(() => {
    setPostImg("");
    setPostLocation(null);

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  const addImageLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const [address] = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setPostAddress(address.city);
    setPostLocation(coords);
  };

  const clearForm = () => {
    setPostImg("");
    setPostName("");
    setPostAddress("");
    setPostLocation(null);
  };

  const onSubmitPost = () => {
    if (!postImg || !postName.trim() || !postLocation)
      return console.warn("Будь ласка завантажте фото та заповніть поля");

    console.log({ postImg, postName, postAddress, postLocation });

    handleKeyboardHide();
    navigation.navigate("DefaultPosts", {
      postImg,
      postName: postName.trim(),
      postAddress: postAddress.trim(),
      postLocation,
    });
    clearForm();
  };

  const onLoadPostImg = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setPostImg(uri);
      } catch (error) {
        console.log("Error > ", error.message);
      }
    }

    // if (!cameraRef && postImg) {
    //   try {
    //     const avatarImg = await DocumentPicker.getDocumentAsync({
    //       type: 'image/*',
    //     });

    //     if (avatarImg.type === 'cancel') return setPostImg('');

    //     setPostImg(avatarImg);
    //   } catch (error) {
    //     console.log('Error > ', error.message);
    //   }
    // }
    addImageLocation();
  };

  const handleFocus = (currentFocusInput = "") => {
    setIsShowKeyboard(true);
    setCurrentFocused(currentFocusInput);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    setCurrentFocused("");
    Keyboard.dismiss();
  };

  const handleGoBack = () => {
    clearForm();
    navigation.goBack();
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text> No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View
        style={{
          ...styles.container,
          justifyContent: isShowKeyboard ? "center" : "flex-start",
        }}
      >
        <View style={styles.content}>
          <View style={styles.contentImage}>
            {postImg ? (
              <>
                <Image style={styles.bgImage} source={{ uri: postImg }} />
                <TouchableOpacity
                  style={{
                    ...styles.loadBtn,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  onPress={onLoadPostImg}
                >
                  {/* <SvgLoadPost style={styles.loadBtnContent} fillColor={'#ffffff'} /> */}
                </TouchableOpacity>
              </>
            ) : (
              isFocused && (
                <Camera
                  style={styles.camera}
                  ratio="1:1"
                  zoom={0}
                  type={Camera.Constants.Type.back}
                  ref={setCameraRef}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: 100,
                    }}
                    onPress={onLoadPostImg}
                  >
                    <Entypo
                      style={styles.contentImageCamera}
                      name="camera"
                      size={24}
                      color="rgba(189, 189, 189, 1)"
                    />
                    {/* <SvgLoadPost
                      style={styles.loadBtnContent}
                      fillColor={postImg ? "#ffffff" : "#bdbdbd"}
                    /> */}
                  </TouchableOpacity>
                </Camera>
              )
            )}
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.inputName}
              placeholder="Назва..."
              value={postName}
              onChangeText={setPostName}
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              value={postAddress}
              onChangeText={setPostAddress}
            />
            <Feather
              style={styles.iconMap}
              name="map-pin"
              size={18}
              color="rgba(232, 232, 232, 1)"
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={onSubmitPost}
            >
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
    </TouchableWithoutFeedback>
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
  loadBtn: {
    alignItems: "center",
    alignContent: "center",

    width: 60,
    height: 60,

    padding: 18,

    color: "#bdbdbd",
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  camera: {
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "100%",
  },
});
