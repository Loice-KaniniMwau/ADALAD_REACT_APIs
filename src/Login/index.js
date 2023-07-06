import React,{useState} from "react";
import './style.css'
import { Link } from 'react-router-dom';
const Login=()=>{
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    console.log({username});
    console.log({password});
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            username:username,
            password:password,
        };
      try{
        const response=await fetch('https://dummyjson.com/auth/login',{
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
                <h1>Login</h1>
                <input placeholder="Enter User name" type="text"
                onChange={(e)=>{setUsername(e.target.value)}}
                
                />
                <br/>
                <br/>
                <input placeholder="Enter password" type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                
                />
                <br/>
                <br/>
                <Link to={`/Product/`}className="buton">
            <button type="submit" className="button">Login</button >
          </Link>

                
                {/* <button type="submit">Login</button> */}

                {/*   <Link to={`/Details/${item.id}` }className="buton">
            <button type="submit" className="button">View details</button >
          </Link> */}
            </form>


        </div>
    )
}
export default Login;