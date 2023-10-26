import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const Error = () => {
    let navigate=useNavigate()

    let goBack=()=>{
        navigate("/home")
    }
  return (
    <div style={{textAlign:"center"}} >
        <img style={{display:"block",margin:"auto"}} src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1698038846~exp=1698039446~hmac=1f4bc41f9b2ae8280e2823857157117705bcbf22f152287d7425b9b475bc39e4" width={500}alt="" />
    
    The page you are looking for no longer exists, to go back to home page click the button <br /><br />
   <Button variant="primary" onClick={goBack}>Home</Button>
    </div>
  )
}

export default Error