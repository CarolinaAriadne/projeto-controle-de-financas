import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Resume from "../components/Resume";
import GlobalStyle from "../styles/globalWallets";
import api from "../services/api";

const Wallets = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0); // entrada
  const [expense, setExpense] = useState(0); // saída
  const [total, setTotal] = useState(0); // total

  useEffect(() => {
    allWallets();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.tipo === "saída")
      .map((transaction) => Number(transaction.valor));

    const amountIncome = transactionsList
      .filter((item) => item.tipo === "entrada") // pega entradas diferentes das saídas (que são as entradas)
      .map((transaction) => Number(transaction.valor));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const allWallets = async () => {
    try {
      const dados = await api.get("/wallets");
      setTransactionsList(dados.data);
    } catch (err) {
      alert("Bad Request!");
    }
  };

  const handleAdd = async (transaction) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const { data } = await api.post("/wallet", transaction, {
        headers: { Authorization: user.token },
      });
      console.log(data, "data");

      if (data) {
        const newArrayTransactions = [...transactionsList, data];
        console.log(newArrayTransactions, "newtransactions");
        setTransactionsList(newArrayTransactions);
        localStorage.setItem(
          "transactions",
          JSON.stringify(newArrayTransactions)
        );
        alert("Entrada ou saída criada com sucesso");
      }
    } catch (err) {
      alert("Bad Request!");
    }
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default Wallets;
