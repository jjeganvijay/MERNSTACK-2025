import { useState } from "react";


{/* EVENT HANDLING */}
const About = () => {
    var [text,setText]=useState("vijay");
    function handletext(e){
        setText(e.target.value)
    }
    return(
        <div>
            <h2>This is about components</h2>
            <h3>Textarea</h3>
            <textarea value={text} onChange={(event)=>setText(event.target.value)}/>
            <textarea value={text} onChange={handletext}/>
            <p>The text is {text}</p>
        </div>
    )
}
export default About;