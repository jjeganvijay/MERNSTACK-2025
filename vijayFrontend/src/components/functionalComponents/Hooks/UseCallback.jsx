import { useState } from "react";
import ListItems from "./List";
const UseCallback = () =>{
    var [num,setNum] = useState(0);
    var [dark,setDark] = useState(true);
    var stying = {
         backgroundColor:dark?"black":"white",
         color:dark?"white":"black"
    }
    var getItems =()=>{
        return [num +1,num + 2, num +3]
    }
    
    return (
        <div style={stying}><button onClick={()=>setDark(dark => !dark)}>Change Theme</button>
           
            <h2>Welcome to UseCallback Page.</h2>
            <input
            type="number" value={num} onChange={(e)=>{
                setNum(parseInt(e.target.value));
            }} />
            
           <ListItems func={getItems} /> 
        </div>
    );
    };
    export default UseCallback;