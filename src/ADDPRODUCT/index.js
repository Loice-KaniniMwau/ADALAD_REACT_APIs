import React,{useState} from "react";
import './style.css'
import { Link } from 'react-router-dom';
const Addproduct=()=>{
    const[id,setId]=useState("")
    const[title,settitle]=useState("")
    const[image,setImage]=useState("")
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            id:id,
            title:title,
            image:image
        };
      try{
        const response=await fetch('https://dummyjson.com/products/add',{
           method:"POST",
           headers:{
            'Content-Type': 'application/json' 
           } ,
           body:JSON.stringify(data)
        })
        const result=await response.json()
        console.log({result});
      } 
    catch(error){
        console.log(error.message);
    }
    };

    // *****************************************
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>New Product</h1>
                <input placeholder="Enter product id" type="text"
                onChange={(e)=>{setId(e.target.value)}}
                
                />
                <br/>
                <br/>
                <input placeholder="Enter title" type="text"
                onChange={(e)=>{settitle(e.target.value)}}
                
                />
                <br/>
                <br/>
                <input placeholder="Enter image url" type="url"
                onChange={(e)=>{setImage(e.target.value)}}
                
                />
                <Link to={`/Product/`}className="buton">
            <button type="submit" className="button">Add Product</button >
          </Link>

                
            
            </form>


        </div>
    )
}
export default Addproduct;