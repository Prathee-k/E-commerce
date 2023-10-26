
const cartreducer=(state,action)=>{
    if(action.type==="ADD_TO_CART"){
let {id,mrp,singleData}=action.payload
console.log(singleData);
let cartproduct;
cartproduct={
    id,mrp,model:singleData.model, image:singleData.productPic
}   
return{
    ...state,
    cart:[...state.cart,cartproduct]

} 


}
if(action.type==="REMOVE_ITEM"){
let updCart=state.cart.filter((c)=> c.id!==action.payload)
return{
    ...state,
    cart:updCart
}

}


if(action.type==="DELETE"){
    return{
        ...state,
        cart:[]
    }
    
    }
return{
    state,

} 
   
}
export default cartreducer