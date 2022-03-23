
/* Material - ui */
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import useForm from "../../hooks/useForm";
import { login } from '../../services/users';

import { useNavigate } from 'react-router-dom';


const LoginForm = ({setRightButtonText}) => {


    const [form, onChange, clear] = useForm({email: "", password: ""})
    const navigate = useNavigate() 

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm} > 
            <TextField
                required
                focused
                variant={"outlined"}
                label={"E-mail"}
                size={"small"}
                type={"email"}
                fullWidth
                margin={"normal"}
                color={"primary"}
                name={"email"}
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
                >Entrar
            </Button>
        </form>
    )
}

export default LoginForm