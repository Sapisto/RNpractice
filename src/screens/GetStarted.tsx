import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../Navigation/StackNavigator";
import Button from "../components/Button";
import GlobalModal from "../components/Modal";
import { ModalContext } from "../context/ModalContext";
import { LoadingContext } from "../context/LoadingContext";
import Icon from "react-native-vector-icons/FontAwesome";

type GetStartedProps = {
  navigation: NativeStackNavigationProp<StackParamList, "GetStarted">;
};

const GetStarted: React.FC<GetStartedProps> = ({ navigation }) => {
  const { showModal } = useContext(ModalContext);
  const { showLoading, hideLoading } = useContext(LoadingContext)!;

  const handleGetStarted = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      navigation.navigate("Register");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/getStarted.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to my Demo App!</Text>
      <Text style={styles.placeholderText}>
        This is a demo app that showcases the features and functionalities of
        our platform. Explore, learn, and get started with the journey ahead!
      </Text>
      <Button title="Get started" onPress={handleGetStarted} />
      <Button title="Show Modal" onPress={showModal} />
      <GlobalModal modalText="Success!!">
        <Icon
          name="check-circle"
          size={70}
          color="#28a745"
          style={styles.icon}
        />
        <Text style={styles.modalContent}>
          Please make sure to check out all the features of this app as you will
          enjoy alot of goodies!!
        </Text>
      </GlobalModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  image: {
    width: "90%",
    height: 300,
    borderRadius: 20,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "700",
  },
  placeholderText: {
    fontSize: 15,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalContent: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  icon: {
    marginVertical: 10,
  },
});

export default GetStarted;
