import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Grid from '../Grid';
import * as C from './styles';

const FormEdit = ({ handleEdit, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [isExpense, setExpense] = useState(''); // input

  const navigate = useNavigate();

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!');
      return;
    } else if (amount < 1) {
      alert('O valor precisa ser positivo!');
      return;
    }

    const transaction = {
      descricao: desc,
      valor: amount,
      tipo: isExpense,
    };

    handleEdit(transaction);

    setDesc('');
    setAmount('');
    setExpense('');
  };

  return (
    <>
      <C.Container>
        <C.InputContainer>
          <C.Input
            placeholder="descrição"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </C.InputContainer>
        <C.InputContainer>
          <C.Input
            placeholder="valor"
            value={amount}
            type="number"
            onChange={e => setAmount(e.target.value)}
          />
        </C.InputContainer>
        <C.InputContainer>
          <C.Input
            placeholder="entrada ou saída"
            value={isExpense}
            type="text"
            onChange={e => setExpense(e.target.value)}
          />
        </C.InputContainer>
        <C.Button onClick={handleSave}>Editar</C.Button>
        <C.Button onClick={() => navigate('/wallets')}>Voltar</C.Button>
      </C.Container>
    </>
  );
};

export default FormEdit;
