function Product(props){ //{props}
    console.log(props)
    //state
    const {productObj}=props
    //return
      return(
        <div className="shadow-3xl text-center p-2 bg-amber-500 rounded-3xl">
        <div > 
            <h1 className="text-2xl text-blue-400">{productObj.title}</h1>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-bold">{productObj.description}</p>

        </div>
        </div>
    )
}

export default Product