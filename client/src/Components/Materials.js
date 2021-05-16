/**
 * @class Materials
 * @classdesc This is the Materials Component file, which can be reused in other components by simply importing this file.
 * @requires {@link ListRow}
 * @example
 * <ListRow
 *    key={material._id}
 *    material={material}
 *    setCurrentItem={this.setCurrentItem}
 * />
 * @author Chirag Khandhar
 * @hideconstructor
 */

import React, { Component, Fragment } from "react";
import axios from "axios";

// Import Styles
import "../Styles/Materials.css";
import "../Styles/ListRow.css";

// Icons
import { FaPlus, FaTrash } from "react-icons/fa";

// Components
import ListRow from "./ListRow";

export class Materials extends Component {
  /**
   * @memberof Materials
   * @member
   * @instance
   * @property {Object} state - State variable of Material component.
   * @property {Object} state.current_material - Holds the active material object.
   * @property {Number} state.total - Holds the total price of all materials.
   * @property {Array} state.data - Holds the list of Material objects from database.
   */
  state = {
    current_material: {},
    total: 0,
    data: [],
  };

  /**
   * @function
   * @memberof Materials
   * @description React lifecycle method which gets called after the components are mounted successfully. It then calls ``api_getAllMaterials()``
   * @instance
   */
  componentDidMount = () => {
    this.api_getAllMaterials();
  };

  /**
   * @function
   * @memberof Materials
   * @description Calls API to get all the materials data from the database.
   * @instance
   */
  api_getAllMaterials = () => {
    axios
      .get("/api/materials")
      .then((materials) => {
        this.setState({
          data: materials.data,
        });
      })
      .then(() => this.calculateTotal());
  };

  /**
   * @function
   * @memberof Materials
   * @description Calls API to add a new empty object to the database.
   * @param {Object} material This is new object which will be added to the database.
   * @instance
   */
  api_addNewMaterial = (material) => {
    axios
      .post("/api/material", material)
      .then((res) => {
        let material = {
          _id: res.data.data._id,
          name: res.data.data.name,
          volume: res.data.data.volume,
          delDate: res.data.data.delDate,
          color: res.data.data.color,
          cost: res.data.data.cost,
        };
        this.api_getAllMaterials();
        this.setCurrentItem(material);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * @function
   * @memberof Materials
   * @description Calls API to update an existing material object.
   * @param {Object} material This is the updated object which will be overwritten in the database.
   * @instance
   */
  api_updateMaterial = (material) => {
    axios
      .post("/api/material/update", material)
      .then(() => {
        this.api_getAllMaterials();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * @function
   * @memberof Materials
   * @description Calls API to delete an existing material object.
   * @param {Object} material This is the object that is to be deleted from the database.
   * @instance
   */
  api_deleteMaterial = (material) => {
    axios
      .post("/api/material/delete", material)
      .then((res) => {
        this.api_getAllMaterials();
        this.setCurrentItem({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * @function
   * @memberof Materials
   * @description Helper function to set the ``current_material`` property of the component state.
   * @param {Object} material This is the updated object to be set.
   * @instance
   */
  setCurrentItem = (material) => {
    this.setState({
      current_material: material,
    });
  };

  /**
   * @function
   * @memberof Materials
   * @description On-Click handler of the **Add Item** button. This function prepares a material object with default values and calls the corresponding API method ``api_addNewMaterial()``.
   * @instance
   */
  addNewItem = () => {
    const material = {
      name: "",
      volume: 0,
      delDate: "",
      color: "#44D7B6",
      cost: 0.0,
    };
    this.api_addNewMaterial(material);
  };

  /**
   * @function
   * @memberof Materials
   * @description On-Change handler of the input fields. It gets called everytime when any of the input fields changes.
   * @param {Object} event This is the standard ``event`` object from React.
   * @instance
   */
  handleChange = (event) => {
    this.setState({
      current_material: {
        ...this.state.current_material,
        _id: this.state.current_material._id,
        [event.target.name]: event.target.value,
      },
    });
  };

  /**
   * @function
   * @memberof Materials
   * @description Helper function to calculate the total price of all availabe materials.
   * @instance
   */
  calculateTotal = () => {
    let total = 0;
    this.state.data.length > 0 &&
      this.state.data.forEach((material) => {
        total += material.total;
      });
    total = total.toFixed(2);
    this.setState({
      total: total,
    });
  };

  /**
   * @function
   * @memberof Materials
   * @description On-Click handler of the **Save** button. This function calls corresponding API method ``api_updateMaterial()``
   * @instance
   */
  handleSave = () => {
    this.api_updateMaterial(this.state.current_material);
  };

  /**
   * @function
   * @memberof Materials
   * @description On-Click handler of the **Delete** button. This function calls corresponding API method ``api_deleteMaterial()``
   * @instance
   */
  handleDelete = () => {
    this.api_deleteMaterial(this.state.current_material);
  };

  render() {
    const { current_material, total } = this.state;
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
              <button
                className="delete-btn"
                onClick={this.handleDelete}
                disabled={this.state.current_material._id ? false : true}
              >
                <FaTrash />
                <p style={{ marginLeft: "0.5rem" }}>Delete</p>
              </button>
            </div>

            <div className="material-list-wrapper">
              <div>
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
                    <p className="material-list-msg">No Materials</p>
                  )}
                </div>
                <div className="cost-wrapper">
                  <p> Total Cost: </p>
                  <p>{`$ ${total}`}</p>
                </div>
              </div>

              <div className="material-view">
                {current_material._id && (
                  <>
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
                      <button className="save-btn" onClick={this.handleSave}>
                        Save
                      </button>
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
