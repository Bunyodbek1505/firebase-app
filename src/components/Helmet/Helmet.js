import React from "react";


const Helmet = (props) => {
  document.title = "OnlineShop -" + props.title;
  return <div className="w-100">{props.childern}</div>;
};

// console.log(document.title)



export default Helmet;
