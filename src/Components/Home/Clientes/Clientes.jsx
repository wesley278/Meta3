import style from "./Clientes.module.css";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { ImUserTie } from "react-icons/im";

function Clientes() {
  return (
    <div className={style.BoxMain}>
      <div className={style.BoxAllAvlaiacao}>
        <div className={style.BoxMinAvaliacao}>
          <div className={style.Iconeavalicao}>
            <LiaCertificateSolid fontSize={100} />
            <div className={style.checkIcon}>
              <FaCheck fontSize={30} />{" "}
            </div>
          </div>
          <div className={style.BoxExperienciaMais}>
            <h1>
              20<span className={style.IconeMais}>+</span>
            </h1>
            <p>Anos de Experiência</p>
          </div>
        </div>
        <div className={style.BoxMinAvaliacao}>
          <div className={style.Iconeavalicao}><IoIosPeople fontSize={100}/></div>
          <div  className={style.BoxExperienciaMais}>
            <h1>10K <span className={style.IconeMais}> +</span></h1>
            <p>Clientes satisfeitos</p>
          </div>
        </div>
        <div className={style.BoxMinAvaliacao}>
          <div className={style.Iconeavalicao}><ImUserTie fontSize={100} /></div>
          <div  className={style.BoxExperienciaMais}>
            <h1>35 <span className={style.IconeMais}> +</span></h1>
            <p>Profissionais treinados</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
