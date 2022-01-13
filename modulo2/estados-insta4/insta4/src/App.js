import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  margin-bottom: 10px;
  border-radius: 15px;

  h3{
    
    font-weight: bold;
    margin-bottom: 5px;
  }
`

const Input = styled.input`
  margin: 10px;
  padding: 5px;
`
const Button = styled.button`

  :hover {
    cursor: pointer;
    background-color: cyan;
    font-weight: bold;
  }
  background-color: white;
`


class App extends React.Component {

  state = {
    postagens: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },

    {
      nomeUsuario: 'fabinho',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/200/151'
    },

    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: 'https://picsum.photos/200/152'
    }
  ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
     
  }

  adicionaPost = () => {

    const novaPostagem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost  
    }

    const novasPostagens = [...this.state.postagens, novaPostagem] 

    this.setState({postagens: novasPostagens})
    this.setState({valorInputNome: ""})
    this.setState({valorInputFotoUsuario: ""})
    this.setState({valorInputFotoPost: ""})
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }


  render() {

    const listaDePosts = this.state.postagens.map((post) => {
      return ( <Post 
                nomeUsuario = {post.nomeUsuario} 
                fotoUsuario = {post.fotoUsuario} 
                fotoPost = {post.fotoPost} 
              />    
              )
    })

    return (
      <MainContainer>
        {listaDePosts}
        <InputContainer>
          <h3>Novo Post</h3>
          <Input placeholder='Nome' onChange={this.onChangeInputNome} value={this.state.valorInputNome} />
          <Input placeholder='Url Foto Usuário' onChange={this.onChangeInputFotoUsuario} value={this.state.valorInputFotoUsuario} />
          <Input placeholder='Url Foto Post' onChange={this.onChangeInputFotoPost} value={this.state.valorInputFotoPost} />
          <Button onClick={this.adicionaPost}>Adicionar Post</Button>
        </InputContainer>
      </MainContainer>
    );
  }
}

export default App;
