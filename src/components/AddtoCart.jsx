import React, { useState } from 'react'
import CartToggle from './CartToggle'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/cartcontext';

const AddtoCart = ({singleData}) => {
// destructuring add to cart function from cartContext 
let {addToCart}=useCart()

let {id,mrp}=singleData
    let [amt,setAmt]=useState(1)
    const setInc=()=>{
setAmt(amt+1)
    }
    const setDec=()=>{
     amt>1?setAmt(amt-1):  setAmt(1)
    }
  return (
    <div>

<CartToggle amt={amt} setDec={setDec} setInc={setInc} />
<br></br>
<NavLink to={"/cart"}>

  {/* adding the addtocart function to button which is called when event is triggered   */}
  
<Button variant="primary" onClick={()=>{addToCart(id,mrp,singleData)}} >      ADD TO CART</Button>

</NavLink>
    </div>
  )
}

export default AddtoCart