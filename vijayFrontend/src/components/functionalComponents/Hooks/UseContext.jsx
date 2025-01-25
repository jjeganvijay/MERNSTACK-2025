import Invigilator from "../ContextComponents/Invigilator"
import { createContext } from "react";
export const ThemeProvider =createContext();
const Student =()=>{

    return(
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5,cgpa:6.5}}>
            <h2>athis is an explame of UseContext Hook which is the alternative of props drilling</h2>
            <h3>Students exam are done</h3>
            <Invigilator />
            </ThemeProvider.Provider>
        </div>
    )
}
export default Student