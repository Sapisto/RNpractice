import React, { useContext } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { ModalContext } from '../context/ModalContext';
import Button from './Button';

interface GlobalModalProps {
  modalText?: string; 
  children?: React.ReactNode; 
}

const GlobalModal: React.FC<GlobalModalProps> = ({ modalText, children }) => {
  const { isModalVisible, hideModal } = useContext(ModalContext);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={hideModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {modalText && <Text style={styles.modalText}>{modalText}</Text>}
          {children}
          <Button title="Close" onPress={hideModal} style={styles.closeButton} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    width: '80%',
    minHeight: 200, 
    maxHeight: '80%', 
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    marginBottom: 15,
    textAlign: 'center', 
  },
  closeButton: {
    marginTop: 15, 
  },
});

export default GlobalModal;
