import React from "react";
import './Listview.css'

const Listview = ({ item }) => {
  return (
    
    <div className="container-ls" >
   
      <div className="card-ls">
        <img className="img" src={item.url} alt="book" />
      </div>
      <div className="space-ls"></div>
      <div className="details-ls">
        <div className="title">Title : <strong>{item.title}</strong></div>
        <div>Description : {item.description}</div>
      </div>
    </div>
  );
};

export default Listview;