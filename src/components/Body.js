import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // Local State Variable - Super powerful variable

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  const [searchText, setSearchText] = useState(" ");
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
  const{loggedInUser,setuserName} =useContext(UserContext);
  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like You are offline!! please check your internet connection
      </h1>
    );
  }

  return (
    <div>
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className=" border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg">UserName</button>
       <input type="text" className="border border-solid" value={loggedInUser} onChange={(e)=>setuserName(e.target.value)}></input>
        </div>
      </div>

      <div className="flex">
        {console.log("Filtered Restaurant", listOfRestaurants)}
        {filteredRestaurant.map((restaurant) =>
          // If Restaurant is promoted add a promoted Label to it
          restaurant.data.promoted ? (
            <RestaurantCardPromoted resData={restaurant} />
          ) : (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
