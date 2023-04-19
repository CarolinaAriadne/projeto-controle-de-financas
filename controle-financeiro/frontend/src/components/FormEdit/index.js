import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import * as C from './styles';

const FormEdit = () => {
  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [isExpense, setExpense] = useState(''); // input
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const paramsId = useParams();

  useEffect(() => {
    setId(paramsId.itemId);
    getOneWallet(paramsId);
  }, []);

  const updateWallet = async ()  => {
    const user = JSON.parse(localStorage.getItem('user'));
    const transaction = {
      id: id,
      descricao: desc,
      valor: amount,
      tipo: isExpense
    };

    try {
      const { data } = await api.put(`/updatewallet/${id}`, transaction, {
        headers: { Authorization: user.token },
      });
      if (data) {
        alert('Atualizado com sucesso');
      }
    } catch (err) {
      alert('Bad request!');
    }
  };

  const getOneWallet = async itemId => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      let response = await api.get(`/wallet/${itemId.itemId}`, {
        headers: { Authorization: user.token },
      });
      setDesc(response.data.descricao);
      setAmount(response.data.valor);
      setExpense(response.data.tipo);
    } catch (err) {
      alert('bad request');
    }
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
          />
        </C.InputContainer>
        <C.Button onClick={() => updateWallet()}>Editar</C.Button>
        <C.Button onClick={() => navigate('/wallets')}>Voltar</C.Button>
      </C.Container>
    </>
  );
};

export default FormEdit;
