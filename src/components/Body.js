import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setSearchText] = useState("");

   // with every searchtext key press(state changes) body getting rendered each time
   // console.log("body rendered");

   useEffect(() => {
      // console.log("useEffect called");
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const  json = await data.json();

      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;

      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false) return <h1>Looks like you are Offline, Please check your internet connection</h1>

   const {loggedInUser, setUserName} = useContext(UserContext);

   //conditional rendering
   return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body bg-slate-100">
         <div className="filter flex">

            <div className="search m-4 p-4">
            <input type="text" className="p-1 border border-orange-300 rounded-lg focus:outline-none text-gray-700" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>

               <button className="bg-orange-600 px-4 py-2 m-4 text-white font-semibold hover:bg-orange-700 rounded-md active:bg-orange-800" onClick={() => {
                  //</div>filter the restaurants and update ui
                  //search text
                  console.log(searchText);
                  const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                  setFilteredRestaurant(filteredRestaurant);

               }}>Search</button>
            </div>

            <div className="search p-4 m-4 flex items-center">
               <label>User Name</label>
            <input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className="border border-black p-2" />
            </div>

            <div className="search p-4 m-4 flex items-center">
            <button className="bg-orange-600 text-white px-4 py-2 font-semibold hover:bg-orange-700 text-white rounded-md active:bg-orange-800" onClick = {() => {
               const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
               setListOfRestaurants(filteredList);
            }}
            >Top Rated Restaurants</button>
            </div>
         </div>

         <div className="flex flex-wrap justify-center">
            {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resdata={restaurant?.info} 
            /></Link>))}

         {/* {console.log = (restaurant.data.data)} */}
            
         </div>
      </div>
   )
}

export default Body;