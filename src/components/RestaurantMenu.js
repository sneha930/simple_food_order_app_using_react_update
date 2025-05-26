import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  console.log(resInfo?.data?.cards);

  // Step 1: Extract REGULAR cards
  const allCards = resInfo?.data?.cards || [];
  const regularCards =
    allCards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Step 2: Extract both ItemCategory and NestedItemCategory
  const categories = [];

  for (const cardObj of regularCards) {
    const cardData = cardObj?.card?.card;
    if (!cardData) continue;

    const type = cardData["@type"];
    if (type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
      categories.push(cardData);
    } else if (type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
      const nested = cardData.categories || [];
      for (const cat of nested) {
        categories.push(cat);
      }
    }
  }

  console.log("Final categories:", categories);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>

      {categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory key={category?.title + index} data={category} />
        ))
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
