import { useState } from "react";
import Modal from 'react-modal';
import { Deshboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTranscationModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Deshboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onCloseNewTransactionModal={handleCloseNewTranscationModal}
      />

      <GlobalStyle />
    </>
  );
}