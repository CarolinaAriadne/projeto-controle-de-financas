import React, { useState } from 'react';
import * as C from './styles';

const Form = ({ handleAdd }) => {
  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [isExpense, setExpense] = useState(false); // check

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!');
      return;
    } else if (amount < 1) {
      alert('O valor precisa ser positivo!');
      return;
    }

    const transaction = {
      id: generateId,
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc('');
    setAmount('');
  };

  return (
    <C.Container>
      <C.InputContainer>
        <C.Label>Descrição</C.Label>
        <C.Input value={desc} onChange={e => setDesc(e.target.value)} />
      </C.InputContainer>
      <C.InputContainer>
        <C.Label>Valor</C.Label>
        <C.Input
          value={amount}
          type="number"
          onChange={e => setAmount(e.target.value)}
        />
      </C.InputContainer>
      <C.RadioGroup>
        <C.Input
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <C.Label htmlFor="rIncome">Entrada</C.Label>
        <C.Input
          type="radio"
          id="rExpenses"
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <C.Label htmlFor="rExpenses">Saída</C.Label>
      </C.RadioGroup>
      <C.Button onClick={handleSave}>Adicionar</C.Button>
    </C.Container>
  );
};

export default Form;
