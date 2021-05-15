const { app, port } = require("./utils/admin");

// Route variables
const { getAllMaterials } = require("./routes/materials");

// Connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Routes
app.get("/api/materials", getAllMaterials);
