import React, {useState} from "react";

import {Link} from "react-router-dom"
import ScrollLinks from "./ScrollLinks";
import './NavBar.css'
//  <ScrollLinks className="link-nav " to="projects" spy={true} smooth={true} offset={50} duration={1000} onClick={closeMenu}>HostedProjects</ScrollLinks>

const Navbar = () => {
  const url = window.location.href;
    const [isOpen, setIsOpen] = useState(false);
    const [click, SetClick] = useState(false)
    const closeMenu = () => SetClick(false)
        


    return (
      <div className="Navbar">
      
        <span className="nav-logo">Mateus Portfolio </span>
        <div className={`nav-items ${isOpen && "open"}`} >
        <Link className="link-nav"  to="/" >Home</Link> 
        {url === 'https://nero800000.github.io/portfolio/cl' ? <ScrollLinks className="link-nav " to="projects" spy={true} smooth={true} offset={50} duration={1000} onClick={closeMenu}>Projetos</ScrollLinks>: false }
        <Link className="link-nav " to="/projetos" >ProjetosGitHub</Link>  
        <Link className="link-nav " to="/contato" >Contato</Link>
        
        </div>
        <div
         className={`nav-toggle ${isOpen && "open"}`}
         onClick={() => setIsOpen(!isOpen)}    
         >
          <div className="bar"></div>
        </div>
      
      </div>
    
    )
  }  
  export default Navbar;