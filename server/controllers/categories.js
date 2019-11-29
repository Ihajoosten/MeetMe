/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Category = require('../models/categories');

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      await Category.find().exec((errors, categories) => {
        if (errors) return res.status(422).json({ errors });
        if (!categories)
          return res
            .status(404)
            .json({ Message: 'No categories found! Create one' });
        return res.status(200).json(categories);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  createCategories: async (req, res, next) => {
    const body = await req.body;

    if (meeting === null)
      return res.status(400).json({ message: 'Bad request - empty body' });

    const category = new Category(body);
    try {
      await category.save((err, user) => {
        if (err) return res.status(422).json({ err });
        return res.status(201).json(category);
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  updateCategoryById: async (req, res, next) => {
    const { id } = await req.params;
    const body = await req.body;

    if (body === null)
      return res.status(400).json({ message: 'Bad request - empty body' });
    if (id === null)
      return res
        .status(404)
        .json({ message: 'No category specified or does not exist' });

    try {
      await Category.findByIdAndUpdate(
        { _id: id },
        { $set: body },
        { new: true },
        (err, result) => {
          if (err) return res.status(422).json({ err });
          else return res.status(200).json(result);
        }
      );
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  },
  deleteCategoryById: async (req, res, next) => {
    const { id } = await req.params;

    if (id === null)
      return res
        .status(404)
        .json({ message: 'No meeting specified or does not exist' });
    try {
      await Category.findById({ _id: id }, async (err, category) => {
        if (err) return res.status(422).send({ err });
        await category.remove((errors, category) => {
          if (errors) return res.status(422).send({ errors });
          else
            return res
              .status(200)
              .json({ message: 'Deleted category with id: ' + category._id });
        });
      });
    } catch (error) {
      if (error) return res.status(500).json({ error });
    }
  }
};
