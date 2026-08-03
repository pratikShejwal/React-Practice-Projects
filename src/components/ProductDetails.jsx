import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Skeleton from './Skeleton'
import useGetSingleProduct from '../hook/useGetSingleProduct'
import { addItems } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const ProductDetails = () => {

const {prodId} = useParams()
const dispatch = useDispatch()

const single = useGetSingleProduct(prodId)
   if (single === null) {
    return <Skeleton/>
  }
  console.log(single);
  const {title,rating,price} = single

 const handleCart =()=>{
  dispatch(addItems(single))
 }
 
  return (
    <div>
      <h1>Product Details</h1>
      <h1>{title}</h1>
      <p>{rating.rate}</p>
      <p>{price}</p>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  )
}

export default ProductDetails
