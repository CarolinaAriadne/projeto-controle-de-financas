import React, { useState } from 'react';
import Grid from '../Grid';
import Select from '../Select/styles';
import * as C from './styles';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const options = [
    { value: '', text: '--Escolha uma opção--' },
    { value: 'entrada', text: 'entrada' },
    { value: 'saída', text: 'saída' },
  ];

  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [selected, setSelected] = useState(options[0].value);

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
      tipo: selected,
    };

    handleAdd(transaction);

    setDesc('');
    setAmount('');
    setSelected('');
  };

  const handleChange = event => {
    setSelected(event.target.value);
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
        <Select value={selected} onChange={handleChange}>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </Select>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
