const controller = require("../controllers/categories");
// const auth = require('../services/authentication');

module.exports = app => {
  // User endpoints
  app.get("/api/categories", controller.getAllCategories);
  app.post("/api/categories", controller.createCategories);
  app.put("/api/categories/:id", controller.updateCategoryById);
  app.delete("/api/categories/:id", controller.deleteCategoryById);
};

// auth.validateToken -> authentication works, but for development not currently using