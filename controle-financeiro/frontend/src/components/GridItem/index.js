import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

import { AiOutlineEdit } from 'react-icons/ai';

const GridItem = ({ item, onDelete, openModal }) => {
  const saida = 'saída';
  const entrada = 'entrada';

  const navigate = useNavigate();

  return (
    <C.Tr>
      <C.Td>{item.descricao}</C.Td>
      <C.Td>{item.valor}</C.Td>
      <C.Td alignCenter>
        {item.tipo === saida && <FaRegArrowAltCircleDown color="red" />}
        {item.tipo === entrada && <FaRegArrowAltCircleUp color="green" />}
      </C.Td>
      <C.Td>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
      <C.Td>
        <AiOutlineEdit onClick={() => navigate('/edit')} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
