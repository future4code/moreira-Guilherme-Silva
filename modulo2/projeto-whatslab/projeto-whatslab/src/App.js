import './App.css';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { CamposContainer } from './components/CamposContainer/CamposContainer';
import { MensagemContainer } from './components/MensagemContainer/MensagemContainer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: bisque;
    border: 2px solid black;
    height: 100vh;
    width: 40%;
    margin: 0 auto;
`

function App() {
  return (
    <MainContainer>
      <GlobalStyle/>
      <MensagemContainer />
      <CamposContainer />

    </MainContainer>
  );
}

export default App;
