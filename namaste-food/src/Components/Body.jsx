import RestroCards from "./RestroCards";
import "./body.css";
import resObj from "../utils/mockData";
import { useState } from "react";

// let res = [
//   {
//     id: 1,
//     name: "KFC",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "MDC",
//     rating: 3.5,
//   },
//   {
//     id: 3,
//     name: "Dominos",
//     rating: 4.5,
//   },
// ];

//logic to filter based on the rating

// const FilteredresObj = resObj.filter((resItem) => resItem.rating > 4);
// console.log(FilteredresObj);

const Body = () => {
  const [ResList, setResList] = useState(resObj);
  console.log(ResList);

  return (
    <div className="body">
      <div className="search">
        <div className="search-text">Search</div>
      </div>
      <div className="filter-res">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredResturant = ResList.filter((item) => item.rating > 4);
            setResList(FilteredResturant);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-cantainer">
        {/* passing obj as a prop for dynamic card  */}
        {/* <RestroCards resData={resObj[0]} /> */}
        {/* <RestroCards resData={resObj[1]} />
                <RestroCards resData={resObj[2]} />  */}

        {/* Using map function */}
        {/*use state variable here while mapping as well its was resObj*/}
        {ResList.map((restaurant) => (
          <RestroCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
