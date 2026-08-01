import {useEffect,useState} from 'react'
const useGetSingleProduct = (prodId) => {

    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetchSingleProduct();
    }, [])
    
    const fetchSingleProduct = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${prodId}`)
      const dt = await data.json();

      setProduct(dt)

    }
    return product;
}
export default useGetSingleProduct