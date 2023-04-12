import React from 'react';
import * as C from './styles';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
  const saida = 'saída';
  const entrada = 'entrada';

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
    </C.Tr>
  );
};

export default GridItem;
