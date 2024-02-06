import style from './Obras.module.css'
import Obra1 from '../../../img/Obra1.png'
import Obra2 from '../../../img/Obra2.png'
import Obra3 from '../../../img/Obra3.png'
function Obras() {
  return (
   <div className={style.mainObras}>
    <div className={style.BoxObras}>
        <div className={style.TextoObras}>
            <h6>PROJETOS EM DESTAQUE</h6>
            <h4>Nossas obras recentes</h4>
        </div>
        <div className={style.BoxQuadradrosObras}>
            <div className={style.ObrasBox}><img src={Obra1} alt="" /></div>
            <div className={style.ObrasBoxMeio}><img src={Obra2} alt="" /></div>
            <div className={style.ObrasBox}><img src={Obra3} alt="" /></div>
        </div>
    </div>
   </div>
  );
}

export default Obras;
