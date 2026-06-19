const Product = (props)=>{
    console.log(props);
    
    const {image,title,price,rating} = props.product;
    return (
        <div className='product'>
            <img className='prodImg' src={image} alt="" />
            <h1>
                {title}
            </h1>
            <p>{rating.rate}</p>
            <p>{price}</p>
        </div>
    )
}

export default Product