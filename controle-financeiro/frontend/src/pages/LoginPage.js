import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import InputLogin from '../components/Input/styles';
import ButtonSubmit from '../components/ButtonSubmit/styles';
import Button from '../components/Button/styles';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const onSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await api.post('/login', { email, senha });
      if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/wallets');
      }
    } catch (err) {
      setError('Dados inválidos');
    }
  };

  const disableSubmit = () => {
    if (typeof email === 'string' && typeof senha === 'string') {
      setDisabled(false);
      setError('');
    } else {
      setDisabled(true);
      setError('Dados inválidos');
    }
  };

  return (
    <section className="containerLogin">
      <form className="formLogin" onSubmit={onSubmit}>
        <section className="sectionEmail">
          <InputLogin
            placeholder="email"
            name="email"
            type="text"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
            onKeyUp={disableSubmit}
            value={email}
          ></InputLogin>
        </section>
        <section className="sectionSenha">
          <InputLogin
            placeholder="senha"
            name="senha"
            type="text"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            onKeyUp={disableSubmit}
            value={senha}
          ></InputLogin>
        </section>
        <section>
          <ButtonSubmit
            type="submit"
            content="Enviar"
            disabled={disabled}
          ></ButtonSubmit>
        </section>
        <section>
          <Button
            type="button"
            content="Não tenho conta"
            onClick={() => navigate('/register')}
          ></Button>
        </section>
        <section>{error && <p className="erroDeDados">{error}</p>}</section>
      </form>
    </section>
  );
}
