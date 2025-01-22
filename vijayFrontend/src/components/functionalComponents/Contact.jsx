import { useState } from "react";

const Contact = () => {
    var [num,setNum] = useState(0)
   function aad(){
    return setNum(num+1)
   }

  
    return(
        <div>
            <h2>Welcome to contact page</h2>
            <h3>this is a state example</h3>
            <h4>The number is {num}</h4>
            <button onClick={aad}>+</button>
            

        </div>
    )
}
export default Contact