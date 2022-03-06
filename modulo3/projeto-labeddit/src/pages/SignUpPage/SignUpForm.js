import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import { signUp } from '../../services/users';

const SignUpForm = ({setRightButtonText}) => {

    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm} > 
            <TextField
                required
                focused
                variant="outlined"
                label="Usuário"
                size="small"
                type="text"
                fullWidth
                margin="normal"
                color="primary"
                name="username"
                value={form.username}
                onChange={onChange}
            />
            <TextField
                required
                focused
                variant="outlined"
                label="E-mail"
                size="small"
                type="email"
                fullWidth
                margin="normal"
                color="primary"
                name="email"
                value={form.email}
                onChange={onChange}
            />
            <TextField
                required
                focused
                variant="outlined"
                label="Senha"
                size="small"
                type="password"
                fullWidth
                margin="normal"
                color="primary"
                name="password"
                value={form.password}
                onChange={onChange} 
            />
            <Button 
                type="submit"
                color="primary" 
                variant="contained"
                fullWidth
                margin="normal"
                >Cadastrar
            </Button>
        </form>
    )
}

export default SignUpForm