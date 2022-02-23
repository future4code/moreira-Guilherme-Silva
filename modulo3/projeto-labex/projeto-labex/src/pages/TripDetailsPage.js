import styled from 'styled-components'
import Button from '@mui/material/Button';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #F2E0C9;
    height: 100vh;
    width: 100wv;
    color: #025959;
`

const Header = styled.header`
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #025959;
    height: 120px;
    color: white;
    border-radius: 0 0 5px 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h1{
        margin-left: 40px;
    }

    p{
        font-size: 1.5rem;
    }
`

const ContainerBox = styled.main`
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    width: 80%;
    padding: 10px 20px;
    margin: 100px auto;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
`

const Container1 = styled.div`
    padding: 10px;
    width: 40%;
`
const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
`
const Informacoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    p{
        font-size: 1.3rem;
    }
`

const Container2 = styled.div`
    background-color: #F2E0C9;
    border-radius: 15px;
    padding: 10px;
    width: 40%;
`


const Footer = styled.footer`
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #025959;
    height: 120px;
    color: white;
    border-radius: 0 0 5px 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h1{
        margin-left: 40px;
    }

    p{
        font-size: 1.5rem;
    }
`


function TripDetails() {
    return (
      <MainContainer>
          <Header>
              <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
              <p>Encontre as melhores viagens espaciais!</p>
          </Header>
  
          <ContainerBox>
            
              <Container1>
                <Cabecalho>
                    <h1>Detalhes</h1>
                    <Button variant="contained" color="success"><span class="material-icons">done</span></Button>
                </Cabecalho>
                <Informacoes>
                    <p>Nome: xxxxxxxxxxxx</p>
                    <p>Planeta: xxxxxxxxxxxx</p>
                    <p>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p>Duração: xxxxxxxxxx</p>
                    <p>Data: xx/xx/xxxx</p>
                </Informacoes>
              </Container1>
              <Container2>
                <h3><u>Candidatos Pendentes</u></h3>
                <ul>
                    <li>Pessoa 1</li>
                    <li>Pessoa 2</li>
                    <li>Pessoa 3</li>
                    <li>Pessoa 4</li>
                </ul>
                <h3><u>Candidatos Aprovados</u></h3>
                <ul>
                    <li>Pessoa 1</li>
                    <li>Pessoa 2</li>
                    <li>Pessoa 3</li>
                    <li>Pessoa 4</li>
                </ul>
              </Container2>
              
          </ContainerBox>
  
          <Footer>
              <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
              <p>Encontre as melhores viagens espaciais!</p>
          </Footer>
      </MainContainer>
      
    );
  }
  
  export default TripDetails;