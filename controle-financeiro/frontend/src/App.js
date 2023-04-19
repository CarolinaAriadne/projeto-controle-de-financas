import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletsPage from './pages/WalletsPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import RegisterPage from './pages/Register';
import { EditWalletPage } from './pages/EditWalletPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/login"
          element={
            <MainContainer>
              <InputContainer>
                <LoginPage />
              </InputContainer>
            </MainContainer>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <MainContainer>
              <InputContainer>
                <RegisterPage />
              </InputContainer>
            </MainContainer>
          }
        />
        <Route exact path="/wallets" element={<WalletsPage />} />
        <Route path="/edit/:itemId" element={<EditWalletPage />} />
      </Routes>
    </Router>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  margin-left: 35%;
  margin-top: 5%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(143, 188, 143, 1);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export default App;
