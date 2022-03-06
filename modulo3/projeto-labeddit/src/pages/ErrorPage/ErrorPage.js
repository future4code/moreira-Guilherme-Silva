import react from "react"
import { ErrorPageContainer } from "./styled"
import { ErrorImage } from "./styled"
import Error from "../../assets/404.png"

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={Error} />
            <h1>Página Não Encontrada</h1>
        </ErrorPageContainer>
    )
}

export default ErrorPage