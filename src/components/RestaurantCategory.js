
import ItemList from "./ItemList";

const RestaurantCategory = ({data, setShowIndex, showItems, dummy}) => {
  //  console.log(data);

  // Right now RestaurantCategory is controlling itself (every component) has its own control
  // here we dont want to give power of show and collapse to any component , we want to lift state up by giving power to parent(RestaurantMenu) and control all component by RestaurantMenu
  // we want parent to tell its child to show component or not
  // this RestaurantCategory is controlled component now, by its parent

  const handleClick = () => {
    // setShowIndex();
    setShowIndex((prevIndex) => prevIndex === index ? null : index);
  }

   return (
      <div>
         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
               <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
               <span>{showItems ? "⬆" : "⬇"}</span>
            </div>
            
            {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
            
         </div>
      </div>
   )
}

export default RestaurantCategory;