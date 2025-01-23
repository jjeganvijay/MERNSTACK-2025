import {useRef,useEffect, useState} from "react";
const UseRef = () =>{
    var [text,seText] = useState("");
    var prevRender = useRef();
    useEffect(()=>{
        console.log(text)
        prevRender.current = text
    },[text])
   
    return(
        <div>
            <h2>This page is for useref</h2>
            <input type="text" value={text} onChange={(e)=>seText(e.target.value)}/>
            <h4>The text is {text}</h4>
            <h5>The previous Render text is {prevRender.current}</h5>
        </div>
    )

    
}
export default UseRef