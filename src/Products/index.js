import React ,{useState,useEffect}from "react";

import './style.css'
import userEvent from "@testing-library/user-event";

const Products=()=>{
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts()

        })()

    },[])
    console.log(products);
    const getProducts=async ()=>{
        try{
            setLoading(true);
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json()
            setProducts(result.products)
            setLoading(false)
        }
        catch(error){
            console.log(error.message);

        }
          
    }
    if(loading){
        return <h2>Loading</h2>
    }
   
return(
    <div>
    <h1 id="product">All products</h1>
    <div  className="allproducts">

   
    {products.map(item=>(
        <div key={item.id} className="myproducts">
          <h2>
            <img src={item.thumbnail} />
           
          </h2>
        <h2>{item.title}</h2>
        <h2>{item.price}</h2>
        <h2>{item.discountPercentage}</h2>
        <button>View Details</button>
        </div>
        
    ))} 
    </div>
    </div>
)
}
export default Products