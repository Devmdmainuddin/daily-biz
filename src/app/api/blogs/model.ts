import {BlogPost} from "@/lib/validator/validator";
import {Document, Model, model, models, Schema} from "mongoose";

export interface IBlog extends Document, BlogPost {
  _id: string;
  // tags: string[];
  createdAt: string;
  updatedAt: string;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    tags: {type: [String], required: true},
    images: {type: [String], required: true},
    author: {type: String},
    userEmail: {type: String},
    authorImage: {type: String},
    description: {type: String, trim: true},
    isPublished: {type: Boolean, required: true, default: false},
  },
  {
    timestamps: true,
  },
);

const Blog = (models?.blogs as Model<IBlog>) || model<IBlog>("blogs", blogSchema);

export default Blog;
