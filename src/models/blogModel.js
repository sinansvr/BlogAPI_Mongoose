const mongoose = require("mongoose");

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

const BlogPostModel = mongoose.model("BlogPost", blogPostSchema);


module.exports={
    BlogPost:BlogPostModel
}