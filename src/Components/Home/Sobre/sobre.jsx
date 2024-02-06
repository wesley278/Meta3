import style from './sobre.module.css'
import ImageSobre from '../../../img/ImgSobre.png'



const handleWhatsappClick = () => {
  const phoneNumbers = ['5511960691730', '5511952189276' ]; // Substitua pelos números de telefone desejados
  const message = 'Sua mensagem aqui';

  phoneNumbers.forEach((phoneNumber) => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
};




function Sobre() {

  return (
   <section  className={style.Boxsobre} id='sobre'>
    <div className={style.BoxExperienciaSobre}>
    <h1>20</h1>
    <p>Anos de Experiência</p>
    </div>
   

    <div className={style.Boxfundoimg}>
    
<div className={style.Boximg}>
<div className={style.QuadradoAmarelo}>
</div>
  <img className={style.FotoSobre} src={ImageSobre} alt="" />
</div>
    </div>
    <div className={style.BoxTextoSobre}>
      <div className={style.MiniBoxTexto}>
      <h2>Sobre nós </h2>
      <h5>Sempre atrás do nossos objetivos, e abertos a <br/>sugestões de nossos clientes!
      </h5>
      <p>Para que isso aconteça, contamos com uma fábrica especializada no seguimento e uma equipe com ampla experiência formada por arquitetos, engenheiros, administradores e profissionais altamente qualificados.<br/>
      <br/>
      Treinados para solucionar qualquer percalço que possa aparecer ao decorrer de cada projeto.
      </p>
      </div>
      <div className={style.BoxButtonContato}>
      <button onClick={handleWhatsappClick} className={style.entreContato}>Entre em contato</button>
      </div>
      
    </div>
   </section>
  );
}

export default Sobre;
