import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () =>
{   
    
    return(<div>
        <h1>About</h1>
        <h2>About page</h2>
       <UserContext.Consumer>
        {({loggedInUser})=>
        (
            <h1>{loggedInUser} </h1>
        )}</UserContext.Consumer> 
        
       
        <UserClass name="Vinay Class"/>
        
    </div>);
}

export default About