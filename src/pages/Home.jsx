import React from "react";
import '../pages/Home.css'
//68.15deg, #2f2325 16.62%, #8e5d52 85.61%
import Img from '../img/mateus.png'
import Navbar from "../components/Navbar";
import CRUD from '../img/CRUD.png'
import SecretWord from '../img/milhaoo.png'
import bleach from '../img/imgPortiBleach.png'
import apiTs from '../img/api_jwt.png'
import apijwt from '../img/api.png'
import list from '../img/list.png'

import {DiJavascript1} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiGit} from 'react-icons/di'   
import {DiReact} from 'react-icons/di' 
import {SiTypescript} from 'react-icons/si' 
import Cv from '../Cv/cv.pdf'
import facu from '../Cv/Certificado DAaaa.pdf'
import typescript from '../Cv/type.pdf'
import cursoDereact from '../Cv/cursoReact.pdf'
import node from '../Cv/node.pdf'
import {CgMail} from 'react-icons/cg'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFillPhoneFill, BsGithub} from 'react-icons/bs'  
import {AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

// 4194E8 face
// linkdin 2797CF


const Home =() => {
  const MyBooks = () => {
    const url = 'https://github.com/Nero800000/MyBooks'
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
const tasklist = () => {
  const url = 'https://nero800000.github.io/tasklist-typescript/'
  window.open(`${url}`, "_blank")
}
const apiTss = () => {
  const url = 'https://github.com/Nero800000/Api_de_filmes_Ts'
  window.open(`${url}`, "_blank")
}
const apiTJwt = () => {
  const url = 'https://github.com/Nero800000/api_jwt_javascript'
  window.open(`${url}`, "_blank")
}


const handleFacebook = () => {
  const url = 'https://www.facebook.com/profile.php?id=100015512023360'
  window.open(`${url}`, "_blank")
}
const handleLinkdin = () => {
  const url = 'https://www.linkedin.com/in/mateus-andrade-116559223/'
  window.open(`${url}`, "_blank")
}
const handlegit = () => {
  const url = 'https://github.com/Nero800000/Mateusandrade'
  window.open(`${url}`, "_blank")
}
 
    return(
        <div>
          <main> 
        <header>  
          <Navbar/>
        </header>
         
           <section className="section-conteudo">
            <div className="listaDeContatos"> 
           <img  src={Img} className="imgportifolio" alt="foto" />
              <div className="redesSociais">
              <AiFillFacebook className="social-icons " onClick={handleFacebook}/>
              <AiFillLinkedin className="social-icons " onClick={handleLinkdin}/>
              <BsGithub  className="social-icons "       onClick={handlegit}/>


              </div>
              <div>
             <div className="Mycontatos">
             <BsFillPhoneFill className="phone" /> <p>11 965031583</p>
             </div>
             <div className="Mycontatos">
             <CgMail className="gmail"/><p>mateusdevprontoo@gmail.com</p>
             </div>
             <div className="Mycontatos">
             <GoLocation className="localizacao"/> <p>São paulo</p>
             </div>
             </div>

             
       
              <div className="MyButtonCvDiv">
                <button className="buttonCv"><a href={Cv} download>Download curriculo</a> </button>
              </div> 
              </div>
         
              <div className="informações">
              
             <h1 className="h1informações"><span>Olá,</span> sou Mateus Andrade</h1>  
             <p className="informacoes">Sou desenvolvedor front-end</p>
             <p className="textInformation">Formado em analise e desenvolvimento de sistemas, tenho conhecimento em <br/>
             desenvolvimento Web (html,css,js,React,typescript) também tenho conhecimento em node.js<br/>
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
                  Esse projeto é baseado em um anime que eu gosto, eu fiz uma api fake para mostrar informações dos
                  personagens
                </p>
                </div>



                <div> 
             
                <img src={list} onClick={tasklist} className="imgProjects"  alt="bleach" />
                <p className="description">
                  Esse projeto é uma lista de tarefas, feita em typescript com react.js
                </p>
            
                </div>


                <div> 
             
                <img src={apiTs} onClick={apiTss} className="imgProjects"  alt="bleach" />
                <p className="description">
                  Esse projeto é uma api feita em typescript, foram utilizadas as tecnlogiás: mongoDB,winston,morgan
                </p>
            
                </div>


                <div> 
             
             <img src={apijwt} onClick={apiTJwt} className="imgProjects"  alt="bleach" />
             <p className="description">
               Esse projeto é uma api de autentição via token jwt, foi feita em node.js, foi utlizado o banco de dados mongoDB
             </p>
         
             </div>



         

          
               
              </section>

              <h1 className="cetificadosTitle">Certificados</h1>


              <div className="cerficados">
                <button className="cerficadosBtn"><a href={facu} download>Tecnólogo em analise de sistemas</a> </button>
                <button className="cerficadosBtn"><a href={typescript} download>Curso de typescript da udemy</a> </button>
                <button className="cerficadosBtn"><a href={cursoDereact} download>Curso de react.js da udemy</a> </button>
                <button className="cerficadosBtn  "><a href={node} download>Curso de node da udemy</a> </button>
              </div>

            <div>
              
            </div>
            <h1 className="cetificadosTitle">Hablidades</h1>
            <div className="Myicons"> 
            <div>
           <SiTypescript className="IconTs skillIcon"/>
           <p className="skllText">typescript</p>
           </div>
           <div> 
           <DiReact className="react skillIcon"/>
           <p className="skllText">React.js</p>
           </div>
           <div> 
           <DiJavascript1 className="javaScriptIcons skillIcon"/> 
           <p className="skllText">javascript</p>
           </div>
           <div> 
           <FaNodeJs className="nodeIcon skillIcon"/>
           <p className="skllText">node.js</p>
           </div>
           <div>
           <AiFillHtml5 className="Myhtml skillIcon"/>
           <p className="skllText">HTML</p> 
           </div>
           <div> 
           <DiCss3 className="css3Icons  skillIcon"/>
           <p className="skllText">CSS</p>
           </div>

           <div> 
           <DiGit className=" gitICOn  skillIcon"/>
           <p className="skllText">Git</p>
           </div>
          
          
           </div>
             
             


              <footer>
              <h1 classname="Myfooter">@2022 Mateus Andrade </h1>
              </footer>

           </main>
          
        </div>
    )
}

export default Home