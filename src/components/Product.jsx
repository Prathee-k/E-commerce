import React from 'react'
import { NavLink, useParams } from 'react-router-dom'


const Product = (x) => {
  let { id, productPic, productType, description, model,mrp } = x

  return (
    <div>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={productPic} width={200} height={250} />
            <h5 style={{textAlign:"center",margin:"5px",padding:"5px",textDecorationLine:"none"}}>{productType}</h5>
            {/* <figcaption className="caption">{productType}</figcaption> */}
          </figure>

          <div className="card">
            <div className="card-data">
              {/* <p>{model}</p> */}
              {/* <p className="card-price"><Formatprice mrp={mrp} /> </p> */}
            </div>
          </div>
        </div>

      </NavLink>
    </div>
  )
}

export default Product