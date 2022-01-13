import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import iconeSalvarBranco from '../../img/bookmark-white.png'
import iconeSalvarPreto from '../../img/bookmark-black.png'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCompartilhar from '../../img/shared.png'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import iconeInstagram from '../../img/instagram.png'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
    })
    if(this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarCompartilhar1 = () => {
    this.setState({
      compartilhando: false
     })
     alert("Você compartilhou com o Instagram!")
  }

  aoEnviarCompartilhar2 = () => {
    this.setState({
      compartilhando: false
     })
     alert("Você compartilhou com o Facebook!")
  }

  aoEnviarCompartilhar3 = () => {
    this.setState({
      compartilhando: false
     })
     alert("Você compartilhou com o Twitter!")
  }


  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompatilhar

    if(this.state.compartilhando) {
      componenteCompatilhar = <SecaoCompartilhar 
        icone1={iconeInstagram} 
        icone2={iconeFacebook} 
        icone3={iconeTwitter} 
        onClickIcone1={this.aoEnviarCompartilhar1}
        onClickIcone2={this.aoEnviarCompartilhar2}
        onClickIcone3={this.aoEnviarCompartilhar3}/>
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>
      
      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeSemContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompatilhar}
    </PostContainer>
  }
}

export default Post