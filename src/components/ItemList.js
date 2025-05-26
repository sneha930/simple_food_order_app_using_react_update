import { CDN_URL } from "../utils/constants";

const ItemList = ({items, dummy}) => {
   console.log(items);
   console.log(dummy);
   return (
      <div>
            {items.map((item) => (
               <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
                  <div className="w-9/12">
                     <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹ {item?.card?.info?.price/100}</span>
                     </div>
                     <p className="text-xs">{item?.card?.info?.description}</p>
                  </div>
                  <div className="w-3/12 p-4">
                     <div className="absolute">
                        <button className="p-2 shadow-lg rounded-lg mx-16 bg-black text-white">Add +</button>
                     </div>
                     <img className="w-30" src={CDN_URL + item?.card?.info?.imageId} />
                  </div>
               </div>
            ))}
      </div>
   )
}

export default ItemList;