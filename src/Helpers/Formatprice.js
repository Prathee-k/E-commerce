import React from 'react'

const Formatprice = ({mrp}) => {
  return Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:2
  }).format(mrp/100)
}

export default Formatprice