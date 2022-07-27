import React from 'react' ///https://www.linkedin.com/in/mateus-andrade-116559223/
import './Contact.css'
import {CgMail} from 'react-icons/cg'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFillPhoneFill} from 'react-icons/bs'  //MateusAndrade.github.io
import {AiFillFacebook} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Contact = () => {
        
    const handleFacebook = () => {
        const url = 'https://www.facebook.com/profile.php?id=100015512023360'
        window.open(`${url}`, "_blank")
    }
    const handleLinkdin = () => {
        const url = 'https://www.linkedin.com/in/mateus-andrade-116559223/'
        window.open(`${url}`, "_blank")
    }
    return (
        <div className='principal'>
               <header> 
        <nav className="navegacao">
            <div> 
            <h1 className="title">Mateus Andrade</h1>
               <p className="sub-title">portifolio pessoal</p>
               </div>
            <ul className="lista-principal">
                <Link to="/">< li>Home</li  ></Link>
                <Link to="/projetos">< li>Projects</li></Link>
                
                <button className="contato-link"><Link className="link" to='/contato'>Contacts</Link></button> 
            </ul>
        </nav>
        </header>
         <div className="line"></div>
         <div className="icons">
         <CgMail/><p>balrogsinistro@gmail.com</p>
          
          <button className='button-icon' onClick={handleFacebook}><AiFillFacebook/></button>  
          <button className='button-icon' onClick={handleLinkdin}><AiFillLinkedin/> </button>
          <BsFillPhoneFill/> <p>11 965031583</p>
             
         </div>
          


        </div>
    )
}

export default Contact