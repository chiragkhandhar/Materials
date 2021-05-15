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
      type: Date,
    },
    color: {
      type: String,
    },
    cost: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
