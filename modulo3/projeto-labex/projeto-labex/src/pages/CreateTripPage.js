import styled from 'styled-components'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

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

function CreateTrip() {
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

        <ContainerBox>
            <h2>Criar Viagem</h2>
            <Main>
                <Boxes>
                    <TextField id="filled-basic" label="Nome" variant="filled" type="text" size="small" />
                    <TextField id="filled-basic" label="Data" variant="filled" type="date" size="small" InputLabelProps={{
            shrink: true,
          }}/>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Planeta"
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
                    
                </Boxes>
                <Boxes>
                    <TextField id="filled-basic" label="Descrição" variant="filled" type="text" size="small"/>
                    <TextField id="filled-basic" label="Duração em Dias" variant="filled" type="number" size="small"/>
                    <Buttons>
                <Stack direction="row" spacing={5}>
                    <Button variant="contained" color="primary"><span class="material-icons">arrow_back</span></Button>
                    <Button variant="contained" color="success"><span class="material-icons">done</span></Button>
                </Stack>
            </Buttons>
                </Boxes>
            </Main>

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

export default CreateTrip;
