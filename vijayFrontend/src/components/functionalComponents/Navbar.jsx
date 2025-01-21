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
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>

        </nav>
        </header>
    )

}
export default Navbar