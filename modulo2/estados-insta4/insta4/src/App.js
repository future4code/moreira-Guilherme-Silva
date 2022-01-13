import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    ] 
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
      </MainContainer>
    );
  }
}

export default App;
