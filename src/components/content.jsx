import image1 from "../Images/image1.jpeg"
import image2 from "../Images/image2.jpeg"
import image3 from "../Images/image3.jpeg"
import image4 from "../Images/image4.jpeg"
import image5 from "../Images/image5.jpeg"
const Content = () => {
    return (
    <div>
        <Titles/>
        <Headlines/> 
        
    </div>
  );
}

const Headlines = () => {
    return (
        <div class="headlines">
        <News image={image1} heading="What's a PM to do when even kids joke about his future?"/>
        <News image={image2} heading = "How many wine bottles fit in a suitcase - and other questions"/>
        <News image ={image3} heading ="The Covid rules when Downing Street parties were held"/>
        <News image ={image4} heading ="Grassroots Tories vote unanimously against PM"/>
        <News image ={image5} heading= "How many No 10 lockdown parties do we know about?" />
        </div>

    )
}
// props = {title: "value"}
const News = (props) => {
  return (
    <div class = "pics2">
    <img src={props.image} alt =""></img>
    
    <Heading heading={props.heading} />
    </div>
  )
}
const Heading = (props)=> {
  return (
  <p class="subheading">{props.heading}</p>
  )
}
                

const Titles = () => {
    return (
        <div class="title">
        <h2>Climate Change</h2>
        <h4>See All</h4>
        </div>
    )
}








export default Content

