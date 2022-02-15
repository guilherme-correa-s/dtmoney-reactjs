import { useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './style'

interface NewTransactionModalProp {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isOpen, onCloseNewTransactionModal }: NewTransactionModalProp) {
    const [type, setType] = useState('deposit');
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onCloseNewTransactionModal}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" />

                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <button type="button" onClick={() => setType('deposit')}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button" onClick={() => setType('withdraw')}>
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}