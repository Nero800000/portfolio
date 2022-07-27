import React from "react";
import '../pages/Home.css'
//68.15deg, #2f2325 16.62%, #8e5d52 85.61%
import Img from '../img/mateus.png'
import {Link} from 'react-router-dom'

const Home =() => {
    console.log(Img)
    return(
        <div>
        <header> 
        <nav className="navegacao">
            <div> 
            <h1 className="title">Mateus Andrade</h1>
               <p className="sub-title">portifolio pessoal</p>
               </div>
            <ul className="lista-principal">
            <Link className="link" to='/'><li>Home</li></Link>
              <Link className="link" to='/projetos'><li>Projects</li></Link>
                <button className="contato-link"><Link className="link" to='/contato'>Contacts</Link></button> 

              
              
               
            </ul>
        </nav>
        </header>
         <div className="line"></div>
           <main className="main-conteudo">
           <img  src={Img} alt="foto" />
              <div className="informações">
              
             <h1 className="h1-informações"><span>Olá,</span> sou Mateus Andrade</h1>  
             <p>estudante de progamação</p>
             <p>Formado em analise é desenvolvimento de sistemas, tenho conhecimento em <br/>
             desenvolvimento Web (html,css,js,React) também tenho conhecimento em node.js<br/>
             criação de api, autenticação via token com jwt
             </p>
             </div>
           
           </main>
        </div>
    )
}

export default Home