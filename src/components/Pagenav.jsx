import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Pagenav = ({type}) => {

    return (
    <div>
        <NavLink to={"/home"}>
        <Button variant="primary" > Go back  to Home page    </Button>
         </NavLink> <span className='h-dir'> /{type}  </span> 
    </div>
  )
}

export default Pagenav