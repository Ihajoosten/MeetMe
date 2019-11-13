/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Category = require("../models/categories");

module.exports = {
  getAllCategories(req, res, next) {
    Category.find({}).exec((errors, categories) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      if (!categories) {
        return res
          .status(404)
          .json({ Message: "No categories found! Create one" });
      }

      return res.json(categories);
    });
  },
  createCategories(req, res, next) {
    const body = req.body;

    let category = new Category({
      name: body.name,
      image: body.image
    });

    category.save().then(() => res.status(200).json({ result: "OK" }));
  },
  updateCategoryById(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    Category.findOneAndUpdate({ _id: id }, body)
      .then(() => Category.find({ _id, id }))
      .then(category => {
        res.status(200).json({ result: category });
      });
  },
  deleteCategoryById(req, res, next) {
    const id = req.params.id;
    let c;
    Category.findOne({_id: id})
        .then((category) => {
            c = category;
        })
        .then(() => Category.findOneAndDelete({_id: id}))
        .then(() => {
            res.status(200).json({result: c});
        });
  }
};
