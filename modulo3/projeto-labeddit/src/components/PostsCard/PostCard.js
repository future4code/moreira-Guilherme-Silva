import { BodyContainer, Message, PostContainer, VotesContainer, VotoNaoApertado, VotoNegativoApertado, VotoPositivoApertado } from "./styled"

const PostCard = ({username, body, voteSum, commentCount, userVote, onClickCard, onClickPositiveVote, onClickNegativeVote, onClickDeleteVote}) => {
    return(
        <PostContainer>
            <VotesContainer>
                {userVote === 1 ?
                    <VotoPositivoApertado onClick={onClickDeleteVote}>
                        <span class="material-icons">arrow_upward</span>  
                    </VotoPositivoApertado>
                    :
                    <VotoNaoApertado onClick={onClickPositiveVote}>
                        <span class="material-icons">arrow_upward</span>  
                    </VotoNaoApertado>
                }
                <p>Votos: {voteSum}</p>
                {userVote === -1 ?
                    <VotoNegativoApertado onClick={onClickDeleteVote}>
                        <span class="material-icons">arrow_downward</span>  
                    </VotoNegativoApertado>
                    :
                    <VotoNaoApertado onClick={onClickNegativeVote}>
                        <span class="material-icons">arrow_downward</span>  
                    </VotoNaoApertado>
                }
            </VotesContainer>
            <BodyContainer onClick={onClickCard}>
                <h3>{username}</h3>
                <hr/>
                <p>{body}</p>
                <hr/>
                <Message>Comentários: {commentCount}</Message>
            </BodyContainer>
        </PostContainer>
    )
}

export default PostCard