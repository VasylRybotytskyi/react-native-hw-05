import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons, AntDesign } from "@expo/vector-icons";

import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { PostsScreen } from "./PostsScreen";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { paddingTop: 9, paddingBottom: 34, height: 83 }, // Змінюємо висоту на 83
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => (
            <TouchableOpacity>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerStyle: styles.header, // Додаємо стиль header
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather
                name="grid"
                size={size}
                color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          unmountOnBlur: true,
          tabBarStyle: { display: "none" },
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          headerStyle: styles.header, // Додаємо стиль header
          headerLeftContainerStyle: styles.headerLeft,
          headerRightContainerStyle: styles.headerRight,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.ovalIcon}>
                <Feather name="plus" size={20} color={"#FFFFFF"} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Feather
                name="user"
                size={size}
                color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  ovalIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
  headerRight: {
    paddingRight: 16,
  },
  headerLeft: {
    paddingLeft: 16,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(189, 189, 189, 1)",
  },
});

export default Home;
