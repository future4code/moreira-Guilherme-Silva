/* Material - ui */
import Button from '@material-ui/core/Button';
import { PostContainer } from "./styled"
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/posts';


const NewPost = () => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({title: "", body: ""})

    const onSubmitForm = (event) =>{
        event.preventDefault()
        createPost(form, clear, navigate)
    }


    return(
        <PostContainer>
            <h2>Novo Post</h2>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name='title'
                    value={form.title}
                    onChange={onChange}
                    id="standard"
                    label="Título do Post"
                    fullWidth
                    margin='normal'
                    variant="filled"
                    required
                />
                <TextField
                    name='body'
                    value={form.body}
                    onChange={onChange}
                    id="standard-multiline-static"
                    label="Escreva seu post"
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
                    >Postar
                </Button>
        </form>
        </PostContainer>
    )
}

export default NewPost