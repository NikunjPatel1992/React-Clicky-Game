import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="container cardcontainer">
      <div className="card" onClick={() => props.imageClick(props.id)}>
        <div className="img-container">
          <img data-id={props.id} alt={props.name} src={props.image} />
        </div>
               
      </div>
    </div>
    
  );
}

export default FriendCard;
