import styled from "styled-components"

export const PostContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 20px auto 10px auto;
    text-align: justify;
    width: 40%;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`
export const BodyContainer = styled.div`
    width: 90%;
    height: 100%;
    color: #012030;
    padding:0  10px;
    word-wrap: break-word;
    h3{
        margin: 0;
    }
`

export const VotesContainer = styled.div`
    width: 10%;
    padding: 10px 10px;
    background-color: #45C4B0;
    border-radius: 15px 0 0 15px;
    text-align: center;
`
export const VotoPositivoApertado = styled.div`
    color: #DAFDBA;
    :hover{
        cursor: pointer;
        transform: scale(1.3,1.3);
        transition-duration: 1s
    }
`
export const VotoNegativoApertado = styled.div`
    color: darkred;
    :hover{
        cursor: pointer;
        transform: scale(1.3,1.3);
        transition-duration: 1s
    }
`

export const VotoNaoApertado = styled.div`
    :hover{
        cursor: pointer;
        transform: scale(1.3,1.3);
        transition-duration: 1s
    }
`
export const Message = styled.p`
    position: relative;
    bottom: 0;
`