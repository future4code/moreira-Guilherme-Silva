/* Bibliotecas */
import { useState } from "react";
import { useEffect } from "react";
/* Requests */
import { pegarMatches } from "../../services/requests";
/* Styled */
import { MainContainer } from "./styled";
import { Header } from "./styled";
import { Informacoes } from "./styled";
import { Img } from "./styled";
import { MoldeImg } from "./styled";



function Matchs(props) {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    pegarMatches(salvaDados)
  },[])

  const salvaDados = (dados) => {
    setMatches(dados)
  }

  const listaMatches = matches.map(caso => {
    return (
      <Informacoes>
        <MoldeImg>
          <Img src={caso.photo}/>  
        </MoldeImg> 
        <p>{caso.name}</p>
      </Informacoes>
    )
  })

  return (
    <MainContainer>
      <Header>
        <button onClick={props.irParaHome}><span class="material-icons">volunteer_activism</span></button>
        <h2>AstroMatch</h2>
      </Header>
      <hr />
      {listaMatches}
    </MainContainer>
  )
}

export default Matchs