
import photo1 from "../Images/photo1.jpeg"
import photo2 from "../Images/photo2.jpeg"
import photo3 from "../Images/photo3.jpeg"
import photo4 from "../Images/photo4.jpeg"

const Carousel = () => {
    return (
    <div>
        
        <Main/> 
        
    </div>
  );
};

const Main = () => {
    return (
        <div class="headlines">
        <Topic image={photo1} heading="Outdoor Getaways"/>
        <Topic image={photo2} heading = "Unique Stays"/>
        <Topic image ={photo3} heading ="Entire Homes"/>
        <Topic image ={photo4} heading ="Pets Allowed"/>
        </div>

    )
};
// props = {title: "value"}
const Topic = (props) => {
  return (
    <div class = "pics2">
    <img src={props.image} alt = ""></img>
    
    <Heading heading={props.heading} />
    </div>
  )
};
const Heading = (props)=> {
  return (
  <p class="subheading">{props.heading}</p>
  )
};
                
export default Carousel;





