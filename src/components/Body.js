import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
//import {productList} from "../utils/constants";
import restaurant from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofProducts,setListofProducts] = useState([])
  const [filterData,setfilterData]= useState([]);
  const [searchText,setsearchText] = useState([""])
  const PromotedCard = withPromotedLabel(RestaurantCard);
  useEffect(()=>{fetchData()},[])
   
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
     
        
        const realDataResList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
        
        //const realDataResList = json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        //console.log("here");
        setListofProducts(realDataResList);
        setfilterData(realDataResList);
     
    }
   
    
   const status = useOnlineStatus()
   if (status===false)
   {
    return(<h1>You are offline</h1>)
   } 

    if (listofProducts?.length===0)
    {
        return <Shimmer />
    }
    console.log(listofProducts);
    return (
        <div className="bg-gray-200 dark:bg-slate-800">
        <div className="flex">
            <div className="m-4 p-4 flex items-center">
                <input type="text" 
                data-testid = "searchText"
                placeholder="cafe" className="border border-solid border-black dark:bg-slate-300 text-black" value={searchText} onChange={
                    (e)=>{
                        setsearchText(e.target.value);
                    }
                }></input>  
                <button className="px-5 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>
                {

                    const filtredList = listofProducts.filter((product) => product.info.name.toLowerCase().includes(searchText));
                    setfilterData(filtredList);
                }}>Search</button>
           
            <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onClick={()=>{
                const filtredList = listofProducts.filter((product) => product.info.avgRating >=4.5 )
                setfilterData(filtredList);
            }}>Top rated restaurant</button>
            <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onClick={()=>{
                
                setListofProducts(listofProducts);
                setfilterData(listofProducts);

                
            }}>Clear</button>
           </div>
        </div>
       
        <div className="flex flex-wrap">
        {   
            
            
            filterData?.map((restaurant) => <Link className="cardLinks" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} >
               {restaurant?.info?.aggregatedDiscountInfoV3!==undefined  ? (< PromotedCard data={restaurant.info} />): <RestaurantCard  data={restaurant.info}></RestaurantCard>}</Link>)

        }
        
       
        </div>
        </div>
    )
    
    }

export default Body;