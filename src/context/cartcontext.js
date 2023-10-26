import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartreducer"
let CartContext=createContext()

export let CartProvider=({children})=>{

    let initialState={
        cart:[],
        total_amt:"",
        total_item:"",
        shipping:50000
    }
    let [state,dispatch]=useReducer(reducer,initialState)

    //function to add product to cart
 let addToCart=(id,mrp,singleData)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,mrp,singleData}})
    }

    //function to remove product from cart
let removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }


//function to empty the cart 
    let clearItem=()=>{
        dispatch({type:"DELETE"})
    }
    return <CartContext.Provider value={{...state,addToCart,removeItem,clearItem}}>
{children}

    </CartContext.Provider>
}

//creating custom hook and resusing the logic where it is required
export let useCart=()=>{
    return useContext(CartContext)
}