import React from "react";

const ListRow = (props) => {
  const handleMaterialClick = () => {
    props.setCurrentItem(props.material);
  };

  return (
    <div className="container" onClick={handleMaterialClick}>
      <div
        className="label-color"
        style={{ backgroundColor: `${props.material.color}` }}
      />
      <div className="materials-details">
        <p className="materials-title">
          {props.material.name === "" ? "New Material" : props.material.name}
        </p>
        <p className="materials-subtitle">
          {props.material.volume} m<sup>3</sup>
        </p>
      </div>
    </div>
  );
};

export default ListRow;
