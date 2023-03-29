import React from 'react'
import { useGetAllProductsQuery, useGetProductQuery } from '../features/apiSlice'
const Data = () => {
    const {data: allProducts, isLoading} = useGetAllProductsQuery()
    const {data: iPhoneProduct}=useGetProductQuery('iphone')
    console.log(iPhoneProduct);
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        {allProducts.products.map((item)=>{
            return(<article key={item.id}>
                    <h3>{item.brand}</h3>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
            </article>)
        })}
    </div>
  )
}

export default Data