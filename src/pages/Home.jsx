import React from "react";
import '../pages/Home.css'
//68.15deg, #2f2325 16.62%, #8e5d52 85.61%
import Img from '../img/mateus.png'
import Navbar from "../components/Navbar";
import CRUD from '../img/CRUD.png'
import SecretWord from '../img/milhaoo.png'
import bleach from '../img/imgPortiBleach.png'
import {DiJavascript1} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'   
import {DiReact} from 'react-icons/di' 
import Cv from '../Cv/cv.pdf'

const Home =() => {
  const MyBooks = () => {
    const url = 'https://nero800000.github.io/MyBooks/'
    window.open(`${url}`, "_blank")
}
const ShowDoMilhao = () => {
    const url = 'https://nero800000.github.io/showdomilhao/'
    window.open(`${url}`, "_blank")
}
const Bleach = () => {
  const url = 'https://nero800000.github.io/BleachPage/'
  window.open(`${url}`, "_blank")
}
 
    return(
        <div>
          <main> 
        <header> 
          <Navbar/>
        </header>
         
           <section className="section-conteudo">
            <div> 
           <img  src={Img} className="imgportifolio" alt="foto" />
           <div className="Myicons"> 
           <DiReact className="react"/>
           <DiJavascript1 className="javaScriptIcons"/> 
           <FaNodeJs className="nodeIcon"/>
           <AiFillHtml5 className="Myhtml"/>
           <DiCss3 className="css3Icons"/>
           </div>
              <div className="MyButtonCvDiv">
                <button className="buttonCv"><a href={Cv} download>DownloadCv</a> </button>
              </div>
           </div>
              <div className="informações">
              
             <h1 className="h1informações"><span>Olá,</span> sou Mateus Andrade</h1>  
             <p className="informacoes">estudante de progamação</p>
             <p className="textInformation">Formado em analise e desenvolvimento de sistemas, tenho conhecimento em <br/>
             desenvolvimento Web (html,css,js,React) também tenho conhecimento em node.js<br/>
             criação de api, autenticação via token com jwt
             </p>
            
             </div>
             
           </section>
           <div className="lineNova"></div>
             <h1 className="title-project">Projetos</h1>
              <section className="projects">
                <div> 
                <img src={CRUD} onClick={MyBooks} className="imgProjects" alt="Crud" />
                <p className="description">Esse foi um projeto que eu fiz sozinho, utilizando o conhecimento que eu aprendi nos cursos da udemy, 
                  ficou o front-end em React.js e o back-end em node.js
                </p>
                </div>
                <div> 
                <img src={SecretWord} onClick={ShowDoMilhao}  className="imgProjects"  alt="show" />
                <p className="description">Esse projeto eu fiz no curso de React.js do matheus battisti na udemy, é um projeto
                  bem parecido com aqueles do silvio santos de acertar a palavra
                </p>
                </div>
                <div> 
                <img src={bleach} onClick={Bleach} className="imgProjects"  alt="bleach" />
                <p className="description">
                  Esse projeto e baseado em um anime que eu gosto, eu fiz uma api fake para mostrar informações dos
                  personagens
                </p>
                </div>
               
              </section>

           </main>
          
        </div>
    )
}

export default Home