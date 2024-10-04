import React, { createContext, useState, ReactNode } from 'react';

interface ModalContextType  {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};
