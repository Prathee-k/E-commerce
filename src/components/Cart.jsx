import React from 'react'
import { useCart } from '../context/cartcontext'
import Cartitem from './Cartitem';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from "react-icons/ai";


const Cart = () => {


    let { cart, clearItem } = useCart()
    if (cart.length === 0) {
        return <div className='empty'>
            <img src="https://img.freepik.com/free-vector/binary-code-concept-illustration_114360-6698.jpg?w=740&t=st=1698250575~exp=1698251175~hmac=add1b9c3aee79a958db920a8d449eb44d38c6325db566a7d9a4fd160e03fcbf1" height={450} alt="" />
            <br />
            <h1>
                No items in cart

            </h1>

            <br />

            <NavLink to={"/home"} >
                <Button variant="primary" >      Continue Shopping</Button>


            </NavLink>
        </div>
    }
    return (
        <div>
            <div className='c-m'>
                <AiOutlineShoppingCart className='cart' />
                <h1 className='c-h'>cart summary</h1>

                <div style={{ position: "relative", left: "450px", top: "15px" }}>
                    <NavLink to={"/signin"}>
                        <Button variant="primary" >      Logout</Button>

                    </NavLink>
                </div>
            </div>

            <div className="container">

                <div className="cart_heading-grid-grid-five-column">
                    <p>Item</p>
                    <p className="cart-hide">Price</p>
                    <p>Quantity</p>
                    <p className="cart-hide">Subtotal</p>
                    <p>Remove</p>
                </div>
                <hr />

                <div className="cart-item">
                    {cart.map((x, i) => {
                        return <Cartitem key={i} {...x} />
                    })}
                </div>
                <hr />

                <div className="cart-btn">
                    <NavLink to={"/home"} >
                        <Button variant="primary" >      Continue Shopping</Button>


                    </NavLink>
                    <Button variant="danger" onClick={clearItem} style={{ position: "relative", left: "850px" }}>       Clear cart</Button>

                </div>
            </div>



        </div>


    )
}

export default Cart