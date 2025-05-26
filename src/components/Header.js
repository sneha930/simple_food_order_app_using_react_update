/*
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

   const[btnNameReact, setBtnNameReact] = useState("Login");
   console.log("Header render");

   const onlineStatus = useOnlineStatus();

   useEffect(() => {
      console.log("useEffect called from header");
   }, []);

   return (
      <div className="flex justify-between ">
         <div className="w-24 h-auto">
            <img className="" src={LOGO_URL} />
         </div>
         <div className="flex items-center">
            <ul className="flex p-4 m-3 justify-between font-semibold text-gray-700">
               <li className="px-3">{onlineStatus ? "✅" : "🔴"}</li>
               <li className="px-3 hover:text-orange-600"><Link to="/">Home</Link></li>
               <li className="px-3 hover:text-orange-600"><Link to="/about">About us</Link></li>
               <li className="px-3 hover:text-orange-600"><Link to="/contact">Contact us</Link></li>
               <li className="px-3 hover:text-orange-600"><Link to="/grocery">Grocery</Link></li>
               <li className="px-3 hover:text-orange-600">Cart</li>
               <button className="px-3 hover:text-orange-600" onClick={() => {btnNameReact == "Login" ?setBtnNameReact("Logout") : setBtnNameReact("Login")}}>{btnNameReact}</button>
            </ul>
            {console.log("sdf")}
         </div>
      </div>
   )
}

export default Header;