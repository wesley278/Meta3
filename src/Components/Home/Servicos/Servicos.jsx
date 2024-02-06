import style from "./Servicos.module.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { MdRoomPreferences } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { BiSolidStore } from "react-icons/bi";


function Servicos() {



  const handleWhatsappClick = () => {
    const phoneNumbers = ["5511960691730", "5511940275381"]; // Substitua pelos números de telefone desejados
    const message = "Sua mensagem aqui";
  
    phoneNumbers.forEach((phoneNumber) => {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    });
  };

  return (
    <div className={style.BoxMainServicos} id='servicos'>
      <div className={style.BoxTextoServicos}>
        <h1>Serviços</h1>
        <h2>Veja os principais serviços que trabalhamos </h2>
        <h4>
          Não importa o tamanho e complexidade do seu projeto, temos a<br />{" "}
          solução ideal para você!
        </h4>
      </div>
      <div className={style.BoxAllQuadrados}>
        <div onClick={handleWhatsappClick} className={style.BoxQuadrado}>
          <div className={style.BoxIcone}>
            <SiHomeassistantcommunitystore fontSize={40} />
          </div>
          <div className={style.BoxMiniTexto}>
            <h1>Fachadas</h1>
            <p>
              Revestimentos que podem ser
              <br /> alterados ou modificados com
              <br /> facilidade.
            </p>
          </div>
          <div className={style.BoxButonSaiba}>
            <button className={style.SaibaFachadas}>
              Saiba mais{" "}
              <div className={style.arrowIcone}>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>

        <div onClick={handleWhatsappClick} className={style.BoxQuadrado}>
          <div className={style.BoxIcone}><MdRoomPreferences fontSize={40} /></div>
          <div className={style.BoxMiniTexto}>
            <h1>Interiores</h1>
            <p>
              Aplicação internas para a<br /> mordenização do ambiente.
            </p>
          </div>
          <div className={style.BoxButonSaiba}>
            <button className={style.SaibaInteriores}>
              Saiba mais{" "}
              <div className={style.arrowIcone}>
                <FaArrowRight />
              </div>{" "}
            </button>
          </div>
        </div>

        <div onClick={handleWhatsappClick} className={style.BoxQuadrado}>
          <div className={style.BoxIcone}><BiSolidStore  fontSize={40}/></div>
          <div className={style.BoxMiniTexto}>
            <h1>Coberturas</h1>
            <p>Revestimantos de coberturas e residencias</p>
          </div>
          <div className={style.BoxButonSaiba}>
            <button className={style.SaibaCobertura}>
              Saiba mais{" "}
              <div className={style.arrowIcone}>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div onClick={handleWhatsappClick} className={style.BoxQuadrado}>
          <div className={style.BoxIcone}><FaPencilRuler fontSize={40}/></div>
          <div className={style.BoxMiniTexto}>
            <h1>Identidade</h1>
            <p>Projetos de identificação e criação da identidade visual.</p>
          </div>
          <div className={style.BoxButonSaiba}>
            <button className={style.SaibaIdentidade}>Saiba mais <div className={style.arrowIcone}><FaArrowRight /></div> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
