import { InputContainer, ScreenContainer } from "./styled";
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()


    return (
        <ScreenContainer>
            <h1>Cadastro</h1>
            <InputContainer>
                <SignUpForm setRightButtonText={setRightButtonText}/>
            </InputContainer>
            
        </ScreenContainer>
    )
}

export default SignUpPage