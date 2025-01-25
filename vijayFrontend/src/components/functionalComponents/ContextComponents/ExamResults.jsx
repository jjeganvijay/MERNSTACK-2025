import { useContext } from "react";
import { ThemeProvider } from "../Hooks/UseContext";

const ExamResults= ()=>{
    const res = useContext(ThemeProvider)
    return(
        <div>
            <h3>Result Published and your SGPA is {res.sgpa} ,CGPA is {res.cgpa}</h3>
        </div>
    )
}
export default ExamResults;