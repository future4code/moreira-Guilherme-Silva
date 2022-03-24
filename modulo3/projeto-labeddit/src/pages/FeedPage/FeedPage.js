
import useProtectedPage from "../../hooks/useProtectedPage";
import {BASE_URL} from "../../constants/urls"
import PostCard from "../../components/PostsCard/PostCard";
import useRequestData from "../../hooks/useRequestData";
import { MainContainer } from "./styled";
import NewPost from "../../components/NewPost/NewPost";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

import { positivePostVote, negativePostVote, deletePostVote } from "../../services/posts";

const FeedPage = () => {
    useProtectedPage()

    const navigate = useNavigate()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickCard = (id) => {
        goToPost(navigate, id)
    }

    /* const [voteAlteration, setVoteAlteration] = useState(0)

    useEffect( () => {
        goToFeed(navigate)
    }, [voteAlteration])
    
    console.log(voteAlteration) */
    
    const postsList = posts.map(post => {
        return <PostCard 
                    key={post.id}
                    username={post.username}
                    body={post.body}
                    voteSum={post.voteSum}
                    userVote = {post.userVote}
                    commentCount={post.commentCount}
                    onClickCard={() => onClickCard(post.id)}
                    onClickPositiveVote = {() => positivePostVote(post.id, navigate)}
                    onClickNegativeVote = {() => negativePostVote(post.id, navigate)}
                    onClickDeleteVote = {() => deletePostVote(post.id, navigate)}
                />
    })

    return (
        <MainContainer>
            <NewPost />
            {postsList}
        </MainContainer>
    )
}

export default FeedPage