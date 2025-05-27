import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
   // {console.log(props)}

   const {loggedInUser} = useContext(UserContext);

   //destructuring on fly
   const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = props?.resdata;

   return (   <div className="res-card m-4 p-4 w-[250px] h-full rounded-lg bg-gr relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100 ">
      
      <img
        className="rounded-lg h-auto w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>

      </div>
   )
}

export default RestaurantCard;