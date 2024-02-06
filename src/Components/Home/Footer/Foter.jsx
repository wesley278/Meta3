import style from "./Foter.module.css";
import Logo from "../../../img/LogoNova.svg";
import { AiFillInstagram } from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.FundoFooter}>
      <div className={style.FoterTextoLogo}>
        <div className={style.logoFooter}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={style.BoxIconsFoter}>
          <div className={style.IconsFoter}>
          <AiFillInstagram fontSize={30} />
          
          </div>
          <div  className={style.IconsFoterDois}>
          <FaFacebook fontSize={28} />
          </div>
        </div>
      </div>
      <div className={style.Endereco}><p>Av. José Miguel Ackel, 2429 - Jardim Guilhermino, Guarulhos - SP, 07273-000</p></div>
      <div className={style.Copy}> <h4><FaCopyright /> Copyright 2024Meta3</h4></div>
    </div>
  );
}

export default Footer;
