import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
const RootLayout = () => {
  const theme = useColorScheme();
  const variable = Colors[theme] ?? Colors.light;
  return (
    <>
      {/* value auto auto adjust to theme */}
      <StatusBar value="auto" />
      
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: variable.backgroundColor }, // background
          headerTintColor: variable.color, //font color
        }}
      >
        {/* index = router <----> Home = heaader name*/}
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
