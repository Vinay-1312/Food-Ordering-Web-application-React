import { useEffect, useState } from "react";
import { menuAPI } from "../utils/constants";
const userestaurantMenu = (resID) =>
{
    useEffect(()=>{
        fetchmenu();
         },[])
    const [resInfo,setResInfo] = useState(null);

    const fetchmenu = async () =>
    {
        const data = await fetch(menuAPI+resID+"&catalog_qa=undefined&submitAction=ENTER")
         const json = await data.json();
       
         setResInfo(json?.data);
    }
    return resInfo;

}

export default userestaurantMenu;