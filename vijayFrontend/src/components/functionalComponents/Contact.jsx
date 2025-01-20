import { useState } from "react";

const Contact = () => {
   function aad(){
    setNum(num+1)
   }

    var [num,setNum]=useState(0);
    return(
        <div>
            <h2>Welcome to contact page</h2>
            <h3>this is a state example</h3>
            <h4>The number is {num}</h4>
            <button onClick={aad}>+</button>
            <button onClick={()=>setNum(num+5)}>ADD</button>

        </div>
    )
}
export default Contact