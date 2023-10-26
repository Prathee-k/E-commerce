import React, { useState } from 'react'
import Formatprice from '../Helpers/Formatprice'
import CartToggle from './CartToggle'
import { BsFillTrashFill  } from "react-icons/bs";
import { useCart } from '../context/cartcontext';

const Cartitem = ({id,model,mrp,image}) => {
//destructuring removeItem function from cartcontext by custom hook 
    let {removeItem}=useCart()
    let [amt,setAmt]=useState(1)

    const setInc=()=>{
        setAmt(amt+1)
            }
            const setDec=()=>{
             amt>1?setAmt(amt-1):  setAmt(1)
            }
  return (
    <div  className="cart_heading-grid-grid-five-column">
        <div className="cart-item">
            <div>
                <figure>
                <img src={image} alt="" width={120}/>

                </figure>
            </div>
            <div>
                <p>{model}</p>
            </div>



        </div>
<div className="cart-price">
    <p><Formatprice mrp={mrp}/></p>
</div>

<div className="qty">
<CartToggle amt={amt} setDec={setDec} setInc={setInc} />

</div>

<div className="subtot">
    <p><Formatprice mrp={mrp*amt}/></p>
</div>


{/* //remove item from cart */}
<div className="remove">
<BsFillTrashFill onClick={()=>{removeItem(id)}}/>
</div>
    </div>
  )
}

export default Cartitem