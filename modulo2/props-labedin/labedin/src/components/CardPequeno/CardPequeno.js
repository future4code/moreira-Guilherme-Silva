import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 90px;
`

const Imagem = styled.img `
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

export function CardPequeno (props) {
    return (
        <Container>
            <Imagem src= {props.imagem} />
            <p><strong>{props.nome}:</strong> {props.texto}</p>
        </Container>
    )
}