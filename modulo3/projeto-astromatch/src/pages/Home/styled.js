import styled from "styled-components"
import Home from "./Home"

export const MainContainer = styled.div`
border: 1px solid black;
border-radius: 10px;
margin: 20px auto;
width: 25%;
background-color: whitesmoke;
z-index:2;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const Header = styled.div`
text-align: center;
display: flex;
justify-content: space-between;
align-items:center;
margin: 10px;

h2{
  margin: 0;
  margin-left: 10px;
  color: #D9326F;
  :hover {  
    transition-duration: 0.5s;
    color: #F241A3;
  }
}

button {
  margin-right: 10px;
  border: none;
  background-color: transparent;
  .material-icons { color: #D9326F; }
  :hover {
    cursor: pointer;
    transition-duration: 0.5s;
    transform: scale(1.1,1.1);
    .material-icons { color: #F241A3; }
  }
}
`
export const Botoes = styled.div`
display: flex;
justify-content: space-around;
margin: 10px;
`
export const ButtonSim = styled.button`
background-color: white;
  border-radius: 50%;
  border: 1px solid green;
  padding:20px;
  .material-icons { color: green; }
:hover{
  background-color: green;
  border: none;
  .material-icons { color: whitesmoke; }
  transition-duration: 0.4s;
}
`
export const ButtonNao = styled.button`
  background-color: white;
  border-radius: 50%;
  border: 1px solid red;
  padding:20px;
  .material-icons { color: red; }
:hover{
  background-color: red;
  border: none;
  .material-icons { color: whitesmoke; }
  transition-duration: 0.4s;
}
`

export const Informacoes = styled.div`
width: 90%;
z-index:2;
margin: 10px auto;
position: relative;
height:350px;
display: flex;
flex-direction: column;
justify-content: center;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);


border-radius: 10px;
overflow: hidden;
`
export const Img = styled.img`
z-index:-1;
width: 100%;
margin: 10px auto;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
export const InfoTextos = styled.div`
position: absolute;
bottom: 0;
margin: 0;
padding: 0 15px;
color: white;
font-weight: bold;
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
border-radius: 10px;
width:90%;
`