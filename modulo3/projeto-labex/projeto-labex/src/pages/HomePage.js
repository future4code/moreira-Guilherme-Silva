import styled from 'styled-components'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


const MainContainer = styled.div`
  background-color: #F2E0C9;
  height: 100vh;
  width: 100wv;
  color: #025959;
`
const Container = styled.div`
  width: 90%;
  height: 50%;
  padding-top: 15%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`


const Img = styled.img`
  height: 100%;
  border-radius: 15px;
`

const InfoContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  
  margin: 2% 0 2% 5%;
  text-align: center;
  font-size: 1.5rem;

  h1{
    margin: 0;
    font-size: 4rem;
  }

  div{
    margin: 0 auto;
  }
`


function HomePage() {

  let navigate = useNavigate()

  const irParaLogin = () => {
      navigate("login")
  }

  const irParaListTrips = () => {
      navigate("trips/list")
  }

  return (
    <MainContainer>
      <Container>
        <Img src='https://img.myloview.com.br/posters/aerial-beach-landscape-minimalist-beach-view-from-drone-or-airplane-palm-shadows-in-white-sand-near-blue-sea-with-beautiful-ripples-and-waves-perfect-summer-beach-landscape-banner-exotic-blue-sea-400-197781816.jpg' />
        <InfoContainer>
          <h1>LabeX</h1>
          <p>Encontre as melhores viagens espaciais! Nosso serviço junta as melhores opções de viagens com quem está com vontade de viajar!</p>
          <div>
            <Stack direction="row" spacing={10}>
              <Button variant="contained" onClick={irParaLogin}>Área Privada</Button>
              <Button variant="contained"onClick={irParaListTrips}>Ver Viagens</Button>
            </Stack>
          </div>
        </InfoContainer>
      </Container>
    </MainContainer>
    
  );
}

export default HomePage;
