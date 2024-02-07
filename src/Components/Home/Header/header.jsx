import React, { useState } from "react";
import Logo from '../../../img/LogoNova.png'
import { Link } from "react-scroll";
import "./header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo"><img src={Logo} alt="" /></span>
      <div className={`nav-items ${isOpen && "open"}`}> <ul>
        <li> <Link to="/" spy={true} smooth={true} offset={50} duration={500}> 
                Home
              </Link></li>
        <li><Link to="sobre" spy={true} smooth={true} offset={50} duration={500}>
                sobre
              </Link></li>
        <li>  <Link to="servicos" spy={true} smooth={true} offset={50} duration={500}>
                Serviços
              </Link></li>
        <li>  <Link to="galeria" spy={true} smooth={true} offset={50} duration={500}>
                Galeria
              </Link></li>
        <li><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>
                Contato
              </Link></li>
              </ul>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
