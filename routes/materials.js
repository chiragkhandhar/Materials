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

// Add new Material
exports.addMaterial = (request, response) => {
  const material = {
    name: request.body.name,
    volume: request.body.volume,
    delDate: request.body.delDate,
    color: request.body.color,
    cost: request.body.cost,
    total: (request.body.volume * request.body.cost),
  };

  const newItem = new Material(material);

  newItem
    .save()
    .then((data) => response.status(200).json({ code: "SUCCESS", data: data }))
    .catch((err) => {
      console.log(err);
      response.status(500).json({ code: "INTERNAL SERVER ERROR" });
    });
};

// Update a Material
exports.updateMaterial = (request, response) => {
  Material.updateOne(
    { _id: request.body._id },
    {
      $set: {
        name: request.body.name,
        volume: request.body.volume,
        delDate: request.body.delDate,
        color: request.body.color,
        cost: request.body.cost,
        total: (request.body.volume * request.body.cost),
      },
    }
  )
    .then((obj) => {
      response.status(200).json({ code: "SUCCESS"});
    })
    .catch((err) => {
      response.status(500).json({ code: "INTERNAL SERVER ERROR" });
    });
};

// Delete an Material
exports.deleteMaterial = (request, response) => {
    Material.deleteOne({ _id: request.body._id })
      .then(() => {
        response.status(200).json({ code: "SUCCESS" });
      })
      .catch((err) => {
        console.log(err);
        response.status(500).json({ code: "INTERNAL SERVER ERROR" });
      });
  };
