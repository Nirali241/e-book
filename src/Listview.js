import React from "react";
import './Listview.css'

const Listview = ({ item }) => {
  return (
    <div className="container" >
    
      <div className="card">
        <img className="img" src={item.url} alt="book" />
      </div>
      <div className="space"></div>
      <div className="details">
        <div>Title :<strong>{item.title}</strong></div>
        <div>Description : {item.description}</div>
      </div>
    </div>
  );
};

export default Listview;