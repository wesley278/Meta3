import style from './Avaliacao.module.css'
import { ImQuotesLeft } from "react-icons/im";
function Avaliacao() {
  return (
   <div className={style.MainAvaliacao}>
    <div className={style.TextoAvaliacaoTitulo}>
        <h1>Comentario dos clientes</h1>
        <h5>O que os clintes pensam sobre nós? </h5>
        <h6>Nós da Meta3 focamos em trabalha sempre com exelência, comprometimento inovação.  </h6>

    </div> 
    <div className={style.BoxFundoAvaliacao}> 
    <div className={style.BoxAvaliacao}><div className={style.DivIcon} ><ImQuotesLeft fontSize={50} /></div>
      <p>Tive o prazer de contar com os serviços da <span>Meta3</span> para a revitalização da fachada do meu estabelecimento comercial e estou extremamente satisfeito com o resultado. A equipe da Meta3 demonstrou profissionalismo desde o início, oferecendo uma consultoria personalizada para escolher os revestimentos mais adequados ao estilo do meu prédio.</p>
      <h6>-Carlos</h6>
    </div>
    <div className={style.BoxAvaliacao}><div className={style.DivIcon} ><ImQuotesLeft fontSize={50} /></div>
    <p>Contratar a <span>Meta3</span> para o projeto de revestimento da fachada foi uma decisão acertada. Além da qualidade dos produtos, destaco o comprometimento da empresa em cumprir prazos. O cronograma foi seguido à risca, e a equipe demonstrou uma eficiência notável durante todo o processo. A transparência na comunicação e o cuidado com os detalhes foram pontos cruciais para o sucesso do projeto.</p> 
    <h6>-Pedro</h6>
    </div>
    <div className={style.BoxAvaliacao}> <div className={style.DivIcon} ><ImQuotesLeft fontSize={50} /></div>
    <p>A <span>Meta3</span> superou minhas expectativas ao trabalhar na renovação da fachada do meu prédio. Destaco a abordagem inovadora da empresa, que trouxe opções de revestimentos especiais verdadeiramente únicas e personalizadas para atender às minhas preferências estéticas. A equipe de design foi atenciosa e criativa, incorporando elementos personalizados que tornaram a fachada do meu edifício uma verdadeira obra de arte.</p>
    <h6>-Ricardo</h6>
    </div>
    </div> 

   </div>
  );
}

export default Avaliacao;
