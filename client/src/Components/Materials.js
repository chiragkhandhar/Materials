import React, { Component, Fragment } from "react";

// Import Styles
import "../Styles/Materials.css";
import "../Styles/ListRow.css";

// Icons
import { FaPlus, FaTrash } from "react-icons/fa";

// Components
import ListRow from "./ListRow";

export class Materials extends Component {
  state = {
    data: [
      {
        _id: 1,
        name: "Sand",
        volume: 10000,
        delDate: "2021-05-29",
        color: "#FF0000",
        cost: 0.1,
      },

      {
        _id: 2,
        name: "Gravel",
        volume: 23000,
        delDate: "2021-05-29",
        color: "#0000FF",
        cost: 0.1,
      },

      {
        _id: 3,
        name: "Bricks",
        volume: 53000,
        delDate: "2021-05-29",
        color: "#44D7B6",
        cost: 0.1,
      },
    ],
  };

  

  render() {
    return (
      <Fragment>
        <div theme="cesium" className="material-container">
          <div className="component-wrapper">
            <p className="title">Materials</p>
            <div className="btns">
              <button className="add-btn" >
                <FaPlus />
                <p style={{ marginLeft: "0.5rem" }}>Add</p>
              </button>
              <button className="delete-btn">
                <FaTrash />
                <p style={{ marginLeft: "0.5rem" }}>Delete</p>
              </button>
            </div>

            <div className="material-list-wrapper">
              <div className="material-list">
                {this.state.data.length > 0 ? (
                  this.state.data.map((material) => (
                    <ListRow key={material._id} material={material} />
                  ))
                ) : (
                  <p>No Materials</p>
                )}
              </div>
              <div className="material-view">
                <div className="mv-col-1">
                  <label for="name">Name</label>
                  <input id="name" type="text" name="name" />

                  <label for="volume">
                    Volume (m<sup>3</sup>)
                  </label>
                  <input id="volume" type="number" name="volume" />

                  <label for="del-date">Delivery Date</label>
                  <input id="del-date" type="date" name="del-date" />
                </div>
                <div className="mv-col-2">
                  <label for="color">Color</label>
                  <div className="color-container">
                    <input id="color" type="color" name="color" />
                  </div>
                  <label for="cost">
                    Cost (USD per m<sup>3</sup>)
                  </label>
                  <input id="cost" type="number" name="cost" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Materials;
