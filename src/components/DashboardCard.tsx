import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface CardProps {
  iconName: string;
  number: number;
  text: string;
  iconColor?: string;
}

const Card: React.FC<CardProps> = ({
  iconName,
  number,
  text,
  iconColor = "#000",
}) => {
  return (
    <View style={styles.card}>
      <Icon name={iconName} size={40} color={iconColor} style={styles.icon} />
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    borderColor: "gray",
    borderWidth: 1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
  },
  icon: {
    marginBottom: 15,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});

export default Card;
