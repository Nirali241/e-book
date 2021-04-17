import React from "react";
import './Gridview.css'
const Gridview = ({ item }) => {
  return (
    <div className="container" style={{ padding: 20 }}>
      <div className="card">
        <img className="img" src={item.url} alt="book" />
        <div className="details">
          <div>Title :{item.title}</div>
          <div>Description : {item.description}</div>
        </div>
       </div>
    </div>
  );
};

export default Gridview;