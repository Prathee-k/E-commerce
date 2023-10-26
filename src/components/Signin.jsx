import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Signin = () => {

    let [inp, setInp] = useState({ email: "", password: "" })
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
    
//retrieving data from local storage comparing the data, continue to next page onlt if login
// credentials are matching

    let submitData = (e) => {
        e.preventDefault()
        let userInfo = localStorage.getItem("userdetails")
        console.log(userInfo);
        let { email, password } = inp
        if (email === "") {
            alert("please enter the email address")
        }
        else if (password === "") {
            alert("password field is mandatory")
        } else {
            let user = JSON.parse(userInfo)
            let userlogin = user.filter((e, i) => {
                return e.email === email && e.password === password
            })
            console.log(userlogin);
            if (userlogin.length === 0) {
                alert("Login credentials are not matching")
            }
            else {
                console.log("sucesssss");
                navigate("/home")

            }
        }


    }
    return (
        <div>

            <div className="box mt-3">
                <section className='d-flex justify-content-between align-items-center'>
                    <div className="left" >


                        <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=1380&t=st=1697962921~exp=1697963521~hmac=705015957a7d6ab66ade5c3f3a5d0a57fb1577b194cad77d6c4d84389fa6524f" width={850} height={650} alt="" />
                    </div>
                    <div className="right m-5 p-5" style={{ width: "100%" }}>
                        <h2>Welcome to ShoppingKart</h2> <br />
                        <h4>Sign In  to continue</h4>
                        <br />
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getInfo} placeholder="Enter email" />

                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getInfo} placeholder="Password" />

                            </Form.Group>

                            <Button variant="primary" className='col-lg-3' type="submit" onClick={submitData} >
                                Login
                            </Button>


                        </Form>


                    </div>
                </section>
            </div>

        </div>
    )
}

export default Signin