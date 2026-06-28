import Product from "./Product";
import Skeleton from "./Skeleton";
import productData from "../utils/FakeAPI";
import { useState,useDeferredValue,useEffect } from "react";
const ProductCart = () =>{

  const [list, setList] = useState([])
  const [btName, setBtname] = useState('light')
  // let btName = 'light'
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async ()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    console.log(data);
    const formattedData = await data.json()
    console.log(formattedData);
    setList(formattedData)
  }

  //console.log('rendering');
  
  if (list.length === 0) {
    return <Skeleton/>
  }
  
    return (
        <div>
          <button onClick={()=>{
            console.log('clicked');
            btName == 'light'?setBtname('dark'):setBtname('light')
          }}>{btName}</button>
            <button onClick={()=>{
              // console.log(lists);
              // console.log('filter applied');
              let li = list.filter(product=>product.rating.rate>4);
              // console.log(li);
              setList(li);
            }} type="button">Top rated product</button>
        
        <div className='productCart'>
            {
             list.map((product,ind)=>{
              return (
                <Product key={ind} product={product}/>
            )
        })
    }
        </div>
        </div>
    )
}

export default ProductCart;