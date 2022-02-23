import styled from 'styled-components'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

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

const Containers = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
    margin-left: 10%;
`

const ContainerBox = styled.main`
    border-radius: 15px;
    width: 20%;
    padding: 10px 20px;
    margin: 10px;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
`

const Informacoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
    text-align: justify;
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
        navigate("/")
    }
    
    const irParaApplicationForm = () => {
        navigate("/trips/application")
    }

    const [tripList, setTripList] = useState([])


    const getTrips = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-silva-moreira/trips"
        axios.get(url)
        .then((resp) => {
            console.log(resp.data.trips)
            setTripList(resp.data.trips)
        })
        .catch(err => {
            alert("Erro")
        })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const trips = tripList.map(trip => {
        return (<ContainerBox>
            <h2>{trip.name}</h2>
            <Informacoes>
                <p><strong>Descrição:</strong> {trip.description}</p>
                <p><strong>Planeta:</strong> {trip.planet}</p>
                <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
                <p><strong>Data da Viagem:</strong> {trip.date}</p>
            </Informacoes>
      </ContainerBox>)
    })

    return (
      <MainContainer>
          <Header>
              <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
              <p>Encontre as melhores viagens espaciais!</p>
          </Header>
          <Cabecalho>
            <h1>Lista de Viagens</h1>
            <Stack direction="row" spacing={5}>
                <Button onClick={voltar} variant="contained" color="primary"><span class="material-icons">arrow_back</span></Button>
                <Button onClick={irParaApplicationForm} variant="contained" color="success"><span class="material-icons">done</span></Button>
            </Stack>
        </Cabecalho>
        <Containers>
            {trips} 
        </Containers>
        
  
          <Footer>
            <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
          </Footer>
      </MainContainer>
      
    );
  }
  
  export default ListTrips;