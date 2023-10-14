import { useState } from "react";
const User = () =>
{
    const [count,setCount] = useState(0);
    return (<div className="user-card">
        <h1>Count:{count}</h1>
        <h2>Name: Vinay</h2>
        <h3>Location: Norwich</h3>
        <h4>contact: vinaysld123@gmail.com</h4>
    </div>

    )
}
export default User;