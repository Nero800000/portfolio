import React, { useState,useEffect } from 'react'

import Button from '../components/Button'
import './Projects.css'
import Navbar from '../components/Navbar'

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
                <Navbar/>
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