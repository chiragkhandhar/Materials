/**
 * @class ListRow
 * @classdesc This component is used within the ``<Material/>`` component. It basically defines an indivual row of the material list.
 * @author Chirag Khandhar
 * @hideconstructor
 */
import React from "react";

const ListRow = (props) => {
   /**
   * @function
   * @memberof ListRow
   * @description On-Click handler of the individual list item. This function then calls the ``setCurrentItem`` of the ``Material`` component.
   * @instance
   */
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
