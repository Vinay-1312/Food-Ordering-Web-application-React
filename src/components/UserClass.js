import React from "react";
class UserClass extends React.Component
{   
    constructor(props)
    {
        super(props);
       this.state ={
        userInfo : {
            name:"",
            location:"",
        }
       }
    }
   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vinay-1312");
        const json = await data.json()
        console.log(json); 
        this.setState({
            userInfo :json,
        })
    }
    render()
    {   console.log("render called");
        return (<div className="user-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>{this.state.userInfo.location}</h3>
        <h4>contact: vinaysld123@gmail.com</h4>
    </div>
    );
    }
}

export default UserClass