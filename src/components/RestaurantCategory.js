import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex,modifyProps}) =>
{
    
    
    const [itemCount,setItemCount] = useState(0)

    const handleClick = () =>
{   
    setItemCount(1);
    if (itemCount===1)
    {   
        setItemCount(0)
        modifyProps();
    }
    else
    {
    setShowIndex();
    
    }

    
   

}
 
return(
    <div  className="dark:bg-slate-800"> 
<div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4  dark:bg-slate-600" >
<div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>  
<span className="font-bold text-lg dark:text-white">{data?.title} ({data?.itemCards?.length})</span>
<span className="hover:cursor-pointer" >🔽</span>
</div>
 {showItems && <ItemList key={data?.id} data={data?.itemCards} />}
</div>
</div>
)
}
export default RestaurantCategory;