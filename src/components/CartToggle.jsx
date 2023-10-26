import React from 'react'
import {  AiOutlinePlus} from "react-icons/ai";
import {  AiOutlineMinus} from "react-icons/ai";

const CartToggle = ({amt,setDec,setInc}) => {
  return (
    <div>
        <div className="cert-toggl">
            <div className="amt-toggl">
            <button className='btn' onClick={()=>{setDec()}}><AiOutlineMinus className='ct'/></button>

                <div>{amt}</div>
                <button className='btn' onClick={()=>{setInc()}}><AiOutlinePlus className='ct'/></button>

            </div>
        </div>
        </div>
  )
}

export default CartToggle