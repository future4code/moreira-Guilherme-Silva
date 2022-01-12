import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const IconContainer = styled.div`
	display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`
const IconImage = styled.img`
	margin-right: 5px;
    height: 20px;
`

export function SecaoCompartilhar(props) {

    return <CommentContainer>
                <IconContainer>
                    <IconImage alt={'Icone'} src={props.icone1} onClick={props.onClickIcone1}/>
                    <IconImage alt={'Icone'} src={props.icone2} onClick={props.onClickIcone2}/>
                    <IconImage alt={'Icone'} src={props.icone3} onClick={props.onClickIcone3}/>
                </IconContainer>
    </CommentContainer>
}
