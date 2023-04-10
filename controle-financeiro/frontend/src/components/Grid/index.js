import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";
import api from "../../services/api";

const Grid = ({ itens, setItens }) => {
  const onDelete = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await api.delete(`/deletew/${id}`, {
        headers: { Authorization: user.token },
      });

      const newArrayWithoutWallet = itens.filter((item) => {
        return item.id !== id;
      });

      setItens(newArrayWithoutWallet);
      alert("Entrada ou saída deletada com sucesso");
    } catch (err) {
      alert("Bad Request");
    }
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
