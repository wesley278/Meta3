import Avaliacao from "../../Components/Home/Avaliacao/Avaliacao";
import Clientes from "../../Components/Home/Clientes/Clientes";
import Header from "../../Components/Home/Header/header";
import Obras from "../../Components/Home/Obrasdestaque/Obras";
import Servicos from "../../Components/Home/Servicos/Servicos";
import Sobre from "../../Components/Home/Sobre/sobre";
import Escolher from "../../Components/Home/PorqueEscolher/Escolha";
import Slide from "../../Components/Home/SlideFotos/Slides";
import Footer from "../../Components/Home/Footer/Foter";
import FundoHeader from "../../Components/Home/FundoHeader/FundoHeader";
function Home() {
  return (
    <div>
    <Header/>
    <FundoHeader/>
    <Sobre/>
    <Servicos/>
    <Slide/>
    <Clientes/> 
    <Escolher/>
    <Obras/>
    <Avaliacao/>
    <Footer/>
    </div>
  );
}

export default Home;
