"use strict";

require("express-async-errors");

const { BlogCategory , BlogPost } = require("../models/blogModel");


//-------------BlogCategory----------------

module.exports.BlogCategory = {

  list: async (req, res) => {

    const data = await BlogCategory.find();

    res.status("200").send({
      error: false,
      result: data,
      count:data.length,
      body:req.body
    });
  },

  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      result: data,
      body: req.body,
    });
  },

  read: async (req, res) => {
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogCategory.updateOne({ _id: req.params.categoryId}, req.body);

    res.status(202).send({
      error: false,
      result: data,
      body: req.body,
      newData: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });
    
    res.sendStatus((data.deletedCount >= 1) ? 204 : 404);
  },
};

//-------------BlogPost----------------

module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find().populate('blogCategoryId');

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      // body: req.body,
    });
  },

  listCategoryPosts: async (req, res) => {

    const data = await BlogPost.find({ blogCategoryId: req.params.categoryId }).populate('blogCategoryId')

    res.status(200).send({
        error: false,
        count: data.length,
        result: data
    })
},

  create: async (req, res) => {

    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result: data,
      body: req.body,
    });
  },
  read: async (req, res) => {

    const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId');

    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {

    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);
    
    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
      newData: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },

  delete: async (req, res) => {

    const data = await BlogPost.deleteOne({ _id: req.params.postId });

    res.sendStatus((data.deletedCount >= 1) ? 204 : 404);
  },
};

