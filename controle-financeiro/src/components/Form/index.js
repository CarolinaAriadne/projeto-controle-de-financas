import React, { useState } from 'react';
import * as C from './styles';

const Form = () => {
  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [isExpense, setExpense] = useState(false); // check

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
    </C.Container>
  );
};

export default Form;
