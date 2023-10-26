import React from 'react'
import { useProduct } from '../context/product'
import Product from './Product'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
const Displayproducts = () => {

    let {isLoading,featureProducts}=useProduct()
    console.log(isLoading);
    console.log(featureProducts);

    if(isLoading){
        return<> ...Loading </>
    }
  return (
       <div className="container">
      
        <div className="prod">
       {featureProducts.map((x,i)=>{
        return <Product key={i} {...x} />
       })}
        
        </div>
        
        </div>
  )
}

export default Displayproducts