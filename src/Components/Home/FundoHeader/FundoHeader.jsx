
import style from "./FundoHeader.module.css";


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

function FundoHeader() {

  return (
    <div className={style.BoxFundo}>
    <div className={style.fundo} id="/">
    <div className={style.Boxtextocomeco}>
        <p className={style.Primerotexto}>
          A <span>Meta3</span> Revestimentos vem atuando no mercado de
          construção civil, sendo a pioneira no seguimento de revestimentos
          metálicos.
        </p>
        <div className={style.boxButtonConato}>
          <button onClick={handleWhatsappClick} className={style.entreContato}>
            Entre em contato{" "}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FundoHeader;
