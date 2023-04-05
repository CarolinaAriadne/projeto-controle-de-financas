import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import InputLogin from "../components/Input/styles";
import ButtonSubmit from "../components/ButtonSubmit/styles";
import Button from "../components/Button/styles";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [disabled, setDisabled] = useState("");

  const navigate = useNavigate();

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await api.post("/register", { nome, email, senha });
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      alert("Cadastrado realizado com sucesso!");
    } catch (err) {
      setError("Dados inválidos");
    }
  };

  const disabledSubmit = () => {
    if (
      typeof nome === "string" &&
      typeof email === "string" &&
      typeof senha === "string"
    ) {
      setDisabled(false);
      setError("");
    } else {
      setDisabled(true);
      setError("Dados inválidos");
    }
  };
  return (
    <section className="containerRegister">
      <form className="formRegister" onSubmit={handlerSubmit}>
        <section className="sectionNome">
          <InputLogin
            placeholder="nome"
            name="nome"
            type="text"
            onChange={({ target }) => {
              setNome(target.value);
            }}
            onKeyUp={disabledSubmit}
            value={nome}
          ></InputLogin>
        </section>
        <section className="sectionEmail">
          <InputLogin
            placeholder="email"
            name="email"
            type="text"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            onKeyUp={disabledSubmit}
            value={email}
          ></InputLogin>
        </section>
        <section className="sectionSenha">
          <InputLogin
            placeholder="senha"
            name="senha"
            type="text"
            onChange={({ target }) => {
              setSenha(target.value);
            }}
            onKeyUp={disabledSubmit}
            value={senha}
          ></InputLogin>
        </section>
        <section>
          <ButtonSubmit
            type="submit"
            content="Cadastrar"
            disabled={disabled}
          ></ButtonSubmit>
        </section>
        <section>
          <Button
            type="button"
            content="login"
            onClick={() => navigate("/login")}
          ></Button>
        </section>
        <section>{error && <p className="erroDeDados">{error}</p>}</section>
      </form>
    </section>
  );
}
