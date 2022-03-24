import { BASE_URL } from "../constants/urls"
import axios from "axios"
import { goToFeed } from "../routes/coordinator"

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then(res => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch(err => {
        console.log(err.response)
        alert(err.response.data)
    })
}
export const signUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signUp`, body)
    .then(res => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
        setRightButtonText("Logout")
    })
    .catch(err => {
        alert(err.response.data)
    })
}