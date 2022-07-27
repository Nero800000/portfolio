import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Button from '../components/Button'
import './Projects.css'

const Projects = () => {
    const [data,setDatas] = useState([])

    const Myfetch = async () => {
        const Fetch = await fetch('https://api.github.com/users/Nero800000/repos')
        const response = await Fetch.json()
        console.log("veio??",response)
        setDatas(response)

    }

  useEffect(()=> {
   
        Myfetch()
   
  },[])
  

   if(data) {
    console.log("veioo",data)
   }
//item.html_url
//{window.location.href=`${item.html_url}`}
    return (
        <div>
             <header> 
        <nav className="navegacao">
            <div> 
            <h1 className="title">Mateus Andrade</h1>
               <p className="sub-title">portifolio pessoal</p>
               </div>
            <ul className="lista-principal">
                 <Link to="/">< li>Home</li  ></Link>
                 <Link to="/projetos    ">< li>Projects</li  ></Link>
               <button className="contato-link"><Link className="link" to='/contato'>Contacts</Link></button>
         
               
            </ul>
        </nav>
        </header>
         <div className="line"></div>
           <div >
           <ul className='mylist'>
              {data && data.map((item,index)=>{
                return(
                  
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <Button link={item.html_url}/>
                        
                    
                    </li>
                  
                )
              })}
                </ul>
           </div>
        </div>
    )
}

export default Projects