import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../context/product'
import Pagenav from './Pagenav'
import Formatprice from '../Helpers/Formatprice'
import AddtoCart from './AddtoCart'



// let api = "http://localhost:5000/products"

const Singleproduct = () => {

//destructuring getSingle, singleLoading, singleData from product.js by custom hook
  const { getSingle, singleLoading, singleData } = useProduct()
  let { brand, productType, productPic, color, model, description, mrp } = singleData
  let { id } = useParams()

  useEffect(() => {
    getSingle(`http://localhost:5000/products/${id}`)
  }, [])

  return (
    <div>
      <div className='direction'>
        <Pagenav type={productType} />

      </div>

      <section className='single-p'>
        <div className="l1">
          <img src={productPic} alt="" height={500} />
        </div>
        <div className='details'>
          <h4>Product Details</h4>
          {model}<br></br>
          Price:<del><Formatprice mrp={mrp + 500000} /></del> <br></br>
          DiscountPrice:<Formatprice mrp={mrp} /><br></br>
          Brand  : {brand}<br></br>
          Color: {color}<br></br>
          {/* Model :<br></br> */}
          Description :<span className='desc'>{description}</span><br></br><br></br>
          <AddtoCart singleData={singleData} />


        </div>
      </section>
    </div>
  )
}

export default Singleproduct