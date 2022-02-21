import { BaseUrl } from "../constants/urls"
import axios from "axios"

export const pegarPerfil = (salvaDados) => {
  const url = `${BaseUrl}/person`
  axios.get(url)
  .then(resp => {
    salvaDados(resp.data.profile)
    
  })
  .catch(err => {
    alert("Erro ao buscar perfil")
  })
}
  
export const darLike = (id,salvaDados) => {
  const url = `${BaseUrl}/choose-person`
  const body = {
    id: id,
    choice: true
  }

  axios.post(url, body)
  .then(resp => {
    if(resp.data.isMatch) {
      alert("Você deu Match!")
    }
    pegarPerfil(salvaDados)
  })
  .catch(err => {
    alert("Erro no botão")
  })
}

export const darNaoLike = (id,salvaDados) => {
  const url = `${BaseUrl}/choose-person`
  const body = {
    id: id,
    choice: false
  }

  axios.post(url, body)
  .then(resp => {
    pegarPerfil(salvaDados)
  })
  .catch(err => {
    alert("Erro no botão")
  })
}

export const pegarMatches = (salvaDados) => {
  axios.get(`${BaseUrl}/matches`)
  .then(resp => {
    salvaDados(resp.data.matches)
  })
  .catch(err => {
    alert("Erro ao buscar matches")
  })
}

export const limpar = () => {
  axios.put(`${BaseUrl}/clear`)
  .then(resp => {
    alert("Dados resetados com sucesso!")
  })
  .catch(err => {
    alert("Erro ao resetar dados")
  })
}