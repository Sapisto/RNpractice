import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../Navigation/StackNavigator";

type SidePanelProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

const SidePanel: React.FC<SidePanelProps> = ({ isVisible, toggleVisibility }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const handleNavigation = (screen: keyof StackParamList) => {
    toggleVisibility();
    navigation.navigate(screen);
  };

  if (!isVisible) return null;

  return (
    <View style={styles.panelContainer}>
      {/* Close Icon */}
      <TouchableOpacity onPress={toggleVisibility} style={styles.closeIcon}>
        <Icon name="close" size={50} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation("Marketplace")}>
        <View style={styles.menuItem}>
          <Icon name="store" size={28} color="#000" />
          <Text style={styles.menuText}>Marketplace</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation("Timeline")}>
        <View style={styles.menuItem}>
          <Icon name="timeline" size={28} color="#000" />
          <Text style={styles.menuText}>Timeline</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation("Settings")}>
        <View style={styles.menuItem}>
          <Icon name="settings" size={28} color="#000" />
          <Text style={styles.menuText}>Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation("Profile")}>
        <View style={styles.menuItem}>
          <Icon name="person" size={28} color="#000" />
          <Text style={styles.menuText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    width: 220,
    backgroundColor: "#FFF",
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
    // Optional: Change the background color temporarily for debugging
    // backgroundColor: "#f0f0f0", 
  },
  closeIcon: {
    alignItems: "flex-end", 
    marginBottom: 10, 
    // marginTop: 20,              
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SidePanel;
