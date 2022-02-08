import styled from "styled-components"


export const MainContainer = styled.div`
border: 1px solid black;
border-radius: 10px;
margin: 20px auto;
width: 25%;
min-height: 85%;
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

export const Informacoes = styled.div`
width: 90%;
margin: 10px auto;
display: flex;
justify-content: left;
color: #D9326F;
font-weight: bold;

`
export const Img = styled.img`
/* width: 50px; */
margin: 0 auto;
justify-content: center;
align-items: center;

`
export const MoldeImg = styled.div`
width: 50px;
height: 50px;
border: 1px solid #D9326F;
border-radius: 50%;
overflow: hidden;
display: flex;
margin-right: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`