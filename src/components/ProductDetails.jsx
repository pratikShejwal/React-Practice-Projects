import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Skeleton from './Skeleton'
import useGetSingleProduct from '../hook/useGetSingleProduct'

const ProductDetails = () => {

const {prodId} = useParams()


const single = useGetSingleProduct(prodId)
   if (single === null) {
    return <Skeleton/>
  }
  console.log(single);
  const {title,rating,price} = single

 
  return (
    <div>
      <h1>Product Details</h1>
      <h1>{title}</h1>
      <p>{rating.rate}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductDetails
