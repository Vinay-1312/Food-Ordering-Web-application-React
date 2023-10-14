import { imageURL } from "../utils/constants";
const RestaurantCard = (resdetails) =>{ 
    console.log(resdetails);
    const {name,costForTwo,cloudinaryImageId,avgRating,locality} = resdetails.data
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[400px] dark:bg-slate-500">
         <img src = {imageURL+cloudinaryImageId} className="rounded-lg h-[65%] w-[100%]"></img>
         <h3 className="font-bold">{name}</h3>
         <h4>{costForTwo}</h4>
         <h4>Rating {avgRating} Star</h4>
         <h4>Location {locality}</h4>
       
    </div>
        
    );
}

export const withPromotedLabel = (RestaurantCard) =>
{

    return (props) =>
    {   
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">{
                props?.data?.aggregatedDiscountInfoV3?.subHeader!==undefined?props?.data?.aggregatedDiscountInfoV3?.header + " " + props?.data?.aggregatedDiscountInfoV3?.subHeader :props?.data?.aggregatedDiscountInfoV3?.header}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
 
export default RestaurantCard;