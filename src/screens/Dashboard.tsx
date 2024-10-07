import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import SidePanel from "../components/SidePane";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../Navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LoadingContext } from "../context/LoadingContext";
import Icon from "react-native-vector-icons/MaterialIcons";
import Card from "../components/DashboardCard";
import PinModal from "../components/PinModal";

type DashboardScreenProp = NativeStackNavigationProp<
  StackParamList,
  "Dashboard"
>;

const Dashboard: React.FC = () => {
  const navigation = useNavigation<DashboardScreenProp>();
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [isSidePanelVisible, setSidePanelVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      navigation.navigate("Login");
    }, 2000);
  };

  const toggleSidePanel = () => {
    setSidePanelVisible(!isSidePanelVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleIcon = () => {
    showLoading(); // Show loading indicator
    setTimeout(() => {
      hideLoading(); // Hide loading after 2 seconds
      setModalVisible(false); // Close the modal
      navigation.navigate("GetStarted"); // Navigate to Login
    }, 2000);
  };

  const cardData = [
    { iconName: "users", number: 150, text: "Users", iconColor: "#4285F4" },
    {
      iconName: "shopping-cart",
      number: 230,
      text: "Orders",
      iconColor: "#34A853",
    },
    { iconName: "dollar", number: 5400, text: "Revenue", iconColor: "#EA4335" },
    {
      iconName: "bar-chart",
      number: 4300,
      text: "Sales",
      iconColor: "#FFC107",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SidePanel
        isVisible={isSidePanelVisible}
        toggleVisibility={toggleSidePanel}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={toggleSidePanel}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Welcome to your dashboard!</Text>

      <View style={styles.cardContainer}>
        {cardData &&
          cardData.map((card, index) => (
            <Card
              key={index}
              iconName={card.iconName}
              number={card.number}
              text={card.text}
              iconColor={card.iconColor}
            />
          ))}
      </View>

      {/* Create PIN Button */}
      <View style={styles.contentContainer}>
        <Button title="Create PIN" onPress={toggleModal} />
        <Button title="Logout" onPress={handleLogout} />
      </View>

      {/* PinModal Component */}
      {isModalVisible && (
        <PinModal
          isVisible={isModalVisible}
          onClose={() => toggleModal()}
          onPress={toggleIcon}
        />
      )}
      {/* <PinModal isVisible={isModalVisible} onClose={toggleModal} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    padding: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    marginTop: 100,
    color: "#333",
  },
});

export default Dashboard;
