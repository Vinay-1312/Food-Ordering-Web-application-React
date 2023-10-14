import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart  = () =>

{
    const dispatch = useDispatch(clearCart);
    
    const handleclearCart = ()=> 
    {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store)=>store.cart.items);
    return (<div className="text-center m-5 p-4">
    
        <div className="w-6/12 m-auto">
            
            {cartItems.length===0?
            <div className="flex flex-col items-center justify-center ">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iBO4Ix7FjA3ImURaOGFKXUVqi3leu1Rj6A&usqp=CAU" className="p-4😮"></img>
            <h1 className="font-bold font-sans font-size-10px p-4 dark:text-white">Cart is empty!</h1>
            <img src="https://media.tenor.com/TOrBNgBTDosAAAAC/he-maa-mataji.gif" className="p-4"></img>
            </div>
            : <button className="p-2 m-2 rounded-lg bg-black text-white" onClick={()=>{handleclearCart()}}>Clear Cart </button>}
            {}
            <ItemList data={cartItems} />
        </div>
    </div>
    );
}
export default Cart;