import styled from 'styled-components'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
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
    width: 50%;
    padding: 10px 20px;
    margin: 100px auto;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
`

const Main = styled.div`
    display: flex;
    justify-content: space-around;
` 

const Boxes = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 20px;

    /* input {
        border: none;
        background-color: #025959;
        border-radius: 5px;
        padding: 5px;
        color: white;
        ::placeholder{
            color: white;
        }
    } */
    
`

const Buttons =styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
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

function ApplicationForm() {

    let navigate = useNavigate()

    const irParaLogin = () => {
        navigate("login")
    }

    const irParaListTrips = () => {
        navigate("/trips/list")
    }

  return (
    <MainContainer>
        <Header>
            <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
        </Header>

        <ContainerBox>
            <h2>Inscreva-se Para Uma Viagem</h2>
            <Main>
                <Boxes>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Escolha uma Viagem"
                        /* value={currency}
                        onChange={handleChange} */
                        SelectProps={{
                            native: true,
                        }}
                        /* helperText="Selecione Uma Viagem" */
                        variant="filled"
                        size="small"
                    >
                        <option disabled selected></option>
                        <option>Alemanha</option>
                        <option>Brasil</option>
                        <option>Russia</option>
                    </TextField>
                    <TextField id="filled-basic" label="Nome" variant="filled" type="text" size="small"/>
                    <TextField id="filled-basic" label="Idade" variant="filled" type="number" size="small"/>
                </Boxes>
                <Boxes>
                    <TextField id="filled-basic" label="Texto da Candidatura" variant="filled" type="text" size="small"/>
                    <TextField id="filled-basic" label="Profissão" variant="filled" type="text" size="small"/>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Escolha um País"
                        /* value={currency}
                        onChange={handleChange} */
                        SelectProps={{
                            native: true,
                        }}
                        /* helperText="Selecione Um País" */
                        variant="filled"
                        size="small"
                    >
                        <option disabled selected></option>
                        <option>Alemanha</option>
                        <option>Brasil</option>
                        <option>Russia</option>
                    </TextField>
                </Boxes>
            </Main>
            <Buttons>
                <Stack direction="row" spacing={5}>
                    <Button onClick={irParaListTrips} variant="contained" color="primary"><span class="material-icons">arrow_back</span></Button>
                    <Button onClick={irParaLogin} variant="contained" color="success"><span class="material-icons">done</span></Button>
                </Stack>
            </Buttons>
        </ContainerBox>

        <Footer>
            <h1><span class="material-icons">flight_takeoff</span>  LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
        </Footer>
    </MainContainer>
    
  );
}

export default ApplicationForm;
