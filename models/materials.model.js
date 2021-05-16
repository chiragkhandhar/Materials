const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialSchema = new Schema(
  {
    name: {
      type: String,
    },
    volume: {
      type: Number,
    },
    delDate: {
      type: String,
    },
    color: {
      type: String,
    },
    cost: {
      type: Number,
    },
    total : {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
