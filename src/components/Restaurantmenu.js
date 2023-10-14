
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


import userestaurantMenu from "../utils/userestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const Restaurantmenu = () =>
{
    /*useEffect(()=>{
   fetchmenu();
    },[])
    const {resid} = useParams();
    const [resInfo,setResInfo] = useState([])
    console.log(menuAPI);
    const fetchmenu = async () =>

    {
        const data = await fetch(menuAPI+resid+"&catalog_qa=undefined&submitAction=ENTER")
         const json = await data.json();
         console.log(json);
         setResInfo(json?.data);
    }
    */
   const [showindex,setShowIndex] = useState(null);
    const {resid} = useParams();
    const resInfo = userestaurantMenu(resid)
    if (resInfo===null)
    {
        return <Shimmer />
    }
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cards => cards?.card?.card?.["@type"].endsWith("ItemCategory"))
   
    return(
        <div  className="text-center dark:bg-slate-800">
           <h1 className="font-bold m-6 p-6 dark:text-white">{name}</h1> 
        
      
        {itemCards?.map((category,index)=><RestaurantCategory  key = {category?.card?.card?.title} data={category?.card?.card} 
        showItems={index===showindex && true}
        modifyProps = {() =>setShowIndex(null) }
        setShowIndex={()=>setShowIndex(index)}
        
        /> )}
        </div>
    )
}
export default Restaurantmenu;