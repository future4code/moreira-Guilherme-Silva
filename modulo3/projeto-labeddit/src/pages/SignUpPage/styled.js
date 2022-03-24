import styled from "styled-components"
import { neutralColor, primaryColor } from "../../constants/colors"

const cor = primaryColor

export const ScreenContainer = styled.div`
   
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-color: white;
    border-radius: 15px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 10% auto;
    padding-bottom: 20px;

    h1 {
        color: #45C4B0;
    }
`

export const InputContainer = styled.div`
    width: 70%;
`