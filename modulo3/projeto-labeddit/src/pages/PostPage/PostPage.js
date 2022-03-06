
import { useNavigate, useParams } from "react-router-dom";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import NewComment from "../../components/NewComment/NewComment";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { deleteCommentVote, negativeCommentVote, positiveCommentVote } from "../../services/posts";

const PostPage = () => {
    useProtectedPage()

    const navigate =useNavigate()

    const params = useParams()
    console.log(params.id)

    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comments)

    
    const commentsList = comments.map(comment => {
        return <CommentsCard
            key={comment.id}
            username={comment.username}
            body={comment.body}
            voteSum={comment.voteSum}
            userVote={comment.userVote}
            onClickPositiveVote = {() => positiveCommentVote(comment.id, navigate)}
            onClickNegativeVote = {() => negativeCommentVote(comment.id, navigate)}
            onClickDeleteVote = {() => deleteCommentVote(comment.id, navigate)}
    />         
    })


    return (
        <div>
            <NewComment id={params.id} />
            {commentsList}
        </div>
    )
}

export default PostPage