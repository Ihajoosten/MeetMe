const controller = require("../controllers/categories");
const auth = require('../services/authentication');

module.exports = app => {
  // User endpoints
  app.get("/api/categories", auth.validateToken,  controller.getAllCategories);
  app.post("/api/categories", auth.validateToken,  controller.createCategories);
  app.put("/api/categories/:id", auth.validateToken,  controller.updateCategoryById);
  app.delete("/api/categories/:id", auth.validateToken,  controller.deleteCategoryById);
};
