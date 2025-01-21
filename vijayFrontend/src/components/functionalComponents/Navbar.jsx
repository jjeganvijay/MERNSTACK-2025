import {Link} from 'react-router-dom'
import '../../css/Nabar.css'

const Navbar = () =>{
     var styling={textDecoration:"underline",
        color:"blue",
        listStyleType:"none",
        textAlign:"center",
    }
    return(
        <header>
        <nav>
            <ul style={styling}>
                <li><a class="link" href='/Home'>Home</a></li>
                <li><a class="link" href='/About'>About</a></li>
                <li><a class="link" href='/gallery'>Gallery</a></li>
                <li><a class="link" href='/contact'>Contact</a></li>
                <li><a class="link" href='/Signup'>Signup</a></li>
            </ul>

        </nav>
        </header>
    )

}
export default Navbar