const Material = require("../models/materials.model");

// Get all Materials
exports.getAllMaterials = (request, response) => {
  Material.find()
    .then((materials) => {
      response.status(200).json(materials);
    })
    .catch((err) =>
      response.status(500).json({ code: "INTERNAL_SERVER_ERROR", err: err })
    );
};
