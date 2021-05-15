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
    current_material: {},
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

  setCurrentItem = (material) => {
    this.setState({
      current_material: material,
    });
  };

  addNewItem = () => {
    const object = {
      name: "",
      volume: 0,
      delDate: "",
      color: "#44D7B6",
      cost: 0,
    };
    this.setState({
      data: this.state.data.push(object),
    });
  };

  handleChange = (event) => {
    this.setState({
      current_material: {
        _id: this.state.current_material._id,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSave = () => {
    // Call API
  };

  render() {
    const { current_material } = this.state;
    return (
      <Fragment>
        <div theme="cesium" className="material-container">
          <div className="component-wrapper">
            <p className="title">Materials</p>
            <div className="btns">
              <button className="add-btn" onClick={this.addNewItem}>
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
                    <ListRow
                      key={material._id}
                      material={material}
                      setCurrentItem={this.setCurrentItem}
                    />
                  ))
                ) : (
                  <p>No Materials</p>
                )}
              </div>
              <div className="material-view">
                {current_material._id && (
                  <>
                    {" "}
                    <div className="mv-col-1">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={current_material.name}
                      />

                      <label htmlFor="volume">
                        Volume (m<sup>3</sup>)
                      </label>
                      <input
                        id="volume"
                        type="number"
                        name="volume"
                        onChange={this.handleChange}
                        value={current_material.volume}
                      />

                      <label htmlFor="delDate">Delivery Date</label>
                      <input
                        id="delDate"
                        type="date"
                        name="delDate"
                        value={current_material.delDate}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="mv-col-2">
                      <label htmlFor="color">Color</label>
                      <div className="color-container">
                        <input
                          id="color"
                          type="color"
                          name="color"
                          value={current_material.color}
                          onChange={this.handleChange}
                        />
                      </div>
                      <label htmlFor="cost">
                        Cost (USD per m<sup>3</sup>)
                      </label>
                      <input
                        id="cost"
                        type="number"
                        name="cost"
                        onChange={this.handleChange}
                        value={current_material.cost}
                      />
                      <button className="save-btn">Save</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Materials;
