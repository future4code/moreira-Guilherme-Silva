

export const goToLogin = (navigate) => {
    navigate("/Login")
}

export const goToSignUp = (navigate) => {
    navigate("/Cadastro")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToPost = (navigate, id) => {
    navigate(`/Post/${id}/comments`)
}