import RestroCards from "./RestroCards";
import ShimmerUi from "./ShimmerUi";
import "./body.css";
import { useEffect, useState } from "react";

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
  const [ResList, setResList] = useState([]);

  const [filterBtn, setFilterBtn] = useState("");

  const [filteredRes, setFilteredrestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");

    //optional chaining
    const json = await data?.json();
    setResList(json.products);
    setFilteredrestaurant(json.products);
  };

  //conditional rendering
  // if (ResList.length === 0) {
  //   return <ShimmerUi />; //<h1>Loading.....</h1>; for shimmer ui use here add component in return
  // }

  //using ternery operator
  return ResList.length === 0 ? (
    <ShimmerUi />
  ) : 
    <div className="body">
      <div className="body-2">
        <div className="search">
          <input
            className="search-text"
            value={filterBtn}
            onChange={(e) => {
              setFilterBtn(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurants based on user input
              const filterRes = ResList.filter((item) =>
                item.title.toLowerCase().includes(filterBtn.toLowerCase())
              );

              setFilteredrestaurant(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-res">
          <button
            className="filter-btn"
            onClick={() => {
              const FilteredResturant = ResList.filter(
                (item) => item.rating > 4
              );
              setResList(FilteredResturant);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="res-cantainer">
        {/* passing obj as a prop for dynamic card  */}
        {/* <RestroCards resData={resObj[0]} /> */}
        {/* <RestroCards resData={resObj[1]} />
                <RestroCards resData={resObj[2]} />  */}

        {/* Using map function */}
        {/*use state variable here while mapping as well its was resObj*/}
        {filteredRes.map((restaurant) => (
          <RestroCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  
};

export default Body;
