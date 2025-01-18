"use server";

import {revalidatePath} from "next/cache";
import {connectToDatabase} from "../db";
import Blog from "@/app/api/blogs/model";
import {BlogPost, BlogPostSchema} from "../validator/validator";

export async function addBlog(data: BlogPost) {
  try {
    BlogPostSchema.parse(data);
    await connectToDatabase();
    const newBlog = new Blog(data);
    await newBlog.save();
    revalidatePath("/api/blogs");

    return {success: true, message: "Blog post created successfully"};
  } catch (error) {
    console.error("Failed to add blog:", error);
    if (error instanceof Error) {
      return {success: false, message: error.message};
    }
    return {success: false, message: "An unexpected error occurred"};
  }
}
