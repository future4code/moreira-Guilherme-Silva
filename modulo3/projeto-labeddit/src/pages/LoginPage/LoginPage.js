import Button from '@material-ui/core/Button';
import { Buttons, ScreenContainer } from "./styled";

import LoginForm from "./LoginForm";
import { goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <h1>Login</h1>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <Buttons>
                <Button 
                    type="submit"
                    color="primary" 
                    variant="text"
                    fullWidth
                    margin="normal"
                    onClick={() => goToSignUp(navigate)}
                    >Não possui conta? Cadastra-se aqui
                </Button>
            </Buttons>
        </ScreenContainer>
    )
}

export default LoginPage