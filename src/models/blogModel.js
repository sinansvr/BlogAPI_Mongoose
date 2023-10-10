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
    collation: "blogCategories",
    timestamps: true,
  }
);



const blogPostSchema = new mongoose.Schema(
  {
    //id auto created

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