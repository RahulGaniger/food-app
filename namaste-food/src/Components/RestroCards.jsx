import React from 'react'
import './restroCard.css'

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


const RestroCards = (props) => {  
    const { resData } = props;
    console.log(resData);
    
    
    return (
        <div className="res-container">
            <div className="res-card">
                
                <img src={resData.thumbnail}></img>
                
                <h3>{resData.title || "Title not available"}</h3>
               
                <h4>{resData.rating || "No rating available"}</h4>
            </div>
        </div>

    );
};

export default RestroCards;


