import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface PinModalProps {
  isVisible: boolean;
  onClose: () => void;
  onPress: () => void; 
}

const PinModal: React.FC<PinModalProps> = ({ isVisible, onClose, onPress }) => {
  const [pin, setPin] = useState("");
  const navigation = useNavigation();

  const handlePress = (digit: string) => {
    if (pin.length < 4) {
      setPin((prevPin) => prevPin + digit);
    }
  };

  const handleClear = () => {
    setPin((prevPin) => prevPin.slice(0, -1)); // Remove the last character
  };

  const handleBack = () => {
    navigation.navigate("GetStarted" as never);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter your 4-digit PIN</Text>

          {/* Display the masked PIN with an icon on the right */}
          <View style={styles.pinDisplayContainer}>
            <Text style={styles.pinDisplay}>{pin.replace(/./g, "●")}</Text>
            <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
              <Icon name="skip-next" size={70} color="#20C997" />
            </TouchableOpacity>
          </View>

          {/* Numeric buttons arranged in rows of 3 */}
          <View style={styles.numberPad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.numberButton}
                onPress={() => handlePress(num.toString())}
              >
                <Text style={styles.numberText}>{num}</Text>
              </TouchableOpacity>
            ))}

            {/* Last row: Back, 0, Clear */}
            <View style={styles.lastRow}>
              <TouchableOpacity
                style={styles.specialButton}
                onPress={handleBack}
              >
                <Text style={styles.numberText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handlePress("0")}
              >
                <Text style={styles.numberText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.specialButton}
                onPress={handleClear} // Change to call handleClear
              >
                <Text style={styles.numberText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    width: "100%",
    paddingBottom: 40,
  },
  modalTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pinDisplayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  pinDisplay: {
    fontSize: 22,
    letterSpacing: 10,
    flex: 1,
    marginLeft: 70,
    textAlign: "center",
  },
  iconContainer: {
    paddingLeft: 20,
    alignSelf: "flex-end",
  },
  numberPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  numberButton: {
    width: "30%",
    margin: 5,
    paddingVertical: 15,
    backgroundColor: "#ddd",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 24,
  },
  lastRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  specialButton: {
    width: "30%",
    margin: 5,
    paddingVertical: 15,
    backgroundColor: "#ddd",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PinModal;
