import style from "./Escolha.module.css";
import { FaCheck } from "react-icons/fa";
import ImgPorque from '../../../img/ImgPorque.png'
function Escolher() {



  const handleWhatsappClick = () => {
    const phoneNumbers = ['5511960691730', '5511940275381' ]; // Substitua pelos números de telefone desejados
    const message = 'Sua mensagem aqui';

    phoneNumbers.forEach((phoneNumber) => {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  };

  return (
    <div className={style.BoxGrande} id="contato">
      <div className={style.BoxMini}>
        <div className={style.boxDasDivs}>
          <div className={style.fotoFundo}>
            <div className={style.FotoEcolher}><img src={ImgPorque} alt="" /></div>
          </div>
          <div className={style.FundoTextoEsquerdas}>
            <div className={style.FundoTextoEscolher}>
              <h1>PORQUE NOS ESCOLHER?</h1>
              <h2>O melhor para a segurança de todos</h2>
              <p>
                Os produtos da <span>Meta3</span> são pensados em
                <br /> oferecer a maior segurança para sua empresa,
                <br /> seus consumidores e sua familia
              </p>
              <div className={style.ButtonBox}>
              <button className={style.buttonContato} onClick={handleWhatsappClick}>Contato</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.vantagens}>
          <div className={style.vantagensEsquerdas}>
            <div className={style.BoxMiniTextoVantagensUM}>
              <div className={style.Divicone}> <FaCheck fontSize={25} /></div>
              <div>
                <h1>ATÉ 15 ANOS DE GARANTIA</h1>
                <p>
                  Nossos materiais proporcionam até 15 anos<br/> de garantia em nossa
                  linha premium.{" "}
                </p>
              </div>
              </div>

              <div className={style.BoxMiniTextoVantagensDois}>
                <div className={style.Divicone}><FaCheck fontSize={25} /></div>
                <div>
                  <h1>PROTEÇÃO RAIOS U.V.</h1>
                  <p>
                  Ação de não deterioração mesmo em ambientes<br/>
                  com constantes exposição aos raios solares.
                  </p>
                </div>
              
            </div>
          </div>
          <div className={style.vantagensDireitas}>
          <div className={style.BoxMiniTextoVantagensUM}>
              <div className={style.Divicone}><FaCheck fontSize={25} /></div>
              <div>
                <h1>NÃO EMITE GASES TÓXICOS</h1>
                <p>
                Mesmo sob alta temperaturas as placas não<br/>
                emitem gases tóxicos.
                </p>
              </div>
              </div>

              <div className={style.BoxMiniTextoVantagensDois}>
                <div className={style.Divicone}><FaCheck fontSize={25} /></div>
                <div>
                  <h1>RESISTÊNCIA Á CHUVAS</h1>
                  <p>
                  Os nossos materias tem capacidade de não<br/>
                  oxidação mesmo a longa exposição.
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Escolher;
