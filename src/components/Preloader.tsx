import React, { useContext } from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import { LoadingContext } from "../context/LoadingContext";

const Preloader: React.FC = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <Modal transparent={true} visible={isLoading} animationType="fade">
      <View style={styles.container}>
        <LottieView
          source={require("../../assets/lottie.json")} 
          loop
          autoPlay
          style={styles.lottie} 
        />
        <Text style={styles.loadingText}>Loading, please wait...</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA", 
  },
  lottie: {
    width: 600, 
    height: 600, 
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: "#00796B", 
  },
});

export default Preloader;
