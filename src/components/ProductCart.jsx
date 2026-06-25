import Product from "./Product";
import productData from "../utils/FakeAPI";
import { useState } from "react";
const ProductCart = () =>{

  const [list, setList] = useState(productData)
  
  

    return (

        <div>
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