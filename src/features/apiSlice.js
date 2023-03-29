import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
    //reducer path;
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    //Endpoints are just a set of operations that you want to perform against your server. You define them as an object using the builder syntax. There are two basic endpoint types: query and mutation.
    endpoints: (builder)=>({
        //builder.query for only reading purposes, for other operations of CRUD, we use builder.mutations
        //builder.query: An endpoint definition that retrieves data, and may provide tags to the cache.
        getAllProducts: builder.query({
            //query can be a function that returns either a string or an object which is passed to your baseQuery
            query: ()=>"products"
        }),
        getProduct: builder.query({
            query: (product)=>`products/search?q=${product}`
        })
    })
});
//auto-generated hook from the RTK Query
export const {useGetAllProductsQuery, useGetProductQuery} = dataApi;