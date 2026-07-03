import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Skeleton from './Skeleton'

const ProductDetails = () => {
const [single, setSingle] = useState(null)
const {prodId} = useParams()

const fetchData = async ()=>{
    const data = await fetch(`https://fakestoreapi.com/products/${prodId}`)
    // console.log(data);
    const formattedData = await data.json()
    //console.log(formattedData);
    setSingle(formattedData)
   
  }

  useEffect(() => {
    fetchData()
  }, [])
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
