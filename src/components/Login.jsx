import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

    let [inp, setInp] = useState({ username: "", email: "", date: "", password: "" })
    let [val, setVal] = useState([])
    let navigate = useNavigate()
    let getInfo = (e) => {
        // console.log(e.target.value);
        let value = e.target.value
        let name = e.target.name
        // console.log(value,name);
        setInp(() => {
            return {
                ...inp, [name]: value
            }
        })
    }
//User creation and saving data to local storage 
    let submitData = (e) => {
        e.preventDefault()
        console.log(inp);
        let { username, email, date, password } = inp
        if (username === "") {
            alert("please enter the username")
        } else if (email === "") {
            alert("please enter the email address")
        } else if (date === "") {
            alert("select your date of birth ")
        }
        else if (password === "") {
            alert("password field is mandatory")
        } else {
            console.log("sucesssss");
            let users = JSON.parse(localStorage.getItem('userdetails')) || []
            users.push(inp)
            localStorage.setItem("userdetails", JSON.stringify(users))
            alert("user registered successfully")
            navigate("/signin")
        }


    }
    return (
        <div>



            <div className="box mt-3">
                <section className='d-flex justify-content-between align-items-center'>
                    <div className="left" >
                        <img src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-2713.jpg?w=1060&t=st=1697809257~exp=1697809857~hmac=8f07170b20fc4aa0052ba1b5aafb7d76b6ae6a7c78260acc473f15132dbc33cf" width={900} alt="" />

                    </div>
                    <div className="right m-5" style={{ width: "100%" }}>
                        <h2>Welcome to ShoppingKart</h2> <br />
                        <h4>Sign up  to continue</h4>
                        <br />
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmai">
                                <Form.Control type="text" name='username' onChange={getInfo} placeholder="Enter Username" autoComplete='off' />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getInfo} placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEma">
                                <Form.Control type="date" name='date' onChange={getInfo} />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getInfo} placeholder="Password" />

                            </Form.Group>

                            <Button variant="primary" className='col-lg-3' type="submit" onClick={submitData} >
                                Register
                            </Button>
                            <br />
                            <br />

                            <p className='mt-2'>Already have an account ?<Link to='/signin'><span className='mx-2'>Sign In</span> </Link> </p>
                        </Form>


                    </div>
                </section>
            </div>

        </div>
    )
}

export default Login