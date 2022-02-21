/* Bibliotecas */
import { useState } from "react";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
/* pages */
import Home from "./pages/Home/Home";
import Matchs from "./pages/Matchs/Matchs";
/* Requests */
import {limpar} from "./services/requests"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height:100vh;
    font-family: 'Roboto', sans-serif;
  }
`

const MainContainer = styled.div`
  height:100vh;
  background-color: #F2D7D0;
  padding: 20px;
`
const Button = styled.button`
  position: absolute;
  text-align: center;
  border-radius: 5px;
  background-color: lightblue;
  border:none;
  margin: 0 auto;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #D9326F;
  font-weight: bold;
  :hover{
    cursor: pointer;
    opacity: 0.9;
    transition-duration: 1s;
    transform: scale(1.1,1.1);
    color: #D9326F;
  }
`

function App() {

  const [TelaAtual,setTelaAtual] = useState("Home")

  const VerificarTela = () =>{
  switch (TelaAtual) {
    case "Home":
      return <Home irParaMatchs={irParaMatchs}/>
    case "Matchs":
      return <Matchs irParaHome={irParaHome} />
    default:
      return <Home />
  }
}

const irParaHome = () => {
  setTelaAtual("Home")
}

const irParaMatchs = () => {
  setTelaAtual("Matchs")
}

  return (
    <MainContainer>
      <GlobalStyle/>
      <Button onClick={limpar}>Limpar Matches</Button>
      {VerificarTela()}
    </MainContainer>
  );
}

export default App;
