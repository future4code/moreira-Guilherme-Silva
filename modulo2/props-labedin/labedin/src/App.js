import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHb47KjwgnHng/profile-displayphoto-shrink_100_100/0/1616533481586?e=1647475200&v=beta&t=Pj8JkelaR9Ldl1acENJu3WgWXca0mBOawh1OtPTCwxs" 
          nome="Guilherme Cruz" 
          descricao="Oi, eu sou o Guilherme. Sou estudante de full-stack da Labenu. Tenho 27 anos de idade, sou formado en engenharia civil pela Poli - USP e estou motivado à iniciar uma nova carreira como desenvolvedor."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
        imagem="https://cdn-icons.flaticon.com/png/128/3178/premium/3178158.png?token=exp=1641927696~hmac=781e705549000b65950173c02ffb7344"
        nome="e-mail"
        texto="guisilva.207@gmail.com"  />

        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/128/17/17589.png"
        nome="Endereço"
        texto="Rua Cruz"  />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Fdcfa5e04-af72-40e4-bbcf-834547638486%2Ffogo.png?width=110&userId=&cache=v2" 
          nome="Labenu" 
          descricao="Estudante da Labenu do curso integral para Full Stack." 
        />
        
        <CardGrande 
          imagem="https://www.managementsolutions.com/themes/custom/ms/footer_logo.svg" 
          nome="Management Solutions" 
          descricao="Consultor de negócios Sênior, atuando em projetos de compliance, relacionamento com o cliente e pós venda nas frentes de estruturação de área, implementação e execução." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas Habilidades</h2>
        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/128/5968/5968267.png"
        nome="HTML"
        texto="Tags e semântica"  />

        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/128/732/732190.png"
        nome="CSS"
        texto="Flexbox e grid"  />

        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/128/919/919828.png"
        nome="Javascript"
        texto="Condicionais, lista e objetos"  />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
