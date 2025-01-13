import {BlogPost} from "@/lib/validator/validator";
import {Document, Model, model, models, Schema} from "mongoose";

export interface IBlog extends Document, BlogPost {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [String],
    author: {type: String},
    userEmail: {type: String},
    authorImage: {type: String},
    description: {
      type: String,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    tags: {type: [String], default: ["new arrival"]},
  },
  {
    timestamps: true,
  },
);

const Blog = (models.Blog as Model<IBlog>) || model<IBlog>("Blog", blogSchema);

export default Blog;
