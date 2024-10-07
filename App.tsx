import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/Navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import { ModalProvider } from "./src/context/ModalContext";
import GlobalModal from "./src/components/Modal";
import { LoadingProvider } from "./src/context/LoadingContext";
// import Preloader from "./src/components/Preloader";

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <ModalProvider>
        <NavigationContainer>
          <StackNavigator />
          <GlobalModal />
          {/* <Preloader/> */}
          <StatusBar style="auto" />
        </NavigationContainer>
      </ModalProvider>
    </LoadingProvider>
  );
};

export default App;
