// import React from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";

// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// import { PostsScreen } from "./PostsScreen";
// import { useNavigation } from "@react-navigation/native";

// const Tabs = createBottomTabNavigator();

// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <Tabs.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: { paddingTop: 9, paddingBottom: 34, height: 83 }, // Змінюємо висоту на 83
//       }}
//     >
//       <Tabs.Screen
//         name="Posts"
//         component={PostsScreen}
//         options={{
//           title: "Публікації",
//           headerTitleAlign: "center",
//           headerTitleStyle: styles.headerTitle,
//           headerRight: () => (
//             <TouchableOpacity>
//               <MaterialIcons name="logout" size={24} color="#BDBDBD" />
//             </TouchableOpacity>
//           ),
//           headerStyle: styles.header, // Додаємо стиль header
//           headerLeftContainerStyle: styles.headerLeft,
//           headerRightContainerStyle: styles.headerRight,
//           tabBarIcon: ({ focused, size, color }) => {
//             return (
//               <Feather
//                 name="grid"
//                 size={size}
//                 color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
//               />
//             );
//           },
//         }}
//       />
//       <Tabs.Screen
//         name="CreatePost"
//         component={CreatePostsScreen}
//         options={{
//           unmountOnBlur: true,
//           tabBarStyle: { display: "none" },
//           title: "Створити публікацію",
//           headerTitleAlign: "center",
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
//               <AntDesign
//                 name="arrowleft"
//                 size={24}
//                 color="rgba(33, 33, 33, 0.8)"
//               />
//             </TouchableOpacity>
//           ),
//           headerStyle: styles.header, // Додаємо стиль header
//           headerLeftContainerStyle: styles.headerLeft,
//           headerRightContainerStyle: styles.headerRight,
//           tabBarIcon: ({ focused, size, color }) => {
//             return (
//               <View style={styles.ovalIcon}>
//                 <Feather name="plus" size={20} color={"#FFFFFF"} />
//               </View>
//             );
//           },
//         }}
//       />
//       <Tabs.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, size, color }) => {
//             return (
//               <Feather
//                 name="user"
//                 size={size}
//                 color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
//               />
//             );
//           },
//         }}
//       />
//     </Tabs.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   ovalIcon: {
//     width: 70,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#FF6C00",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   headerTitle: {
//     fontSize: 17,
//     lineHeight: 22,
//     color: "#212121",
//   },
//   headerRight: {
//     paddingRight: 16,
//   },
//   headerLeft: {
//     paddingLeft: 16,
//   },
//   header: {
//     borderBottomWidth: 1,
//     borderBottomColor: "rgba(189, 189, 189, 1)",
//   },
// });

// export default Home;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet } from "react-native";

import PostScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import SvgArrowLeft from "../assets/svg/SvgArrowLeft";
import SvgLogOut from "../assets/svg/SvgLogOut";

import SvgGrid from "../assets/svg/SvgGrid";
import SvgPlus from "../assets/svg/SvgPlus";
import SvgUser from "../assets/svg/SvgUser";
import SvgTrash from "../assets/svg/SvgTrash";

const ButtomTabs = createBottomTabNavigator();

const Home = () => {
  return (
    <ButtomTabs.Navigator
      id="home"
      screenOptions={{
        tabBarStyle: {
          height: 64,
          paddingTop: 10,
          paddingBottom: 20,

          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ff6c00",
        tabBarInactiveTintColor: "#212121",
      }}
    >
      <ButtomTabs.Screen
        name="Posts"
        component={PostScreen}
        options={({ navigation }) => ({
          ...postsOptions,
          headerRight: () => (
            <SvgLogOut
              onPress={() => navigation.navigate("Login")}
              title="Return back"
              color="#fff"
              style={styles.logOut}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} style={styles.btnTab} />
          ),
          tabBarIcon: ({ selected, color }) => {
            return <SvgGrid stroke={color} />;
          },
        })}
      />
      <ButtomTabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          ...createPostsOptions,
          headerLeft: () => (
            <SvgArrowLeft
              onPress={() => {
                navigation.goBack();
              }}
              title="Return back"
              color="#fff"
              style={styles.arrowLeft}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                ...styles.btnTab,
                backgroundColor: props.accessibilityState.selected
                  ? "#f6f6f6"
                  : "#ff6c00",
                width: props.accessibilityState.selected ? 70 : 40,
              }}
            />
          ),
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <SvgTrash stroke={"#dbdbdb"} />
            ) : (
              <SvgPlus fill={"#ffffff"} />
            );
          },
        })}
      />
      <ButtomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          ...createPostsOptions,
          headerShown: false,
          headerLeft: () => (
            <SvgArrowLeft
              onPress={() => navigation.navigate("Posts")}
              title="Return back"
              color="#fff"
              style={styles.arrowLeft}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                ...styles.btnTab,
                marginRight: 0,
              }}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => {
            return <SvgUser size={size} fill={color} />;
          },
        })}
      />
    </ButtomTabs.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  arrowLeft: {
    marginLeft: 16,
    marginRight: 42,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logOut: {
    width: 24,
    height: 24,
    marginRight: 60,
    marginRight: 16,
    // paddingHorizontal: 16,
    paddingVertical: 10,
  },
  btnTab: {
    alignSelf: "center",
    marginRight: 30,
    width: 40,
    height: 40,

    paddingVertical: 8,
    paddingHorizontal: 8,

    backgroundColor: "#ffffff",
    borderRadius: 20,
  },
  // btnActiveTab: {
  //   alignSelf: 'center',
  //   marginRight: 30,

  //   width: 70,
  //   height: 40,

  //   paddingVertical: 8,
  //   paddingHorizontal: 23,

  //   backgroundColor: '#ff6c00',
  //   borderRadius: 20,
  // },
});

const createPostsOptions = {
  title: "Створити публікацію",
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.3)",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,

    textAlign: "center",
  },
};

const postsOptions = {
  title: "Публікації",
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.3)",
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    // fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 22,

    marginLeft: 120,

    textAlign: "center",
  },
};
