import React, { useState } from "react";
import Logo from '../../../img/LogoNova.png'
import { Link } from "react-scroll";
import "./header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo"><img src={Logo} alt="" /></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">  <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
                Home
              </Link></a>
        <a  href="#"><Link to="sobre" spy={true} smooth={true} offset={50} duration={500}>
                sobre
              </Link></a>
        <a  href="#">  <Link to="servicos" spy={true} smooth={true} offset={50} duration={500}>
                Serviços
              </Link></a>
        <a  href="#">  <Link to="galeria" spy={true} smooth={true} offset={50} duration={500}>
                Galeria
              </Link></a>
        <a  href="#">  <Link to="contato" spy={true} smooth={true} offset={50} duration={500}>
                Contato
              </Link></a>
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
