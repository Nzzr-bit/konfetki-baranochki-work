"use client";
import { createContext, useState, ReactNode, FC, useContext } from "react";

interface ModalContextType {
  currentModal: string | null;
  showModal: (modalName: string) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const showModal = (modalName: string) => setCurrentModal(modalName);
  const hideModal = () => setCurrentModal(null);

  return (
    <ModalContext.Provider value={{ currentModal, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("Ошибка");
  }
  return context;
};
