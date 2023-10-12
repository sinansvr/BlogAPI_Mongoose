const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  }
);

const newSchema = new mongoose.Schema({},{})

const blogPostSchema = new mongoose.Schema(
  {
    blogCategoryId:{
      type:mongoose.Schema.ObjectId,
      ref:"BlogCategory",
      required:true
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);


// const BlogCategoryModel=mongoose.model("BlogCategory",blogCategorySchema)
// const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);

// module.exports = {
//   BlogCategory:BlogCategoryModel,
//   BlogPost: BlogPostModel,
// };

module.exports={
  BlogCategory:mongoose.model("BlogCategory",blogCategorySchema),
  BlogPost:mongoose.model("BlogPost",blogPostSchema)
}
