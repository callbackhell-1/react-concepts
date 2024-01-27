import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
const Body = () => {
  let listOfRestaurants = [
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334476",
        name: "Domino",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.8",
      },
    },
    {
      data: {
        id: "334477",
        name: "Pizza Hut",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.2",
      },
    },
  ];
  return (
    <div className="body">
      <div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              listOfRestaurants = listOfRestaurants.filter((res) => {
                if (res.data.avgRating > 4) {
                  console.log(res);
                }
              });
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => {
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
