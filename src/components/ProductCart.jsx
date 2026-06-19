import Product from "./Product";
import productData from "../utils/FakeAPI";
const ProductCart = () =>{
 
    return (
        <div className='productCart'>
            {/* <Product productData = {productData[0]}/> */}
       {
        productData.map((product,ind)=>{
            return (
                <Product key={ind} product={product}/>
            )
        })
    }
        </div>
    )
}

export default ProductCart;