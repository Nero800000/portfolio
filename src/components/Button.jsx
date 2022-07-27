import React from 'react-router-dom'
import './Button.css'

const Button = ({link}) => {
    const handleLink = () =>{
        window.open(`${link}`, "_blank")
    // window.location.href= `${link}`
      
    }  
    
    return (
        <button className='mybutton' onClick={handleLink}>Project</button>
    )
}

export default Button