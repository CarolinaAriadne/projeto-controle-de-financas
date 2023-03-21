import React, { useState } from 'react';
import * as C from './styles';

const Form = () => {
  const [desc, serDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [isExpense, setExpense] = useState(false); // cheque

  return <div>Form</div>;
};

export default Form;
