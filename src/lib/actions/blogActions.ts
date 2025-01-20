"use server";

import {connectToDatabase} from "../db";
import Blog from "@/app/api/blogs/model";
import {BlogPost, BlogPostSchema} from "../validator/validator";
import {errorResponse, successResponse, zodErrorResponse} from "@/app/api/helpers";

export async function addBlog(data: BlogPost) {
  try {
    BlogPostSchema.parse(data);
    await connectToDatabase();
    const newBlog = new Blog(data);
    await newBlog.save();
    return {success: true, message: "Blog post created successfully"};
  } catch (error) {
    console.error("Failed to add blog:", error);
    if (error instanceof Error) {
      return {success: false, message: error.message};
    }
    return {success: false, message: "An unexpected error occurred"};
  }
}
export const onCreateBlog = async (payload: BlogPost) => {
  try {
    const {error} = BlogPostSchema.safeParse(payload);
    if (error) return zodErrorResponse(error, 400);

    await connectToDatabase();

    const blog = (await Blog.create({
      ...payload,
    })) as BlogPost;
    return successResponse(blog);
  } catch (error) {
    console.log(error);
    return errorResponse("Internal server error");
  }
};

// export async function addBlog(data: BlogPost) {
//   try {

//     const parsedData = BlogPostSchema.parse({
//       ...data,
//       tags: Array.isArray(data.tags) ? data.tags : data.tags.split(",").map((tag) => tag.trim()),
//       images: Array.isArray(data.images) ? data.images : data.images.split(",").map((url) => url.trim()),
//     })

//     await connectToDatabase()
//     const newBlog = new Blog(parsedData)
//     await newBlog.save()
//     return { success: true, message: "Blog post created successfully" }
//   } catch (error) {
//     console.error("Failed to add blog:", error)
//     if (error instanceof Error) {
//       return { success: false, message: error.message }
//     }
//     return { success: false, message: "An unexpected error occurred" }
//   }
// }
