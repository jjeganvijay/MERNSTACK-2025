import About from "./About";
const Gallery = (props) => {
    return(
        <div>
            <h2>Welcome to {props.page}Page</h2>
            <img src="sece.jpg" alt=""/>
            <h2>This is about galllery{props.image}</h2>
            <About />
            
        </div>
    )
}
export default Gallery;