const trackingButtonComponent = (Component)=>{
    return(props)=>{
        console.log("Hoc Tracking Comp");
        const handleClick=()=>{
            console.log("Logged In Fetch the Tracking Info",props.tracking)
        }
        return(
            <div>
            <h1>This is the Higher Order Component</h1>
            <component name="Login" trackingInfo={customId:"1524367089",password}
            
            </div>
        )
    }
}
export default trackingButtonComponent