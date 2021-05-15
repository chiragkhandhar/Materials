import React from "react";

function ListRow(props) {
  return (
    <div className="container">
      <div
        className="label-color"
        style={{ backgroundColor: `${props.material.color}` }}
      />
      <div className="materials-details">
        <p className="materials-title">{props.material.name}</p>
        <p className="materials-subtitle">
          {props.material.volume} m<sup>3</sup>
        </p>
      </div>
    </div>
  );
}

export default ListRow;
