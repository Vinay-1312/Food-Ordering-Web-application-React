import { useDispatch, useSelector } from "react-redux";
import {imageURL} from "../utils/constants";
import { addItem, removeItem,updateCount,decreaseCount } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updatePrice } from "../utils/priceSlice";



const ItemList = ({data}) =>
{   
    const dispatch = useDispatch(addItem);
    const dispatchRemove = useDispatch(removeItem)
    const dispatchUpdate = useDispatch(updatePrice)
    const dispatchCount = useDispatch(updateCount)
    const dispatchDCount = useDispatch(decreaseCount)
    const [records,setRecords] = useState([]);
    const cartItems = useSelector((store)=>(store.cart.items))
    const totalPrice  = useSelector((store)=>store.price.totalPrice)
    const [tPrice,setTotalPrice] = useState(totalPrice)
    const temp = []
    const handleAddItem = (item) =>
    {
        //console.log("here");
       //console.log(item);
       
        //find item exist
        //if yes then incrase the count
        //else set the count to 1
        //const addedItems = cartItems?.filter((it)=> item?.card?.info?.id=== it?.card?.info?.id )
    
    
        
        dispatch(addItem(item));
      
        
        dispatchUpdate(updatePrice(tPrice+((item.card?.info?.price)/100)))
        setTotalPrice(tPrice+((item.card?.info?.price)/100))
        
      

       
    }
    const PriceDisplay =  () =>
    {
        if(cartItems?.length>0)
        {  
        
         
        return(
            <div className=" fixed bottom-0 right-1/4 w-6/12 h-10 bg-green-500 text-white p-2 mx-auto flex justify-between dark:bg-slate-700">
                <h1 className="font-bold font-size-10px">₹ {tPrice.toFixed(2)} | items({cartItems.length})</h1>
                <Link to="/cart">View Cart</Link>
            </div>

        )
    }
    else
    {
        setTotalPrice(0);   
    }
    }

    

    

    const handleRemoveItem = (item) =>
    {
        
        
        const index = cartItems?.indexOf(item)
        
        dispatchRemove(removeItem(index));
        
        dispatchUpdate(updatePrice(tPrice-(item.card?.info?.price/100)))
        setTotalPrice(tPrice-(item.card?.info?.price/100))
      
       //console.log(cartItems?.filter((it)=> item?.card?.info?.id=== it?.card?.info?.id).length); 
       
    }
    const Finaldata = ({displayData})=>
    {
        if(!temp.includes(displayData))
        {
            temp.push(displayData);  
            return(
                <div key={displayData?.card?.info?.id} className="m-2 p-2 border-b-2  text-left flex justify-between dark:text-white"> 
      
        <div className="w-9/12 ">
            <div className="py-2">
        <span>{displayData?.card?.info?.name}  </span>
        <span> - ₹ {displayData?.card?.info?.price/100}</span>
        </div>
       <div>
        <p>{displayData?.card?.info?.description} </p>
        </div>
        
            </div>
            <div className="w-3/12 p-4 ">
            <div className="absolute">
            { /*<button className="p-2 mx-10 bg-black text-white shadow-lg  rounded-lg" onClick={
            ()=>handleAddItem(item)}>Add  +</button> */}
            <AddButton data = {displayData} />
            </div>
            <img src = {imageURL+displayData?.card?.info?.imageId}></img>
           
            </div>
            <PriceDisplay />
        </div>
        
            )
        }
    }

    const AddButton = ({data}) =>
    {
        const addedItems = cartItems?.filter((it)=> data?.card?.info?.id=== it?.card?.info?.id).length
        if(addedItems ===0)
        {
        return (
        <button className="p-2 mx-10 bg-black text-white shadow-lg  rounded-lg" onClick={
            ()=>handleAddItem(data)}>Add  +</button>
        )
        }
        else
        {
           return( 
           <div className="px-4">
           <button className="bg-black text-white shadow-lg  rounded-lg px-2 m-2 cursor-pointer" onClick={
                ()=>handleAddItem(data)}>+</button>
                <label className="text-white font-bold m-2"> {addedItems}</label>
                <button className="bg-black text-white shadow-lg  rounded-lg px-2 m-2 cursor-pointer" onClick={
                ()=>handleRemoveItem(data)}> -</button>
              
                </div>
            )
        }
    }
    return(
    <div>
        {data?.map(item=> (

            <Finaldata displayData={item} />
        
    
        
        ))}
        
    </div>
        )
}
export default ItemList;