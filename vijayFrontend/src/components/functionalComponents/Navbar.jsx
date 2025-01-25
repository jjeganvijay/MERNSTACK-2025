import {Link} from 'react-router-dom'
import "../../css/Nabar.css"
import { useState } from 'react'
const Navbar = () => {
    var [dropdown,showDropdown] = useState(false)
    const toggleDroupdown=()=>{
        showDropdown(droupdown=>!droupdown);
    }
    return(
        <header>
        <nav>
        <ul>
            <li><Link class="link" to="/">Home</Link></li>
            <li><Link class="link" to="/About">About</Link></li>
            <li><Link class="link" to="/Contact">Contact</Link></li>
            <li><Link class="link" to="/Gallery">Gallery</Link></li>
            <div>
                <span onMouseEnter={toggleDroupdown} >Hooks</span>
               {dropdown && (<ol onMouseLeave={toggleDroupdown}>
                    <li><Link to="/react-lifecycle-methods" target='_blank'>Lifecycle</Link></li>
                    <li><Link to="/use-state" target='_blank'>userState</Link></li>
                    <li><Link to="useEffect" target='_blank'>UseEffect</Link></li>
                    <li><Link to="UseEffectAPI" target='_blank'>UseEffectAPI</Link></li>
                    <li><Link to="/useimg" target="_blank">useAPIimg</Link></li>
                    <li><Link to="UseRef" target='_blank'>UseRef</Link></li>
                    <li><Link to="UseMemo" target='_blank'>UseMemo</Link></li>
                    <li><Link to="UseCallback" target='_blank'>UseCallback</Link></li>
                    <li><Link to="Student" target='_blank'>UseContext</Link></li>
                    <li><Link to="/function-class" className="Link" >FunctionInsideClass</Link></li>
                </ol>)}
            </div>
            <div>
                <span onMouseEnter={toggleDroupdown} >Memoization</span>
               {dropdown && (<ol onMouseLeave={toggleDroupdown}>
                    <li><Link to="/memo" class="link">React.memo</Link></li>
                </ol>)}
            </div>

            <li><Link class="link" to="/Signup">Signup/login</Link></li>
            
        </ul>
        </nav>
        </header>
    )
}
export default Navbar;