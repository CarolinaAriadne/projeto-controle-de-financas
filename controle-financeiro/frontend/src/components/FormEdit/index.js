import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from '../Select/styles';
import api from '../../services/api';
import * as C from './styles';

const FormEdit = () => {
  const options = [
    { value: '', text: '--Escolha uma opção--' },
    { value: 'entrada', text: 'entrada' },
    { value: 'saída', text: 'saída' },
  ];

  const [desc, setDesc] = useState(''); // descrição
  const [amount, setAmount] = useState(''); // valor
  const [id, setId] = useState(0);
  const [selected, setSelected] = useState(options[0].value);

  const navigate = useNavigate();

  const paramsId = useParams();

  useEffect(() => {
    setId(paramsId.itemId);
    getOneWallet(paramsId);
  }, []);

  const updateWallet = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const transaction = {
      id: id,
      descricao: desc,
      valor: amount,
      tipo: selected,
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
    } catch (err) {
      alert('bad request');
    }
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
        <C.Button onClick={() => updateWallet()}>Editar</C.Button>
        <C.Button onClick={() => navigate('/wallets')}>Voltar</C.Button>
      </C.Container>
    </>
  );
};

export default FormEdit;
