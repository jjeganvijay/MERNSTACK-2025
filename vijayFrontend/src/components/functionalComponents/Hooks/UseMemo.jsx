import { useState ,useMemo} from "react";

var slowFunction=(num)=>{
    for(var slow = 0; slow<10;slow++){}
    return num *2
}
const UseMemo = ()=>{
    var [num,setNum] = useState(0);
    var [dark,setDark] = useState(false);
    var styling = {
        backgroundColor:dark ? "black" : "white",
        color: dark? "white" : "black"
    }
    var doublingUpNumber = useMemo(()=>{
        return slowFunction(num)
    },[num])

    return(
        <div style={styling}>
           
            <h2>This page is ment  for UseMemo Hook.</h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>setDark(curTheme => !curTheme)}>Toggle Theme</button>
            <h4 >The number is {doublingUpNumber}</h4>
        </div>
    )

}
export default UseMemo