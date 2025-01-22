import { useState,useEffect } from "react"
import axios from 'axios'
const UseEffectApi = ()=>{
    var [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=> {setPost(res.data)}).catch((err)=>console.log(err))
    },[])
    return(
        <div>
           <h2>THis page is mint for useEffect with API.</h2> 
           <h3>
            The contains json placeholder
           </h3>
           <ol>
            {post.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}

            
           </ol>
        </div>
    )
}
export default UseEffectApi