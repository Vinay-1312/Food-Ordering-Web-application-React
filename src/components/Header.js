import {Logo_URL}  from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { dark } from "../utils/darkSlice";
import Switcher from "./Switcher";

const Header = () => {
    const [btnName,setBtnValue ] = useState(["Login"]);
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const [isChecked, setIsChecked] = useState(false);
    //Subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch(dark)
    const toggleChecked = () => {
        setIsChecked(!isChecked);
        dispatch(dark(!isChecked));
        
      };
    const addlist = () =>
    {
        if (btnName === "Logout")
        {
            return <li>{data.loggedInUser} </li>
        }
    }
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 dark:bg-slate-700">
        <div className="Logocontainer">
            <img src = {Logo_URL}  className="w-1/5" alt="not loaded"></img>
        </div>
        <div className="flex items-center">
        <Switcher />
            <ul className="flex p-10">
            
        
   
                <li className="px-5 dark:text-white">Online Status:{onlineStatus? "✅":"🔴"}</li>
                <li className="px-5  dark:text-white"> <Link to="/"> Home</Link></li>
                <li className="px-5  dark:text-white"> <Link to="/about">About Us</Link></li>
                <li className="px-5  dark:text-white"><Link to="/cart">🛒 ({cartItems.length})</Link></li>
                <li className="px-5  dark:text-white"><Link to="contact">Contact us</Link></li>
                <li className="px-5  dark:text-white"><Link to="grocery">Grocery</Link></li>
                <button className="px-5 py-0 align-top  dark:text-white" onClick={
                    ()=>{
                     if (btnName==="Login"){
                        setBtnValue("Logout");
                     }  
                     else
                     {
                        setBtnValue("Login");
                     } 
                    }
                }>{btnName}</button>
             {addlist()}
             
            </ul>
        </div>  
    </div>
    );
    
    }
  export default Header;