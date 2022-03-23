import { BASE_URL } from "../constants/urls"
import axios from "axios"
import { goToFeed, goToLogin } from "../routes/coordinator"

export const createPost = (body, clear, navigate) => {

    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then(resp => {
        alert("Post Criado com sucesso!")
        clear()
        goToFeed(navigate)
    })
    .catch(err => {
        alert("Erro ao criar post")
    })
}

export const createComment = (id, body, clear, navigate) => {

    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then(resp => {
        alert("Comentário Criado com sucesso!")
        clear()
        goToFeed(navigate)
    })
    .catch(err => {
        alert("Erro ao criar comentário")
    })
}

export const positivePostVote = (id, navigate) => {

    const body = {
        direction: 1
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } )
    .then(res => (
        goToLogin(navigate)
        
    ))
    .catch(err => {
        console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}

export const negativePostVote = (id, navigate) => {

    const body = {
        direction: -1
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } )
    .then(res => (
        goToLogin(navigate)
    ))
    .catch(err => {
        console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}

export const deletePostVote = (id, navigate) => {

    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } )
    .then(res => (
        goToLogin(navigate)
    ))
    .catch(err => {
        console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}

export const positiveCommentVote = (id, navigate) => {

    const body = {
        direction: 1
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } )
    .then(res => (
        goToLogin(navigate)
        
    ))
    .catch(err => {
        console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}

export const negativeCommentVote = (id, navigate) => {

    const body = {
        direction: -1
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } )
    .then(res => (
        goToLogin(navigate)
    ))
    .catch(err => {
        console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}

export const deleteCommentVote = (id, navigate) => {

    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    } )
    .then(res => (
        goToLogin(navigate)
    ))
    .catch(err => {
        console.log(err)
        alert("Ocorreu um erro, tente novamente")
    })
}