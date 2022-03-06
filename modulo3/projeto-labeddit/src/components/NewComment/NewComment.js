/* Material - ui */
import Button from '@material-ui/core/Button';
import { PostContainer } from "./styled"
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { createComment } from '../../services/posts';


const NewComment = ({id}) => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({body: ""})

    const onSubmitForm = (event) =>{
        event.preventDefault()
        createComment(id, form, clear, navigate)
    }


    return(
        <PostContainer>
            <h2>Novo Comentário</h2>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name='body'
                    value={form.body}
                    onChange={onChange}
                    id="standard-multiline-static"
                    label="Escreva seu comentário"
                    multiline
                    rows={3}
                    fullWidth
                    margin='normal'
                    variant="filled"
                    required
                />
                <Button 
                    type="submit"
                    color="primary" 
                    variant="contained"
                    fullWidth
                    >Comentar
                </Button>
        </form>
        </PostContainer>
    )
}

export default NewComment