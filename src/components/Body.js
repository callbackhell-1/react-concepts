import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div>
        <div className="search">search</div>
        <div className="res-container">
          {resList.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
