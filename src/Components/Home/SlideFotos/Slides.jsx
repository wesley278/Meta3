import style from "./Slides.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import pari from "../../../img/pari.jpg"
import FundoBlu from "../../../img/FundoBlu.png";
import MecDonald from "../../../img/MecDonald.jpg";
import Mancao from "../../../img/Mancao.jpg";
import ParisixSegundo from "../../../img/ParisixSegundo.png";
import OticaSlide from "../../../img/OticaSlide.jpg";
import SantaCasa from "../../../img/SantaCasa.png";
import Nagumo from "../../../img/Nagumo.jpg";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slide() {

const  [slidePerView, setSlidePerView] = useState(3)
  const data = [
    { id: "1", Image: SantaCasa },
    { id: "2", Image: ParisixSegundo },
    { id: "3", Image: MecDonald },
    { id: "4", Image: Mancao },
    { id: "5", Image: pari },
    { id: "6", Image: OticaSlide },
    { id: "7", Image: FundoBlu },
    { id: "8", Image: Nagumo },
  ];
  
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
  

useEffect(() =>{
  function handleResize(){
    if(window.innerWidth < 720){
      setSlidePerView(1);
    }else if ((window.innerWidth < 835)){
      setSlidePerView(2);
    }else{
      setSlidePerView(3);
    }
  }
  

  handleResize();

  window.addEventListener("resize", handleResize)

  return () =>{
    window.removeEventListener("resize", handleResize)
  }
},[])




  return (
    <div className={style.MainAll}>
    <div className={style.MainSlide} id="galeria">
      <h1>ALGUMAS DE NOSSAS OBRAS!</h1>
      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
        className={style.Slide}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.Image} alt="" className={style.slideItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.BoxButton}>
        <button onClick={handleWhatsappClick}>Saiba mais</button>
      </div>
    </div>
    </div>
  );
}

export default Slide;
