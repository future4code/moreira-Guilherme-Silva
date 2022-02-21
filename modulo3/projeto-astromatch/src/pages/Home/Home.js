/* Bibliotecas */
import { useState } from "react";
import { useEffect } from "react";
/* Urls */
import { BaseUrl } from "../../constants/urls";
/* Requests */
import { pegarPerfil } from "../../services/requests";
import { darLike } from "../../services/requests";
import { darNaoLike } from "../../services/requests";
/* Styled */
import { MainContainer } from "./styled";
import { Header } from "./styled";
import { Botoes } from "./styled";
import { ButtonNao } from "./styled";
import { ButtonSim } from "./styled";
import { Informacoes } from "./styled";
import { Img } from "./styled";
import { InfoTextos } from "./styled";


function Home(props) {
  const [perfil, setPerfil] = useState("")

  useEffect(() => {
    pegarPerfil(salvaDados)
  },[])

  const salvaDados = (dados) => {
    setPerfil(dados)
  }


  return (
    <MainContainer>
      <Header>
        <h2>AstroMatch</h2>
        <button onClick={props.irParaMatchs}><span class="material-icons">volunteer_activism</span></button>
      </Header>
      <hr />
      <Informacoes>
        <Img src={perfil.photo}/>
        <InfoTextos>
          <h2>{perfil.name}, {perfil.age}</h2>
          <p>{perfil.bio}</p>
        </InfoTextos>
      </Informacoes>
      <Botoes>
        <ButtonNao onClick={() => darNaoLike(perfil.id,salvaDados)}><span class="material-icons">heart_broken</span></ButtonNao>
        <ButtonSim onClick={() => darLike(perfil.id,salvaDados)}><span class="material-icons">favorite</span></ButtonSim>
      </Botoes>
    </MainContainer>
  )
}

export default Home