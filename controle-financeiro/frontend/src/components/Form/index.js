import React, { useState } from 'react';
import Grid from '../Grid';
import * as C from './styles';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [isExpense, setExpense] = useState(''); // input

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

    handleAdd(transaction);

    setDesc('');
    setAmount('');
    setExpense('');
  };

  return (
    <>
      <C.Container>
        <C.InputContainer>
          {/* <C.Label>Descrição</C.Label> */}
          <C.Input
            placeholder="descrição"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </C.InputContainer>
        <C.InputContainer>
          {/* <C.Label>Valor</C.Label> */}
          <C.Input
            placeholder="valor"
            value={amount}
            type="number"
            onChange={e => setAmount(e.target.value)}
          />
        </C.InputContainer>
        <C.InputContainer>
          {/* <C.Label>Entrada ou Saída</C.Label> */}
          <C.Input
            placeholder="entrada ou saída"
            value={isExpense}
            type="text"
            onChange={e => setExpense(e.target.value)}
          />
        </C.InputContainer>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
