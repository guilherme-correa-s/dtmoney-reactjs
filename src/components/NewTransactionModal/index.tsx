import Modal from 'react-modal'

interface NewTransactionModalProp {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isOpen, onCloseNewTransactionModal }: NewTransactionModalProp) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseNewTransactionModal}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    )
}