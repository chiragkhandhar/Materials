const { app, port } = require("./utils/admin");

// Route variables
const { getAllMaterials, addMaterial } = require("./routes/materials");

// Connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Routes
app.get("/api/materials", getAllMaterials);
app.post("/api/material", addMaterial);
