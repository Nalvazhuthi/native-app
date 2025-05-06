import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hellow </Text>
      <Text style={styles.content}>I am Nannii... </Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 32,
  },
  content: {
    padding: 10,
  },
});
