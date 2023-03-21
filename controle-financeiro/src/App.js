import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';
import GlobalStyle from './styles/global';

const App = () => {
  return(
      <>
    <Header />
        <Resume />
        <Form />
    <GlobalStyle />
    </>
  );
  
};

export default App;
