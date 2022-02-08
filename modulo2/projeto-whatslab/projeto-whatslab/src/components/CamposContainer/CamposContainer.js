import React from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
/*     display: flex;
    flex-direction: column; */
`

const InputContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin: 1% 2%;
`
const MensagemContainer = styled.div `
     display:flex;
    flex-direction: column;
    justify-content: space-between;

`

const Mensagem = styled.div `
    
    align-self: flex-start;
    max-width: 60%;
    min-width: 8%;
    word-wrap: break-word;
    background-color: white;
    border-radius: 10px;
    margin: 10px 20px;
    padding: 10px;
`

const NomeMensagem = styled.div `
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`

const InputNomeContainer = styled.input`
    width: 15%;
    border-radius: 5px;
    border: 1px solid lightgray;
    height: 25px;
`

const InputMensagemContainer = styled.input`
    width: 65%;
    border-radius: 5px;
    border: 1px solid lightgray;
`

const ButtonContainer = styled.button`
    width: 15%;
    background-color: #5bc0de;
    border: none;
    border-radius: 5px;
    color:  white;
    font-weight: bold;
    :hover {
        background-color: #337ab7;
        transition-duration: 1s;
        transform: scale(1.1, 1.1);
    }
`

export class CamposContainer extends React.Component {

    state = {
        mensagens: [
            {
                nome: "",
                mensagem: ""   
            }
        ],
        valorInputNome: "",
        valorInputMensagem: "" 

    }

    AdicionaMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem
        }
        const novasMensagens = [...this.state.mensagens, novaMensagem]
        this.setState({mensagens: novasMensagens})
        
        this.setState({valorInputMensagem: ""})
    }

    onChangeInputNome = (event) => {
        this.setState({valorInputNome: event.target.value})
    }

    onChangeInputMensaem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    render() {

        const listaDeComponentes = this.state.mensagens.map((mensagem) => {
            if(mensagem.nome ==="") {
                return  ""
            } else if (mensagem.nome.toLowerCase() === "eu") {
                return <Mensagem>{mensagem.mensagem}</Mensagem>;
            } else {
                return <Mensagem><NomeMensagem><strong>{mensagem.nome}</strong></NomeMensagem> 
                        <div>{mensagem.mensagem}</div></Mensagem>;
            }      
          })

        return <MainContainer>
            <MensagemContainer>
                {listaDeComponentes}         
            </MensagemContainer>
            <InputContainer> 
                <InputNomeContainer placeholder='Nome'  value={this.state.valorInputNome} onChange={this.onChangeInputNome}/>
                <InputMensagemContainer placeholder='Mensagem' value={this.state.valorInputMensagem} onChange={this.onChangeInputMensaem}/>
                <ButtonContainer onClick={this.AdicionaMensagem}>Enviar</ButtonContainer>         
            </InputContainer>       
        </MainContainer>
    }   


}