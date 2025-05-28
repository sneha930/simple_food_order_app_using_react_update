import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

   const dispatch = useDispatch();

   const handleClearCart = () => {
      dispatch(clearCart());
   }

   // the name is selector, because we are selecting small portion of the store
   // store.cart.items => more efficient 
   const cartItems = useSelector((store) => store.cart.items);

   return (
      <div className="text-center m-4 p-4">
         <h1 className="text-2xl font-bold">Cart</h1>
         <div className="w-6/12 m-auto">
         <button className="p=2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
         {cartItems.length === 0 && <h1>Cart is empty. Add Some Items to the Cart</h1>}
         <ItemList items={cartItems} />
         </div>
      </div>
   )
}

export default Cart;