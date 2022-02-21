import styled from 'styled-components'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { style } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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
    border-radius: 15px;
    width: 20%;
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
    margin-left: 10%;
`
const Informacoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
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


function ListTrips() {

    let navigate = useNavigate()
    
    const voltar = () => {
        navigate(-1)
    }
    
    const irParaApplicationForm = () => {
        navigate("/trips/application")
    }

    return (
      <MainContainer>
          <Header>
              <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
              <p>Encontre as melhores viagens espaciais!</p>
              <Stack direction="row" spacing={5}>
                <Button variant="contained">Área Privada</Button>
                <Button variant="contained">Ver Viagens</Button>
              </Stack>
          </Header>
          <Cabecalho>
            <h1>Lista de Viagens</h1>
            <Stack direction="row" spacing={5}>
                <Button onClick={voltar} variant="contained" color="primary"><span class="material-icons">arrow_back</span></Button>
                <Button onClick={irParaApplicationForm} variant="contained" color="success"><span class="material-icons">done</span></Button>
            </Stack>
        </Cabecalho>
          <ContainerBox>
            <h3>Nome</h3>
                <Informacoes>
                    <p>Descrição: xxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <p>Planeta: xxxxxxxxxxxx</p>
                    <p>Duração: xxxxxxxxxx</p>
                    <p>Data: xx/xx/xxxx</p>
                </Informacoes>
          </ContainerBox>
  
          <Footer>
              <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
              <p>Encontre as melhores viagens espaciais!</p>
              <Stack direction="row" spacing={5}>
                <Button variant="contained">Área Privada</Button>
                <Button variant="contained">Ver Viagens</Button>
              </Stack>
          </Footer>
      </MainContainer>
      
    );
  }
  
  export default ListTrips;