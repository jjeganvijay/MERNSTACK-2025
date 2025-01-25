import Button from "./Button";

const HoC=()=>{
    const ButtonWithTracking = trackingButtonComponent(Button);
  return(
    <div>
        <h2>This is an explmle of highrer order component</h2>
        <Button name="Login"/>
    </div>
  )
}
export default HoC;