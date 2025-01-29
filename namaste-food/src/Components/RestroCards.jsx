import React from "react";
import "./restroCard.css";

//for a dynamic rendering of cards use props
// const RestroCards = (props) => {        //u can do like this  const RestroCards = ({resname, cuisins})
//     const{resname, cuisins} = props   //destructuring props

//   return (
//       <div className='res-container'>
//           <div className='res-card'>
//             <img className='biriyani-img' src='nanda biriyani.png' />
//               <h3>{resname}</h3>
//               <h4>{cuisins}</h4>
//             <h4>4.5 rating</h4>
//             <h4>20 minutes</h4>
//           </div>
//       </div>
//   )
// }

export const RestroCards = ({ resData }) => {
  const { thumbnail, title, rating, description } = resData; // Further destructure resData

  return (
    <div className="res-container">
      <div className="res-card">
        <img src={thumbnail} alt={title || "Thumbnail not available"} />
        <h3>{title || "Title not available"}</h3>
        <h6>{description || "No description available"}</h6>
        <h5>{rating || "No rating available"}</h5>
      </div>
    </div>
  );
};

export default RestroCards;
