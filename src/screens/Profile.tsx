import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
